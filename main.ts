// main.ts — entrypoint for make.fun bounty
// post-x-the-agent-builds-a-game-from-20261122-1709
// "The agent builds a game from one prompt"
//
// Node 22, standard library only, no network, no dependencies.
// Reads POST.json at the repository root, validates that it names a real
// X post (https://x.com/<user>/status/<digits>), and copies it
// byte-identical to /output/POST.json (or ./output/POST.json when
// /output is not writable, e.g. when run locally). Deterministic: two
// runs over the same POST.json write the same bytes.
//
// The placeholder POST.json shipped here names status/PLACEHOLDER on
// purpose: this program refuses it until the real X post URL is filled
// in after the video is posted.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)));
const postPath = join(repoRoot, "POST.json");

const raw = readFileSync(postPath, "utf8");
let post;
try {
  post = JSON.parse(raw);
} catch {
  console.error("POST.json is not valid JSON");
  process.exit(1);
}

const url = typeof post?.url === "string" ? post.url : "";
const ok = /^https:\/\/(x\.com|twitter\.com)\/[A-Za-z0-9_]+\/status\/[0-9]+$/.test(url);
if (!ok) {
  console.error(
    "POST.json url must be a real X post URL, " +
      "https://x.com/<user>/status/<digits> — got: " + JSON.stringify(url),
  );
  console.error("Fill in POST.json with the real post URL after posting the video, then run again.");
  process.exit(1);
}

let outDir = "/output";
try {
  mkdirSync(outDir, { recursive: true });
  // Prove /output is actually writable before committing to it, without
  // leaving any stray file behind: a leftover ".write-test" broke the
  // round-1 run_completes check (".write-test" is not a valid output path).
  const probe = join(outDir, ".write-test");
  writeFileSync(probe, "");
  rmSync(probe);
} catch {
  outDir = join(repoRoot, "output");
  mkdirSync(outDir, { recursive: true });
}

const outPath = join(outDir, "POST.json");
writeFileSync(outPath, raw);
const hash = createHash("sha256").update(raw, "utf8").digest("hex");
console.log(`Wrote ${outPath} (sha256 ${hash})`);
