# DM Counsel website build

The uploaded `index.html` is a complete, polished single-file design (navy + gold + parchment, Fraunces / Hanken Grotesk / Spline Sans Mono, custom JSON-LD, ~1200 lines). I'll port it faithfully into the TanStack Start app, split into real routes matching the provided `sitemap.xml`, and wire up the provided `robots.txt`, `sitemap.xml`, and `llms.txt`.

## Design system

Bring the exact tokens from the upload into `src/styles.css`:
- Colors: `--navy #1B2A4A`, `--ink #0E1A2E`, `--gold #C9A84C`, `--gold-deep #9C7E2E`, `--parchment #F5F0E8`, `--warm-white #FCFAF6`, plus slate text tones and rule colors.
- Fonts via `<link>` in `__root.tsx` head: Fraunces (display), Hanken Grotesk (body), Spline Sans Mono (eyebrows/labels).
- Reusable component classes (`.btn`, `.eyebrow`, `.pa-card`, `.case`, `.faq`, `.plate`, etc.) ported as plain CSS in `styles.css` to match the source 1:1. No Tailwind utility rewrite — the upload is the spec.

## Route structure (matches sitemap.xml)

```
src/routes/
  __root.tsx                 → shared header, footer, fonts, sitewide JSON-LD (LegalService/Attorney)
  index.tsx                  → home (hero, trust strip, differentiator, practice grid, record, process, FAQ, CTA)
  about.tsx
  practice-areas.tsx         → layout (renders <Outlet/>)
  practice-areas.index.tsx   → overview grid of all 10 areas
  practice-areas.motor-vehicle-accidents.tsx
  practice-areas.medical-malpractice.tsx
  practice-areas.slip-and-fall.tsx
  practice-areas.catastrophic-injury.tsx
  practice-areas.wrongful-death.tsx
  practice-areas.accident-benefits.tsx
  practice-areas.fire-loss.tsx
  practice-areas.disability.tsx
  practice-areas.product-liability.tsx
  practice-areas.long-term-care-class-actions.tsx
  results.tsx
  insights.tsx
  contact.tsx
  sitemap[.]xml.ts           → server route emitting the sitemap
```

Shared `Header` and `Footer` components in `src/components/site/` used inside `__root.tsx`. Mobile menu state with `useState`. Nav uses `<Link to=...>` (no hash routing).

## Per-route SEO

Each leaf route gets its own `head()` with route-specific `title`, `description`, `og:title`, `og:description`, `og:url`, and `<link rel="canonical">` (relative paths — no project domain yet). Root holds `og:site_name`, viewport, font links, default `og:type: website`, and the `LegalService/Attorney` JSON-LD from the upload. Article/FAQ JSON-LD attached to the relevant leaf routes (home FAQ, practice detail pages).

## Static files (verbatim from uploads)

- `public/robots.txt` — copy of uploaded file.
- `public/llms.txt` — copy of uploaded file.
- `src/routes/sitemap[.]xml.ts` — server route returning the same URL set as the uploaded `sitemap.xml`, with `BASE_URL = ""` placeholder + TODO (no domain set yet).

## Content

All copy (hero, differentiator, practice cards + detail summaries + "what we can recover" lists, case results, process steps, FAQ Q&A, about prose, credentials grid, contact details) lifted directly from the uploaded `index.html` and `llms.txt`. Placeholder portrait plates kept as in the source (decorative SVG initials block) — no photos provided.

## Out of scope / assumptions

- Contact form is presentation-only (same as the upload): on submit, show the success card. No backend / Lovable Cloud unless asked.
- Phone number, email, address from the upload are kept as-is.
- No new imagery generated; portrait plates stay as the styled placeholder from the source.

## Technical notes

- Plain CSS in `src/styles.css` (Tailwind v4 still loaded for base reset); component classes ported as-is to match the source pixel-for-pixel.
- Fonts loaded via `<link>` in root `head()` per Tailwind v4 rules (no remote `@import`).
- FAQ uses native `<details>`/`<summary>` exactly as the source.
- Mobile nav: `<button aria-expanded>` toggling a `.nav-links.open` class.
