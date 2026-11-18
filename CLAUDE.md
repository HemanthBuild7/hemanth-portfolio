# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands run from `vite-react-portfolio/` (the actual project root; the repo's git root is nested one level below `~/Desktop/Portfolio`).

- `npm run dev` — start the Vite dev server
- `npm run build` — type-check (`tsc`) then production build to `dist/`
- `npm run preview` — serve the production build locally

There is no test suite, linter, or `npm run lint` configured in this project.

## Architecture

This is a single-page portfolio site: React 18 + TypeScript + Vite + Tailwind CSS, with `framer-motion` for reveal animation and `lucide-react` for icons. There is no router — `App.tsx` simply stacks section components in order:

```
Navbar → HeroSection → SystemsSection → AboutSection (experience) → ProjectsSection → SkillsSection → ContactSection → Footer
```

All site content lives in `src/data/resume.ts`, which is the single source of truth and mirrors the resume. When updating copy, roles, projects, skills, or links, edit that file rather than the components:

- **Personal links** (email, LinkedIn, GitHub, resume) are defined once in `PROFILE`. Resume buttons stay hidden until `PROFILE.resumeUrl` is set.
- **`SYSTEMS`** drives the architecture diagrams in `SystemsSection.tsx`. Each system is a list of flow stages; node `kind` is `default`, `accent`, or `gate` (approval or blocking steps).
- Shared UI primitives are in `src/components/ui.tsx`. Design tokens (`ink`, `panel`, `line`, `fg`, `soft`, `muted`, `faint`, `signal`, `gate`) are in `tailwind.config.js`, and component classes (`.shell`, `.eyebrow`, `.btn-primary`, `.btn-secondary`, `.blueprint`) are in `src/index.css`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and deploys `dist/` to GitHub Pages via `actions/deploy-pages`. There is also a `deploy-portfolio.command` double-clickable script (for Finder use, not for Claude Code to run) that stages, commits, and pushes all changes with a fixed commit message.
