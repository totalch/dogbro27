# Dogbro Design Spec

**Product:** Dogbro — AI-driven solutions for business growth.
**Personality:** Professional, innovative, trustworthy. Clean and modern with a
playful edge.
**Language:** English.

---

## 1. Color system

Balanced navy + orange — navy carries trust and structure, orange carries
energy and action.

| Token | Hex | Use |
|---|---|---|
| `--navy` | `#1e3a8a` | Primary brand, dark sections, headings on light |
| `--navy-deep` | `#152a63` | Deep gradients, footer |
| `--navy-ink` | `#0f1e42` | Text on light where near-black is needed |
| `--orange` | `#f97316` | Primary accent, CTA buttons, highlights |
| `--orange-bright` | `#fb923c` | Gradient start, highlighted words on navy |
| `--orange-deep` | `#ea580c` | Gradient end |
| `--orange-glow` | `#fdba74` | Eyebrow text on navy |
| `--orange-soft` | `#ffedd5` | Tinted backgrounds, chips |
| `--sky` | `#dbeafe` | Soft blue tints, nav links |
| `--sky-mist` | `#c7d2fe` | Secondary text on navy |
| `--paper` | `#fbfaf7` | Warm off-white page background |
| `--cloud` | `#ffffff` | Cards on paper |
| `--line` | `rgba(15,30,66,.10)` | Hairline borders |

**Rule:** Only two saturated colors (navy and orange). Everything else is a tint
of one of them or a warm neutral. No third hue.

## 2. Typography

- **Display / headings:** Space Grotesk (600–700). Tight tracking, big scale,
  occasional word highlighted in orange.
- **Body / UI:** Manrope (400–600).
- Scale (desktop): Hero 70px · H2 44px · H3 22px · body 17px · caption 13px.
- `text-wrap: balance` on headings, `pretty` on paragraphs.

## 3. Playful devices

- **Sticker shapes:** small rotated squares, circles, and 4-point sparkles in
  orange/navy scattered behind headings.
- **Rotated cards:** feature/testimonial cards tilt ±1.5° and straighten on
  hover.
- **Thick outlines + hard offset shadows** (`box-shadow: 6px 6px 0`) instead of
  soft blur — confident, professional feel.
- **Pill buttons**, chunky radii (14–20px on cards, 999px on buttons).
- Animated **orbit ring** motif in hero — representing AI orbital dynamics.

## 4. Layout & sections

1. **Sticky nav** — Dogbro logo, links, ghost + solid CTA.
2. **Hero** — oversized headline, subhead, dual CTA, orbit graphic with floating
   stickers, trust row.
3. **Logo / trust strip** — "AI Solutions for Modern Business"
4. **Features/Services** — 6 cards in a 3-col grid, alternating
   navy/orange icon chips, hard-shadow cards.
5. **Showcase band** — "solutions" with 3 use-case tiles (Content AI / Data
   Scraping / Support Bot).
6. **Pricing** — 3 tiers, middle featured (orange), pill toggle monthly/yearly.
7. **Testimonials** — tilted quote cards, avatars as initial-circles.
8. **FAQ** — accordion, navy on paper.
9. **Final CTA** — full navy band with orange button and orbit motif.
10. **Footer** — 4 columns, dark navy.

## 5. Interaction

- Nav shrinks/gains border on scroll.
- Pricing toggle switches prices with a quick transition.
- FAQ items expand one at a time (accordion).
- Cards straighten + lift on hover.
- Sticker shapes drift subtly (CSS keyframes).

## 6. Imagery

No hand-drawn illustrations. Use striped SVG placeholders labelled in monospace
where real product shots go. Avatars are initial-circles.

## 7. Accessibility

- Orange text only at large sizes or on navy; body copy uses navy-ink on paper
  for contrast.
- Focus rings visible (orange 2px).
- Hit targets ≥ 44px.
