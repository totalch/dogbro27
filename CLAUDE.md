# Dogbro — Astro Website

The official website for **Dogbro LLC** — AI-driven solutions for business growth.

Built with Astro 7, TypeScript, and Tailwind CSS v4.

## Tech Stack

- Astro 7 (7.x) + TypeScript
- Tailwind CSS v4
- Content Collections + MDX
- Vanilla JS for client interactions (FAQ accordion, pricing toggle)

## Design

- Two-hue palette: navy (`#1e3a8a`) for structure, orange (`#f97316`) for action
- Space Grotesk for headings, Manrope for body text
- Hard-offset shadows and playful elements for a confident, modern feel

## Structure

- `src/pages/` — routing (top page = landing)
- `src/layouts/BaseLayout.astro` — head, fonts, Header/Footer
- `src/components/` — shared components (Logo, Header, Footer)
- `src/components/landing/` — landing page sections
- `src/styles/global.css` — Tailwind and design tokens
- `src/content/` — blog posts and work case studies
- `public/` — static assets (logos, favicons)

## Commands

- `pnpm dev` — start development server
- `pnpm build` — production build
- `pnpm preview` — preview build output
