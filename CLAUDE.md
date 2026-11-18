# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `vite-react-portfolio/` (the actual project root; the repo's git root is nested one level below `~/Desktop/Portfolio`).

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check (`tsc`) then production build to `dist/`
- `npm run preview` — serve the production build locally

There is no test suite, linter, or `npm run lint` configured in this project.

## Architecture

This is a single-page portfolio site: React 18 + TypeScript + Vite + Tailwind CSS, with `framer-motion` for animation and `lucide-react` for icons. There is no router — `App.tsx` simply stacks section components in order:

```
Navbar → HeroSection → ProjectsSection → AboutSection → SkillsSection → ContactSection → Footer
```

Each section under `src/components/` is a self-contained component with its own content hard-coded as local data (arrays/constants) at the top of the file — there is no CMS, JSON data file, or shared content store. When updating site copy, project entries, skills, or links, edit the relevant component directly:

- **Personal links** (email, resume Google Drive link, LinkedIn, GitHub) are duplicated across `Navbar.tsx`, `HeroSection.tsx`, `ContactSection.tsx`, and `Footer.tsx` rather than centralized — update all occurrences when changing one.
- **`ProjectsSection.tsx`** defines a `tech()` helper and a set of `StackItem` constants (e.g. `PY`, `API`, `LG`, `RAG`) giving each technology tag a consistent name/color/background/border, then composes them per project in the `PROJECTS` array. Add new tech tags as new constants near the top rather than inlining colors, and follow the existing color convention (readable text color, ~10-15% opacity background, ~22-28% opacity border) when adding one.
- Sections rely on Tailwind utility classes plus a handful of custom CSS primitives defined in `src/index.css` (`.gradient-text`, `.dot-grid`, `.card-gradient-border`) and custom Tailwind theme extensions in `tailwind.config.js` (the `navy`/`brand` color scales, `float`/`fade-up`/`pulse-dot` animations). Prefer reusing these rather than adding new one-off keyframes/utilities.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages via `actions/deploy-pages`. There is also a `deploy-portfolio.command` double-clickable script (for Finder use, not for Claude Code to run) that stages, commits, and pushes all changes with a fixed commit message.
