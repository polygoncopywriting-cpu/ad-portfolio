# ad-portfolio

Static video ad portfolio. Plain HTML/CSS/JS, no build step, no framework.

- Site (this repo) → GitHub Pages
- Video files → Cloudflare R2 (free tier: 10GB storage, no bandwidth/egress fee)

## 1. One-time GitHub Pages setup

1. Merge this branch to `main` (or point Pages at this branch).
2. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Push to `main` — `.github/workflows/pages.yml` deploys automatically.

## 2. One-time Cloudflare R2 setup

1. Create a free Cloudflare account (requires a card on file to activate R2 —
   you won't be charged while under the free limits, but this step needs a human).
2. Dashboard → R2 → **Create bucket**, e.g. `ad-portfolio-videos`.
3. Bucket → **Settings → Public access → Allow Access** to get a public
   `https://pub-xxxxxxxx.r2.dev/...` base URL.
   (Optional: connect a custom domain instead of the r2.dev subdomain.)
4. Bucket → **Settings → CORS Policy**, allow your Pages origin, e.g.:
   ```json
   [
     {
       "AllowedOrigins": ["https://<your-username>.github.io"],
       "AllowedMethods": ["GET"]
     }
   ]
   ```
5. Upload video files to the bucket (dashboard drag-and-drop, or the `wrangler`
   CLI / `rclone` for bulk uploads).

## 3. Adding a video to the site

Edit `videos.js` — copy one entry and fill in:

```js
{
  title: "Ad Title",
  description: "One or two sentences on the concept or result.",
  src: "https://pub-xxxxxxxx.r2.dev/videos/ad-01.mp4",
  poster: "", // optional still-frame image URL
}
```

Commit and push — the GitHub Action redeploys the site. Entries left with an
empty `src` show a "not linked yet" placeholder instead of a broken player.

## Why this stack

- Cloudflare Pages was ruled out: its free tier caps individual files at 25MB,
  and these clips run ~60MB.
- Netlify's free tier bandwidth (~15GB/month on new accounts) gets tight fast
  once you're serving ~20 videos at ~60MB each.
- R2 has no egress/bandwidth fee, so traffic spikes don't risk hitting a cap —
  only the 10GB storage limit matters, which covers well over 100 videos at
  this size.
