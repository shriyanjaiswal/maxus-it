# MAXUS IT SERVICES — Corporate Website

React + Vite + TypeScript + Tailwind CSS + React Router + Lucide implementation of the
`maxus_website_package/` brief, built to the supplied desktop and mobile mockups.

## Commands

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # tsc, strict mode
npm run build      # tsc && vite build  -> dist/
npm run preview    # serve the production build
```

## Configuration

Copy `.env.example` to `.env` and set:

| Variable | Purpose | Status |
| --- | --- | --- |
| `VITE_SITE_URL` | Canonical URLs, `og:url`, sitemap host | **Unset** — package ships `NEEDS_CLIENT_DOMAIN` |
| `VITE_FORM_ENDPOINT` | Enquiry delivery endpoint (form provider or serverless function) | **Unset** — form reports "not configured" |

No secret keys belong in either variable: only the public endpoint URL reaches the browser.

## Routes

`/` · `/about` · `/services` · `/services/:slug` (8) · `/solutions` · `/portfolio` ·
`/portfolio/:slug` · `/contact` · `/privacy-policy` · `/terms` · `*` (custom 404).

Content is read from typed modules in `src/data/` (`company.ts`, `services.ts`,
`portfolio.ts`, `site.ts`), which mirror the package JSON files.

## Content governance

The package forbids publishing unverified facts or placeholder projects as real work, so the
build enforces it rather than relying on launch-day discipline:

- **Portfolio samples.** The three projects in `src/data/portfolio.ts` come from the approved
  mockups, not delivered client work, and carry `publicationApproved: false`. In a **production**
  build they are filtered out entirely — `/portfolio` shows an empty state and the homepage
  featured section shows a "pending approval" note. In development they render with an explicit
  "Layout sample — not client-approved" badge. Set `publicationApproved: true` only after the
  client confirms the project is real and cleared for publication.
- **Unverified company facts.** Founding date, founder names/roles, locations, the WhatsApp
  number and the email address are flagged "Verify before launch" in development only.
- **No invented proof.** There are no testimonials, client logos, awards, metrics or outcome
  numbers anywhere. Service pages list the package's `detailsToConfirm` items under "Details
  confirmed per project" instead of asserting them as features.
- **Case studies** omit outcomes, client names and screenshots until permission exists.

## Artwork

The hero globe/orbit scene, the operations dashboard and all project imagery are hand-built
inline SVG (`src/components/artwork/`). No stock or AI photography is used, and no client
screenshots are claimed. The supplied logo is kept at
`public/assets/brand/logo-original.png`; the header uses a vector reconstruction of the mark.

## Accessibility and responsiveness

Skip link, semantic landmarks, one `h1` per route, labelled form controls with `aria-invalid`
and described errors, keyboard-operable header and mobile disclosures (Escape closes,
`aria-expanded` maintained), visible focus rings, `prefers-reduced-motion` honoured globally,
below-the-fold SVG is lightweight by nature. Verified with no horizontal overflow at
1440 / 1024 / 768 / 390 / 360 px.

## Launch blockers

These need client input; none can be resolved in code.

1. **Confirm the live domain**, then set `VITE_SITE_URL` and regenerate `public/sitemap.xml`
   and `public/robots.txt` (both currently carry `REPLACE_WITH_CLIENT_DOMAIN`).
2. **Choose and connect a form provider** via `VITE_FORM_ENDPOINT`, then send a real test
   submission and confirm receipt. Until then the form deliberately refuses to claim success.
3. **Verify the contact email `maxusit11@gail.com`** — `gail.com` is very likely a typo for
   `gmail.com`. As written, enquiries addressed there will not arrive.
4. **Confirm the WhatsApp number** `+91 9559335909` is a WhatsApp Business line, since the
   floating button and contact page both open it.
5. **Verify history, founders and locations** (June 2011 Mumbai start; Ram Jaiswal and
   Krishna Murty Iyer; Mumbai + Varanasi presence).
6. **Supply approved portfolio projects** with permissions, real screenshots and documented
   outcomes, replacing the layout samples.
7. **Provide real social profile URLs** — the footer icons currently point at the networks'
   home pages as placeholders.
8. **Configure SPA fallback** on the host so deep links like `/services/erp-business-management`
   serve `index.html` (Vite preview does this locally; static hosts need a rewrite rule).
9. **Have the privacy policy and terms reviewed** by the client's authorised representative —
   both describe this build's behaviour and are not legal advice.
10. **Reconcile the provisional palette** (`#0D3150`, `#176B8A`, `#B8D932`) against the complete
    brand kit, which the package notes is stored separately.

## Known deviations from the brief

- The mockups' hero secondary button reads "Explore Our Services" (→ `/services`); the content
  brief specifies "Explore Our Work". The mockup wording was followed.
- The mockups' final CTA band has two buttons that both lead to `/contact`; the second now
  reads "Explore Our Services" so the band offers two distinct actions.
- A `/terms` page was added because the mockup footer links to Terms & Conditions and a broken
  link fails the launch checklist.
- The mockup's "Aoor Founded By" heading is a rendering artefact in the artwork and was written
  as "Founded By".
