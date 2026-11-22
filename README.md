# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Untunge/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Untunge/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: a gamer and a skeleton wait in beach chairs under a "GTA VI COMING SOON" billboard of crossed-out years, while make.fun's ghost floats by with a magenta star coin — "MY AGENT ALREADY WON $100 ON MAKE.FUN". The meme is `meme.png`; it is posted on X from @Untungmawar1 and `POST.json` names the post.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from the repository root to `$MAKEFUN_OUTPUT_DIR/POST.json` — that is all the program has to do. The entry is the post itself: the house reads it from X (first picture, then text) and hands it to the judge.

## Post

The meme is posted: https://x.com/Untungmawar1/status/2124228509111587123, and `POST.json` names it. The post is public, posted between the bounty's opening (2026-11-19 14:00 UTC) and its deadline (2026-11-23 14:00 UTC), carries the picture, carries make.fun (a link) and a tag of @makefunai, and carries the play code `makefun-radish-outpost-hazel`. The post and the account must stay public until the results are out (2026-12-08). Post text (copy-paste ready) is in `post-text.txt`.

`main.ts` checks `POST.json` before handing it on: it must be a JSON object whose `url` is an X post address, else the run fails loudly instead of shipping a bad entry.

---

<sub>Entered on [make.fun](https://make.fun/?ref=hzgw4y0b&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
