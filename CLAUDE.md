# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server with HMR
npm run build      # Type-check (tsc -b) then produce production build
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint across the project
```

## Architecture

Single-page React 19 + TypeScript portfolio with anchor-based navigation (no React Router). All sections are rendered in a single scrollable page in [App.tsx](src/App.tsx):

```
Hero → About → Skills → Experience → Projects → Education → Contact
```

**Scroll animations** are handled by [Reveal.tsx](src/components/Reveal.tsx), which wraps content and uses the `useInView` Intersection Observer hook to trigger fade/slide/scale transforms. Every section uses `<Reveal>` for entrance animations.

**Custom hooks** in [src/hooks/](src/hooks/):
- `useTypewriter` — cycles through role strings in Hero with a typing effect
- `useInView` — Intersection Observer wrapper used by Reveal
- `useCounter` — animated number counter with easing (used in About stats)

**Styling** is entirely in [src/index.css](src/index.css) (~935 lines) — no CSS modules, no Tailwind. Uses CSS custom properties (`--purple`, `--cyan`, `--text`, etc.) and reusable utility classes (`.card`, `.btn`, `.gradient-text`, `.section-label`). Dark theme only.

**Contact form** uses EmailJS (`@emailjs/browser`). Credentials come from `.env.local`:
```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

**All content** (projects, experience, skills, education) is hardcoded as typed arrays inside each component file — there is no CMS or data layer.

## TypeScript

Strict mode is on (`noUnusedLocals`, `noUnusedParameters`, `strictNullChecks`). Run `tsc -b` (or `npm run build`) to surface type errors before shipping.
