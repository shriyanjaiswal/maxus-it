import { CheckCircle2, ArrowRight, ShieldCheck, Layers, Headphones } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { ContactCTA } from '../components/ContactCTA'
import { whatsappLink } from '../data/site'

const pricingTiers = [
  {
    id: 'project-based',
    name: 'Project Based',
    tagline: 'Ideal for custom software, web apps & specialized ERP systems',
    price: 'Custom Scope',
    period: 'Milestone delivery',
    highlighted: true,
    badge: 'Most Popular',
    description:
      'Fixed-scope development with structured milestone approvals, full requirement documentation, and comprehensive warranty support.',
    features: [
      'Detailed functional specification & UI wireframes',
      'Dedicated project manager & technical lead',
      'Frontend, backend & database architecture',
      'Multi-device QA testing & security audit',
      'Staff onboarding training & handover documentation',
      '30-60 days post-launch hypercare & bug warranty',
    ],
    ctaText: 'Request Detailed Estimate',
    ctaLink: '/contact',
  },
  {
    id: 'monthly-retainer',
    name: 'Monthly Growth & Care',
    tagline: 'Ideal for ongoing SEO, digital ads & system maintenance',
    price: 'Custom Plan',
    period: 'Billed monthly',
    highlighted: false,
    badge: 'Continuous Growth',
    description:
      'Continuous technical maintenance, security updates, SEO optimization, and ad campaign performance tuning for growing companies.',
    features: [
      'Continuous software updates & database backup checks',
      'Meta Ads & Google Ads campaign management & ROAS tracking',
      'Technical SEO audit & monthly search ranking improvements',
      'Priority emergency SLA response (under 2 hours)',
      'Regular speed & Core Web Vitals optimization',
      'Monthly analytics review & consultation call',
    ],
    ctaText: 'Start Monthly Retainer',
    ctaLink: '/contact',
  },
  {
    id: 'dedicated-capacity',
    name: 'Dedicated Capacity',
    tagline: 'Ideal for enterprises needing reserved developer bandwidth',
    price: 'Flexible Team',
    period: 'Monthly commitment',
    highlighted: false,
    badge: 'Enterprise',
    description:
      'Hire dedicated engineers, ERP consultants, and developers directly embedded into your ongoing internal digital initiatives.',
    features: [
      'Full-time or part-time dedicated senior developers',
      'Direct daily collaboration via Slack / WhatsApp / Teams',
      'Seamless integration into your internal IT workflow',
      'Flexible sprint adjustments with weekly demos',
      'Full source code ownership & IP protection',
      'Fast ramp-up within 7 business days',
    ],
    ctaText: 'Discuss Enterprise Needs',
    ctaLink: '/contact',
  },
]

const faqs = [
  {
    q: 'How do you calculate the price for a custom software or ERP project?',
    a: 'Pricing is based on functional requirements: screen count, database complexity, user role permissions, third-party API integrations (such as GST or payment gateways), and deployment setup. We provide a transparent scope of work with milestone pricing before writing code.',
  },
  {
    q: 'Are there hidden or recurring fees in project-based software?',
    a: 'No hidden fees. With our custom software and ERP products, you own your deployment. Standard recurring costs are limited only to third-party infrastructure (domain, cloud server, or optional SMS/WhatsApp gateway credits).',
  },
  {
    q: 'Do you offer flexible milestone payments?',
    a: 'Yes. Most custom projects are structured across 3 to 4 milestones: initial discovery & architecture, intermediate functional prototype, user acceptance testing (UAT), and final production deployment.',
  },
  {
    q: 'What kind of support is included after launch?',
    a: 'All our custom builds include comprehensive post-launch warranty support (covering bug fixes and operational guidance). We also offer extended monthly Annual Maintenance Contracts (AMC) for long-term support.',
  },
]

export function Pricing() {
  return (
    <>
      <Seo
        title="Transparent Pricing & Flexible Engagement Models | MAXUS IT SERVICES"
        description="Explore clear, transparent pricing models for software development, ERP systems, website design, and monthly digital maintenance from MAXUS IT SERVICES."
        path="/pricing"
        keywords="software development pricing India, ERP software cost, website design packages, custom software estimate, IT AMC pricing"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'FAQPage',
              mainEntity: faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            },
            {
              '@type': 'PriceSpecification',
              name: 'Enterprise Software & IT Engagement Plans',
              priceCurrency: 'INR',
              description:
                'Custom milestone-based pricing for enterprise ERP, business automation, mobile apps, and monthly website maintenance.',
            },
          ],
        }}
      />

      <PageHero
        eyebrow="Pricing & Engagement"
        title={
          <>
            Transparent pricing, <span className="text-lime">tailored to your scale</span>
          </>
        }
        description="Whether you need a full enterprise system, dedicated developers, or ongoing marketing care, we offer clear scopes and honest commercial models."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Pricing' }]}
      />

      {/* Pricing Cards Grid */}
      <section className="bg-canvas py-16 lg:py-24" aria-labelledby="pricing-tiers-heading">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 id="pricing-tiers-heading" className="text-3xl font-extrabold text-navy sm:text-4xl">
              Choose the right engagement model
            </h2>
            <p className="mt-4 text-muted text-base sm:text-lg">
              Every business has unique operational needs. Select the model that fits your timeline,
              scope, and long-term goals.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3 items-stretch">
            {pricingTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative rounded-(--radius-card) border p-8 flex flex-col justify-between transition-all duration-300 ${
                  tier.highlighted
                    ? 'border-blue bg-surface shadow-xl ring-2 ring-blue/20 -translate-y-1'
                    : 'border-line bg-surface hover:shadow-lg'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 right-6">
                    <span
                      className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        tier.highlighted
                          ? 'bg-blue text-white shadow-sm'
                          : 'bg-canvas-subtle text-muted border border-line'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-navy">{tier.name}</h3>
                  <p className="mt-2 text-xs text-muted font-medium min-h-[32px]">{tier.tagline}</p>

                  <div className="mt-6 pb-6 border-b border-line">
                    <span className="text-3xl font-black text-navy">{tier.price}</span>
                    <span className="block text-xs text-muted mt-1 font-medium">{tier.period}</span>
                  </div>

                  <p className="mt-6 text-sm text-ink leading-relaxed">{tier.description}</p>

                  <ul className="mt-6 space-y-3">
                    {tier.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-ink">
                        <CheckCircle2 className="size-4 shrink-0 text-lime-dark mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-line">
                  <Link
                    to={tier.ctaLink}
                    className={`w-full py-3 px-5 rounded-md text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all ${
                      tier.highlighted
                        ? 'bg-blue text-white hover:bg-navy shadow-md'
                        : 'border border-line bg-canvas text-ink hover:border-blue hover:text-blue'
                    }`}
                  >
                    <span>{tier.ctaText}</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="bg-surface py-16 lg:py-20 border-y border-line" aria-label="Commitment highlights">
        <div className="container-page grid gap-8 md:grid-cols-3">
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-lg bg-blue/10 text-blue shrink-0">
              <ShieldCheck className="size-6" />
            </div>
            <div>
              <h4 className="font-bold text-navy text-lg">No Hidden Surprises</h4>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Clear deliverables, upfront terms, and documented feature checklists before contract signing.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-lg bg-lime-dark/10 text-lime-dark shrink-0">
              <Layers className="size-6" />
            </div>
            <div>
              <h4 className="font-bold text-navy text-lg">Milestone Peace of Mind</h4>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Approve each phase of work before unlocking the next payment milestone.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="p-3 rounded-lg bg-blue/10 text-blue shrink-0">
              <Headphones className="size-6" />
            </div>
            <div>
              <h4 className="font-bold text-navy text-lg">Lifetime Support Availability</h4>
              <p className="mt-1 text-xs text-muted leading-relaxed">
                Direct phone and WhatsApp assistance from engineers who understand your system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="bg-canvas py-16 lg:py-24" aria-labelledby="pricing-faq-heading">
        <div className="container-page max-w-4xl">
          <div className="text-center mb-12">
            <h2 id="pricing-faq-heading" className="text-3xl font-extrabold text-navy sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-muted">
              Have questions regarding our contracts, rates, or estimates? Here are quick answers.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-(--radius-card) border border-line bg-surface p-6">
                <h3 className="text-base font-bold text-navy">{faq.q}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted">
              Need a custom quotation tailored to your exact software specification?
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-blue text-white font-semibold text-sm hover:bg-navy transition-all shadow-sm"
              >
                Send Your Requirements
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={whatsappLink('Hello MAXUS IT SERVICES, I would like to get a price estimate for my project.')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-line bg-surface text-ink font-semibold text-sm hover:border-blue hover:text-blue transition-all"
              >
                WhatsApp Quick Estimate
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
