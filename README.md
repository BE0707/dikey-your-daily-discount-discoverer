# dikey marketing site

Single-page, bilingual (TR/EN) landing page for the dikey discount platform. Built with Vite + React + TypeScript, Tailwind, Framer Motion, Radix/shadcn UI, and React Router.

## Getting started
```bash
npm install
npm run dev
```
App runs at http://localhost:8080/ by default (see `vite.config.ts`).

## Build
```bash
npm run build
```
Outputs static files in `dist/`.

## Deploy
Configured for GitHub Pages via `.github/workflows/deploy.yml`. Adjust `base` in `vite.config.ts` if your repo name or hosting path differs (use `/` for a custom domain).
