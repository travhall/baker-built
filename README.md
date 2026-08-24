# Baker Built Construction

Marketing site for Baker Built Construction, a Minneapolis contractor. Built
with Next.js App Router and statically exported.

## Stack

- **Next.js 16** (App Router, canary channel — see `package.json` for the
  exact pinned version)
- **React 19**
- **TypeScript**
- Plain CSS — no Tailwind. The design system lives in `app/globals.css`;
  `app/styleguide/page.tsx` is a live, rendered reference of every color
  token, type scale, and component pattern used across the site.

## Setup

```bash
pnpm install
pnpm dev
```

The dev server runs at [localhost:3000](http://localhost:3000).

## Scripts

| Script | Command | Purpose |
|---|---|---|
| `pnpm dev` | `next dev` | Local development server |
| `pnpm build` | `next build` | Production build (static export to `out/`) |
| `pnpm start` | `next start` | Serve a production build locally |
| `pnpm lint` | `eslint .` | ESLint (`next/core-web-vitals`, flat config in `eslint.config.js`) — currently broken, see note below |
| `pnpm typecheck` | `tsc --noEmit` | TypeScript type checking, no output |

> **Known issue**: `pnpm lint` currently crashes. `eslint-plugin-react@7.37.5`
> (pulled in transitively by `eslint-config-next`) calls a `context.getFilename()`
> API that the pinned `eslint@10.7.0` no longer provides. This is an upstream
> version mismatch, not a config problem — fixing it means bumping/pinning
> dependency versions, which is a separate piece of work.

## Static export constraint

`next.config.js` sets `output: 'export'`. This is a fully static site: no
API routes, no Server Actions, no image optimization server
(`images.unoptimized: true`). `pnpm build` writes static files to `out/`
(gitignored). Any feature work has to fit within what a static export can
serve.

## Directory layout

- `app/` — routes (App Router)
- `components/` — shared UI components
- `lib/` — typed data, e.g. `projects.ts` for case studies

## Deployment

Static hosting (deploy target TBD) — serve the contents of `out/` after
`pnpm build`.
