# Design Component Library

Internal Denkore tooling for exploring and previewing website section designs before they're built out in the production stack (Next.js/Tailwind/shadcn via Claude Code).

**This repo is for design reference, not production code.** Nothing here ships directly to a client site — sections that get approved here are rebuilt properly in the actual client repo.

## Tools

### `/tools/velocity-blocks`
Static component showcase — 26 marketing blocks across 10 categories (Heroes, Features, CTAs, Pricing, Navigation, Footers, Team, Logo Cloud, Code Demo, Content). Includes a theme switcher (3 color options, 3 font options) and copy-to-clipboard HTML export. Open `index.html` directly in a browser.

### `/tools/section-builder`
Guided discovery tool — walks through structured questions per section type (currently Hero, Features, CTA) instead of a single vague "build me a site" prompt. Produces a live preview and exports self-contained HTML based on the answers. Open `index.html` directly in a browser.

## Why section-by-section instead of whole-site generation

Vague, holistic prompts lose detail and produce generic results. Forcing specific questions per section (emotion, primary action, visual approach, etc.) surfaces intent that would otherwise get lost, and produces a more defensible, less "AI slop" result.

## Workflow

1. Explore/demo a section design here (or in a Claude chat session) as a static HTML preview
2. Get it approved as the visual direction
3. Hand it to Claude Code as the reference for the actual production build in the client's repo — Claude Code does not build production sections from scratch off a vague prompt

## Status

Early-stage internal tool. Both tools are hardcoded React (via in-browser Babel) — not a build pipeline. No section types beyond Hero/Features/CTA yet in Section Builder.
