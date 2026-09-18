# Academic portfolio — static site

Plain HTML + CSS + 40 lines of JS. No build step, no framework.

## Deploy (GitHub Pages)
1. Create a repo named `<your-username>.github.io` (or any repo + Pages enabled).
2. Copy everything in this folder to the repo root and push.
3. Settings → Pages → Branch: `main`, folder: `/ (root)`.

## Current project structure

The public-facing research categories are intentionally broad:

- `XR`: adaptive VR relaxation, adaptive VR exposure therapy, and immersive meditation/relaxation
- `AI`: Human–AI dream interpretation, Linki adaptive agentic RAG, the Linki-Agent-I terminal assistant, preference-aligned summarization, and masked medical image segmentation
- `Perception`: 3D structure, rotation, and similarity pilot study
- `Hardware`: Uicycle EL-display jacket and interactive hardware team project

The homepage highlights selected projects. The Research page lists all nine projects and uses one primary category per entry for predictable filtering.

## Add a project
1. Copy `project-template.html` to a new file in `projects/`.
2. Replace the title, category, project status, section text, and visual materials.
3. Add a card in `index.html` only if it is one of the three strongest projects.
4. Add a row in `research.html` and set its `data-topic` to `xr`, `ai`, `perception`, or `hardware`.

## Change the look
Everything lives in the token block at the top of `css/style.css`:
`--accent` (one muted accent), `--bg`, `--ink`, fonts, `--wrap`, radii.
Changing `--accent` re-tints the whole site.

## Replace a visual placeholder
```html
<div class="ph ph--hero"><span>hero image — 16:9</span></div>
```
becomes
```html
<img src="assets/images/project-1-hero.jpg" alt="Descriptive alt text"
     style="aspect-ratio:16/9;border-radius:18px;object-fit:cover;width:100%" />
```

## Visibility and crawler policy

The site is configured as link-only:

- Every HTML page uses `noindex, nofollow, noarchive`.
- `robots.txt` disallows crawling for all user agents, including OpenAI's `GPTBot`, `OAI-SearchBot`, and `ChatGPT-User`.

This reduces search-engine and AI-crawler discovery, but it is not authentication. Anyone who has a public URL can still open it, and a crawler that ignores `robots.txt` can still request it. For guaranteed private access, deploy behind a password, login, or another access-control layer rather than public GitHub Pages.
