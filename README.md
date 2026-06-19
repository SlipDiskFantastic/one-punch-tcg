# One Punch TCG — Pack Opening Web App

A standalone, installable Progressive Web App (PWA) for the One Punch Man TCG pack-opening proof of concept. Works on any phone, no app store required.

## What's in this folder

| File | Purpose |
|------|---------|
| `index.html` | The app shell (markup + styles) |
| `app.js` | All game logic — card data, pull rates, rip mechanic, reveal flow |
| `manifest.json` | PWA metadata so it installs to the home screen |
| `sw.js` | Service worker — caches the app so it works offline |
| `icon-*.png` | App icons (180, 192, 512, maskable) |
| `favicon.png` | Browser tab icon |

---

## Deploy in 2 minutes (recommended: Netlify Drop)

1. Go to **https://app.netlify.com/drop**
2. Drag this **entire folder** onto the page.
3. Netlify gives you a live URL instantly (e.g. `https://your-app.netlify.app`).
4. Open that URL on your phone. Done.

That's it — it's live on the internet and works on any device.

---

## Other free hosting options

All of these serve static files, which is all this app needs:

### Vercel
1. Install the CLI: `npm i -g vercel`
2. From inside this folder, run: `vercel`
3. Follow prompts. You get a URL.

### Cloudflare Pages
1. Go to **https://pages.cloudflare.com**
2. Upload the folder (or connect a GitHub repo containing it).

### GitHub Pages
1. Create a repo, commit these files to it.
2. Repo Settings → Pages → deploy from `main` branch, root folder.
3. URL: `https://<username>.github.io/<repo>/`

---

## Install it as an app on your phone

Once the app is open in a mobile browser at your deployed URL:

### iPhone (Safari)
1. Tap the **Share** button (square with up arrow).
2. Scroll down → **Add to Home Screen**.
3. It now launches fullscreen with the OPM icon, like a native app.

### Android (Chrome)
1. Tap the **⋮** menu.
2. Tap **Install app** (or **Add to Home Screen**).
3. Launches fullscreen from your home screen.

The service worker caches everything, so after the first load it works **offline** too.

---

## Testing locally before deploy

You can't just double-click `index.html` — service workers need a real server. From inside this folder:

```bash
# Python (built into Mac/Linux)
python3 -m http.server 8000

# or Node
npx serve
```

Then open `http://localhost:8000` in your browser.

---

## Editing the cards

All card data lives at the top of `app.js` in the `CARDS` array. Each card:

```js
{ name:"Genos", type:"Hero", faction:"hero", pr:3, rarity:"rare",
  threat:"Serious Threat · S-Rank #14", keyword:"Overwhelm",
  effect:"Remove 3 timeline cards…", flavor:'"My purpose is to grow stronger."' }
```

Pull rates are in the `pullPack()` function. Rip-quality odds are in `RIP_STATES`.

---

## Notes

- No backend, no database, no tracking. Everything runs in the browser.
- The app is fully self-contained — the only external request is for the Cinzel font from Google Fonts (cached after first load).
- To make it 100% offline with no font request, download Cinzel and host it alongside these files.
