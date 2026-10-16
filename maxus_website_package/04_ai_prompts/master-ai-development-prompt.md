# MASTER AI CODING PROMPT — MAXUS IT SERVICES PVT. LTD.

Act as a senior UI/UX designer, React + Vite architect, TypeScript developer, SEO specialist and accessibility engineer. Inspect the supplied package before coding. Build the real working website, not just a mockup.

## Final decisions
- Existing client domain (exact domain must be confirmed from client).
- Complete brand kit supplied separately; use it as source of truth.
- Real portfolio and case studies; never fabricate projects or metrics.
- English-only website.
- WhatsApp, telephone and email-delivering contact form.
- React + Vite + TypeScript + Tailwind CSS + React Router + Lucide React.
- No custom backend required unless a genuine requirement is discovered.

## Required pages
/, /about, /services, all eight service routes, /solutions, /portfolio, /portfolio/:slug, /contact, /privacy-policy, and a custom 404 page.

## Brand
Read 03_ui_design/design-tokens.json and the brand kit. Use the official logo file in 01_brand_assets. The provided palette is provisional and must be reconciled with the real brand guidelines. Design a premium enterprise technology website: light content sections, navy hero, restrained lime accents, clear typography and subtle motion.

## Homepage
1. Header with logo, navigation and Let's Talk CTA.
2. Navy two-column hero with headline “Technology That Moves Your Business Forward.”, concise description, “Discuss Your Project” and “Explore Our Work” CTAs, and custom globe/orbit-inspired artwork.
3. Company introduction using verified facts only.
4. Eight-service card grid sourced from 02_content_data/services.json.
5. Featured portfolio sourced from 02_content_data/portfolio.json.
6. Business solutions section.
7. Understand → Plan → Implement → Support process.
8. Strong CTA and complete footer.

## Content and data
Use company.json, services.json, portfolio.json and sitemap.json as structured content sources. Company history, founding members, locations, contact details, project claims and publication permissions require confirmation where marked. Never invent testimonials, metrics, certifications, client names or outcomes.

## Portfolio
Build responsive project cards and a case-study template. Include challenge, solution, services, confirmed technologies, approved screenshots and documented outcomes when available. Do not publish a placeholder record as a real project. If project details are missing, show a content-needed flag in development or omit the project from production.

## Contact
Implement click-to-call, click-to-email, verified WhatsApp links with prefilled messages, and a validated email form. Use a real form service or secure serverless endpoint. Never expose secret keys in frontend code. Do not show success unless the provider confirms acceptance. Document any missing credentials.

## Responsive behavior
Follow desktop-ui-spec.md and mobile-ui-spec.md. Test at 1440 px, 1024 px, 768 px, 390 px and 360 px. Avoid horizontal overflow. Mobile hero stacks copy first and artwork second. Respect prefers-reduced-motion and maintain accessible keyboard navigation.

## SEO and performance
Unique metadata, canonical URLs, sitemap.xml, robots.txt, Open Graph, appropriate structured data, semantic headings, descriptive alt text, optimized images, lazy loading below the fold and a custom 404 page. Use the actual domain only after it is confirmed. No fabricated addresses or duplicate location pages.

## Completion
Inspect the repository before modifying it. Build reusable components and routes, then run lint/type checks and production build where scripts exist. Test all routes, forms, links, images, mobile layouts, accessibility and metadata. Report what is complete, what was tested, and all launch blockers. Do not claim deployment or form delivery unless actually completed.
