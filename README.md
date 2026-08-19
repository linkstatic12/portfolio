# Asadullah Baig — Portfolio

A single-page portfolio built with React, Vite, and Tailwind CSS v4.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploy on Vercel

**Option A — Vercel CLI**

```bash
npm i -g vercel
vercel
```

Follow the prompts (framework preset: Vite is auto-detected). Run `vercel --prod` to ship to production.

**Option B — Git import**

1. Push this folder to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — build command `npm run build`, output directory `dist`. Click **Deploy**.

No environment variables are required.

## Edit content

All resume content (name, metrics, experience, skills, certifications, education, contact links)
lives in `src/data.js` — update it there and every section re-renders automatically.
