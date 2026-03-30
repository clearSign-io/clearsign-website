# ClearSign Website

Marketing site for ClearSign — agent-powered signage permitting.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Structure

```
src/
  app/
    layout.tsx     # Root layout, metadata
    page.tsx       # Full single-page site
    globals.css    # Tailwind + base styles
```

## Design
- Colors: Deep navy `#0A1628` + electric green `#00E87B`
- Font: Inter (Google Fonts)
- Mobile responsive

## Contact Form
Uses `mailto:` action — no backend required. Update the email address in `page.tsx`:
```
mailto:hello@clearsign.io
```
Replace with actual address before deploying.
