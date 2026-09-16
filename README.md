# Tobias Hermans — Portfolio

A Next.js + Tailwind CSS rebuild of the Figma design, matching it 1:1: same
colors, type scale, spacing, and components, for desktop, tablet, and mobile,
in both light and dark mode.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's included

- **Light/dark mode** — toggle in the nav (desktop/tablet) and in the mobile
  menu. Persists in `localStorage` and respects the OS preference on first
  visit, with no flash of the wrong theme on load.
- **Responsive layout** — single codebase covers the three breakpoints from
  the Figma file (mobile < 768px, tablet 768–1024px, desktop 1024px+).
- **Mobile menu** — full-screen overlay, hamburger and close button share the
  same position in the nav.
- **Selected Work / Skills sliders** — on mobile these are native horizontal
  scroll-snap sliders with dots that track the actual scroll position (this
  works in real code, unlike the static dots in the Figma mockup).
- **Hover / press states** — every button and project card has hover and
  active states matching the Figma prototype interactions.

## Where to plug in real content

- `components/Hero.tsx` — swap the placeholder box for a real product
  screenshot or video.
- `components/About.tsx` — swap the portrait placeholder for a real photo.
- `components/Work.tsx` — swap each project's tint color for a real
  screenshot, and point the card links at the actual project URLs.
- `components/Footer.tsx` / `components/Nav.tsx` — update the resume link,
  email address, and social links.

## Design tokens

All colors are CSS variables in `app/globals.css` (`:root` for light,
`.dark` for dark), mapped into Tailwind via `tailwind.config.ts`. Change a
color once there and it updates everywhere.
