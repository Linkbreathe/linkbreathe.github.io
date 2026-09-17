# Academic portfolio — static site

Plain HTML + CSS + 40 lines of JS. No build step, no framework.

## Deploy (GitHub Pages)
1. Create a repo named `<your-username>.github.io` (or any repo + Pages enabled).
2. Copy everything in this folder to the repo root and push.
3. Settings → Pages → Branch: `main`, folder: `/ (root)`.

## Add a project
1. `cp project-template.html projects/project-4.html`
2. Replace the title, eyebrow, meta, section text, and image placeholders.
3. Add a card in `index.html` (`.card`) and a row in `research.html` (`.entry`, set `data-topic`).

## Change the look
Everything lives in the token block at the top of `css/style.css`:
`--accent` (one muted accent), `--bg`, `--ink`, fonts, `--wrap`, radii.
Changing `--accent` re-tints the whole site.

## Replace an image placeholder
```html
<div class="ph ph--hero"><span>hero image — 16:9</span></div>
```
becomes
```html
<img src="assets/images/project-1-hero.jpg" alt="Descriptive alt text"
     style="aspect-ratio:16/9;border-radius:18px;object-fit:cover;width:100%" />
```
