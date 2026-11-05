# RebateTools ad creatives

These are the 10 ad angles, each in three sizes. The folder is excluded from the Vercel deploy (see `/.vercelignore`).

## Which size goes in which placement (Facebook + Instagram only)

| Placement | Size to use | Folder |
|---|---|---|
| Facebook Feed, Instagram Feed, Instagram Explore, Facebook video feeds | **4:5** (2160×2700) | `creatives/feed-4x5/` |
| Facebook Stories, Instagram Stories, Facebook Reels, Instagram Reels | **9:16** (2160×3840) | `creatives/stories-reels-9x16/` |
| Backup only (for any slot that won't take 4:5) | 1:1 (2160×2160) | `creatives/square-1x1/` |

Each ad gets two creatives: the 4:5 file in the feed (square) slot and the 9:16 file in the vertical slot. On Whop that means `format: "square"` for the 4:5 file and `format: "vertical"` for the 9:16 file.

**Turn off:** Audience Network, Messenger, Facebook Marketplace, Threads, Facebook right column, search results, in-stream video, and all Advantage+ creative enhancements.

**Keep on:** Advantage+ audience and text variations.

## The 10 ads

| # | Angle | Headline | Button |
|---|---|---|---|
| 01 | Who it's for | FOREX AFFILIATE? | Unlock your growth plan |
| 02 | Who it's for | MASTER IB? Get more from every sub-IB. | Unlock your custom growth plan |
| 03 | Spreadsheets | Still tracking rebates in spreadsheets? | Get your hours back |
| 04 | Churn | Your top client went quiet 12 days ago. Did you notice? | Catch churn before it costs you |
| 05 | Sub-IBs | Which sub-IB is actually making you money? | Grow the partners who grow you |
| 06 | Spreadsheets | Stop guessing. Start calculating. | Unlock your custom growth plan |
| 07 | Churn | Your rebates dropped 31%. Do you know why? | Find out why |
| 08 | Where the money comes from | A few clients drive most of your rebates. Do you know which ones? | Find your top earners |
| 09 | Churn | Who's trading less than last week? | Spot the slowdown |
| 10 | Where the money comes from | Know who's keeping your income alive. | Find your top traders |

UTM naming per ad: `utm_source=whop&utm_campaign=rt-launch&utm_content=<NN>-<angle>`, e.g. `04-churn-quiet-client`.

## 9:16 safe zone used
- Logo, headline, product visual and button sit between about 13% and 70% of the height.
- The right-hand icon column (like, comment, share, save) is kept clear: buttons are left or centre aligned, and supporting copy stops 180px from the right edge.
- The bottom ~30% only holds small supporting copy, which is fine to be covered by the Reels caption.

## Rebuilding
`source/` holds the HTML/CSS used to render these. To re-render:
1. Copy `source/*` into a folder with the brand assets from `/assets` (`rt-logo*.webp`, `rt-mark.webp` and the partner logos).
2. Run `npm i @fontsource/inter @fontsource/jetbrains-mono playwright`.
3. Run `node render.js <ads> sq,f45,vt 2`.
