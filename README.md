# Denkore Design Component Library

Internal shadcn-style component registry for Denkore Group. This is a Next.js app whose purpose is to serve component source code — not a deployed product itself.

## What this is

A custom [shadcn registry](https://ui.shadcn.com/docs/registry) — the same mechanism Tailark used. Blocks live here as real Tailwind/TypeScript source. Any client repo installs one with:

```
pnpm dlx shadcn add https://<deployed-url>/r/<block-name>.json
```

This copies the component's source directly into the client repo. No runtime dependency, no version to track — once installed, it's just that client's code, free to be customized per their design system.

## Why a registry instead of an npm package

Every client needs a genuinely different layout (never a template default — see Denkore's design principles). A shared npm package pushes toward reusing identical component instances, which fights that. A registry hands each client its own editable copy instead — fast starting point, zero constraint on customization, no coordination tax as the library grows.

## Structure

- `registry.json` — the index. Every block gets one entry here. This is the file that grows.
- `registry/new-york/blocks/<name>/<name>.tsx` — actual block source (real Tailwind, not inline styles)
- `public/tools/` — the two discovery tools used with clients before a block is built (see below); these are not registry items
- `public/r/` — generated output (`pnpm run registry:build`), gitignored, rebuilt on every deploy

## Discovery tools

Two prototyping tools live at `/tools/*`, used during client discovery sessions — before a section becomes a real registry block:

- **Velocity Blocks** (`/tools/velocity-blocks`) — static showcase of section options with a theme switcher, for browsing ideas
- **Section Builder** (`/tools/section-builder`) — guided question flow (Hero, Features, CTA so far) that produces a live preview and exportable HTML based on client answers

These output inline-style HTML prototypes, not registry-ready code. Once a design is approved with a client, it gets manually converted into a real `.tsx` component and added to `registry.json` — that conversion is the bridge between discovery and the registry.

## Naming convention

`<category>-<number>`, e.g. `hero-01`, `hero-02`, `features-grid-01`. Never overwritten — a revised design gets the next number, old numbers stay valid for repos that already installed them.

## Adding a block

1. Add the component under `registry/new-york/blocks/<name>/<name>.tsx`
2. Add an entry to `registry.json`
3. Run `pnpm run registry:build` to verify it compiles
4. Open a PR

## Local development

```
pnpm install
pnpm run registry:build   # generates public/r/*.json from registry.json
pnpm dev
```
