# Bennett Vortices — Markdown edition

## Run

Requires Node.js 22 (recommended). In the extracted project folder:

```bash
npm install
npm run dev
```

Open http://localhost:4321

## Write the chapters — no HTML required

Edit these seven files in `src/content/chapters/`:

- `01-history.md`
- `02-instabilities.md`
- `03-shumlak-hartman.md`
- `04-bennett-vortices.md`
- `05-stability.md`
- `06-experiments.md`
- `07-future.md`

The lines between `---` at the top control the chapter's title, subtitle, and media placeholder. Edit the text **below the second `---`** to write the chapter.

Use Markdown: `## Heading`, `**bold**`, `[link](https://example.com)`, and `![caption](/images/photo.jpg)` (place image files in `public/images/`).

For inline mathematics use `$m=0$`; for display equations use:

```text
$$
\nu_z(r)=u_{z0}\frac{r^2}{(r+C)^2}
$$
```

The fourth chapter's interactive chart remains functional and is still implemented in `src/components/VelocityChart.astro`. Change the model in `src/lib/physics.js` when needed.

The main page structure lives in `src/pages/index.astro`; ordinarily you do not need to edit it. Save a Markdown file and Astro's development server refreshes automatically.

## Upgrading an existing starter

Back up your current project folder. Extract this ZIP as a new project folder, then run `npm install` and `npm run dev` in the new folder. If you previously made content edits, copy them into the corresponding Markdown chapter files. Do not copy an old `node_modules` folder.

## Publishing

Replace the placeholder `site` URL in `astro.config.mjs` before deployment. Verify source attribution and image rights.
