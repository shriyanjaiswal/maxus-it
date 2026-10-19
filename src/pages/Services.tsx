import { services } from '../data/services'
import { ContactCTA } from '../components/ContactCTA'
import { PageHero } from '../components/PageHero'
import { ProcessSteps } from '../components/ProcessSteps'
import { Seo } from '../components/Seo'
import { ServiceGrid } from '../components/ServiceCard'

export function Services() {
  return (
    <>
      <Seo
        title="Comprehensive IT & Software Development Services India | MAXUS IT SERVICES"
        description="End-to-end IT services: Custom Software Development, ERP & CRM, GST Billing, Multi-Warehouse Inventory, Cloud Solutions, Mobile Apps, and Digital Marketing across India."
        path="/services"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ]}
        keywords="IT services company India, custom software development, ERP development India, GST billing solutions, inventory management software, mobile app development India, cloud IT consulting"
        ogImage="/assets/products/smart-it-solutions-banner.jpg"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: 'Enterprise IT & Custom Software Development Services',
              provider: {
                '@type': 'Organization',
                name: 'MAXUS IT SERVICES PVT. LTD.',
                url: 'https://www.maxusitservices.com',
              },
              areaServed: {
                '@type': 'Country',
                name: 'India',
              },
            },
            {
              '@type': 'ItemList',
              name: 'All IT Services & Solutions',
              itemListElement: services.map((s, idx) => ({
                '@type': 'ListItem',
                position: idx + 1,
                name: s.title,
                url: `https://www.maxusitservices.com/services/${s.slug}`,
              })),
            },
          ],
        }}
      />

      <PageHero
        eyebrow="Our Services"
        title={
          <>
            Technology services that <span className="text-lime">fit your operation</span>
          </>
        }
        description="From a single website to a full business management system, each engagement starts with your requirements and ends with something your team can actually run."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
      />

      <section className="bg-surface py-10 sm:py-16 lg:py-24" aria-labelledby="all-services-heading">
        <div className="container-page">
          <h2 id="all-services-heading" className="sr-only">
            All services
          </h2>
          <ServiceGrid services={services} />
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-canvas py-10 sm:py-16 lg:py-20" aria-labelledby="scope-heading">
        <div className="container-page grid gap-8 sm:gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <h2 id="scope-heading" className="text-[20px] font-extrabold text-navy sm:text-3xl lg:text-4xl font-heading leading-tight">
              What we need from you before a proposal
            </h2>
            <p className="mt-3 sm:mt-5 text-[14px] sm:text-base text-muted leading-relaxed">
              Every service page lists the capabilities we deliver as standard practice. Details
              that depend on your business — integrations, hosting, platform coverage and support
              terms — are confirmed with you and documented before work begins.
            </p>
          </div>
          <ul className="space-y-3 sm:space-y-4">
            {[
              'The operational problem, not just the software name',
              'Who will use the system and what access each role needs',
              'Existing records, formats and anything that must be retained',
              'Timeline constraints and the budget range you are working with',
            ].map((item) => (
              <li
                key={item}
                className="rounded-2xl border border-line bg-surface p-4 sm:p-5 text-xs sm:text-sm font-medium text-ink shadow-xs"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
