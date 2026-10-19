# React Portfolio

Daniel Cheeley's portfolio, built with React, TypeScript, and Vite.

## Development

```sh
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if script execution blocks `npm`.

- `npm run build` checks TypeScript and creates the production build in `dist/`.
- `npm run lint` checks the source with ESLint.
- `npm run format:check` checks formatting; `npm run format` applies it.
- `npm run preview` serves the production build locally.

## GitHub Pages deployment

In the GitHub repository, open **Settings → Pages** and set **Source** to
**GitHub Actions**. Push these changes to `main` to trigger the deployment workflow,
or run **Deploy portfolio to GitHub Pages** manually from the Actions tab.

The workflow installs dependencies from the lockfile, builds the site, and deploys
`dist/` to <https://danielcheeley.github.io/react-portfolio/>. Vite's `base` is set
to `/react-portfolio/` so scripts, styles, images, and the resume load beneath the
repository path. Hash navigation works without server rewrite rules.

To check the production build locally, run `npm run build` and `npm run preview`,
then open <http://localhost:4173/react-portfolio/>.

## Where to make changes

```text
src/
  main.tsx                     React entry point
  App.tsx                      Shared layout and page selection
  pages/                       Home page composition and project case studies
  sections/                    Hero, work, about, and background content
  components/                  Shared header, footer, and illustrations
  data/                        Project content and public asset URLs
  hooks/usePortfolioNavigation.ts  Hash navigation, page titles, and scrolling
  App.css                      Shared styles and responsive layouts
public/
  images/                      Portfolio photographs
  documents/                   Downloadable resume
```

To update project descriptions or technology lists, edit `src/data/projects.ts`.
To change homepage content, edit the matching component in `src/sections/`.
Both project cards and case studies use the same project data and illustration.
The header and contact footer appear on every page.

## Navigation

The site uses browser hashes without a routing dependency. Section links such as
`#work` show the home page and scroll to that section. Project links use
`#/projects/nova` and `#/projects/tracker`, opening a case study and scrolling to
the top when the hash changes. The navigation hook also updates the document
title and removes its event listener when unmounted. Unknown project hashes
fall back to the home page.

Keep existing section IDs and CSS class names when moving content so links,
responsive layouts, and styling continue to work. Public asset URLs in
`src/data/assets.ts` use Vite's base URL.
