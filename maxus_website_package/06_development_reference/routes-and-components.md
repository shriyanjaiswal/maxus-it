# Development Reference: Routes and Components

## Shared components
- SiteHeader
- MobileNavigation
- SiteFooter
- Button / LinkButton
- SectionHeading
- ServiceCard
- ServiceGrid
- ProjectCard
- PortfolioFilter
- CaseStudyLayout
- ContactCTA
- WhatsAppFloatingButton
- ContactForm
- SEOHead
- Breadcrumbs

## Suggested page composition
Home: Header → Hero → Intro → ServiceGrid → FeaturedProjects → BusinessSolutions → Process → CTA → Footer
About: Header → PageHero → Story → Founders → Vision → Approach → CTA → Footer
Services: Header → PageHero → ServiceGrid → Process → CTA → Footer
Service detail: Header → ServiceHero → Challenges → Capabilities → Process → FAQs → CTA → Footer
Portfolio: Header → PageHero → Filters → ProjectGrid → CTA → Footer
Case study: Header → Breadcrumbs → ProjectHero → Challenge → Solution → Screenshots → Outcome (if verified) → RelatedProjects → CTA → Footer
Contact: Header → PageHero → ContactDetails → ContactForm → WhatsAppCTA → Footer

## Data source files
- `company.json`
- `services.json`
- `portfolio.json`
- `sitemap.json`

## Form integration
Keep provider secrets in environment variables on the server/serverless provider. Never ship private keys to the browser. A frontend-only form without a provider is not a working email form.
