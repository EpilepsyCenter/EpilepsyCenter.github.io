# EpilepsyCenter.github.io

Landing page for the software made at the Epilepsy Center, Lund University.
Lives at <https://epilepsycenter.github.io/>.

Astro, no framework, one page. Deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`, and once a week so the
version numbers stay current.

## Local

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # -> dist/
```

## Where the content lives

| What | File |
|---|---|
| The four apps — names, blurbs, chips, links, colours | `src/data/apps.js` |
| Version numbers | fetched from the GitHub releases API at build time (`src/lib/releases.js`), with the `fallbackVersion` in `apps.js` used if the API is unreachable |
| Colours, type, spacing | `src/styles/global.css` — every value is a token on `:root` |
| The page itself | `src/pages/index.astro` |

## Routing gotcha

GitHub serves project pages at `epilepsycenter.github.io/<repo>`, and those
take precedence over paths in this site. Adding a page at `/tracer` here would
be shadowed by the `tracer` repo's own site. Keep app pages in their own repos
and link out; if this site ever needs its own app pages, nest them (`/apps/...`).
