# CLAUDE.md

Agent-facing operational notes for this repo. See [README.md](README.md) for
project background.

## Package manager

**pnpm only.** Do not use `npm` or `yarn` commands — this repo has a
`pnpm-lock.yaml`, not a `package-lock.json` or `yarn.lock`.

## Verification

Before considering any change done, all three must pass:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

No test runner exists yet, so there is no `pnpm test`. Verification is
typecheck + lint + build, plus a manual browser check for anything visual.

## Static export

`next.config.js` sets `output: 'export'` — this is the single most
important architectural fact in this repo. No API routes, no Server
Actions, no image optimization server. Any new feature has to work as
static output.

## Design system

`app/styleguide/page.tsx` is a live, rendered reference of every color
token, type scale, and component pattern used sitewide. Check it before
introducing new visual patterns.

## Plans

If `plans/` exists at repo root, it holds advisor-written implementation
plans for other agents to execute. See `plans/README.md` for the index —
its content isn't duplicated here.
