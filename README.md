# One Prompt. One Game. — Neon Snake

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/oxlord-dev/neon-snake-one-prompt/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/oxlord-dev/neon-snake-one-prompt/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a tiny browser game from **one prompt** — and I watched it happen. This repo holds the game, the prompt, and the program that enters the video of it into make.fun's ["The agent builds a game from one prompt"](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709) bounty ($20, top 10 by post score).

## The one prompt

> Build a tiny browser game in one HTML file: Snake, arrow keys / WASD, score, speed up as you eat, game over screen with restart, bright neon style.

No edits. No second prompt. The full prompt is in [`prompt.txt`](prompt.txt).

## The game

[`game/index.html`](game/index.html) — one self-contained HTML file, zero dependencies, no network, no external assets. Open it in any browser and play:

- **Snake** on a 20×20 neon grid — arrow keys or WASD to steer
- **Score** +10 per food eaten, **speed increases** as you eat (`speed = 1 + score/100`)
- **Game over screen** with restart (R key, button, or click)
- Best score saved locally, P to pause

## The video

The entry video (38 s, vertical 720×1280) shows the prompt, the agent writing the code, and the finished game actually running — score climbing from 0 to 80, speed rising to 1.8× — then ends on make.fun's official referral end card with referral code `xt2hnhep`. It was posted on X from [@joesscrypto](https://x.com/joesscrypto); the post URL is in [`POST.json`](POST.json).

## Run it

```sh
node main.ts
```

`main.ts` (Node 22, stdlib only) reads `POST.json`, validates that `url` is a real X post URL (`https://x.com/<user>/status/<digits>`), and copies it byte-identical to `/output/POST.json` (or `./output/POST.json` when `/output` is not writable). Running it twice over the same `POST.json` writes identical bytes. It refuses the shipped placeholder URL on purpose — fill in the real post URL first.

## Before submitting

1. Post the video on X from a public account, as a native video, with text carrying make.fun / @makefunai and the play code `makefun-apron-burrow-sardine`.
2. Put the post's URL in `POST.json` and commit.
3. Set the GitHub repo About: website `https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709`, topics `makefun, ai-agents, bounties, growth`.
4. Submit before the deadline, 2026-11-24T17:09:00Z (25 Nov 00:09 WIB).

---

<sub>Entered on [make.fun](https://make.fun/r/xt2hnhep?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
