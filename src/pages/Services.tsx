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
        title="Services | Website, Software, ERP and Billing Solutions | MAXUS IT SERVICES"
        description="Eight service areas: website design and development, customised software, billing and accounting, ERP, inventory management, mobile apps, digital marketing and industry solutions."
        path="/services"
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

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="all-services-heading">
        <div className="container-page">
          <h2 id="all-services-heading" className="sr-only">
            All services
          </h2>
          <ServiceGrid services={services} />
        </div>
      </section>

      <ProcessSteps />

      <section className="bg-canvas py-16 lg:py-20" aria-labelledby="scope-heading">
        <div className="container-page grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <h2 id="scope-heading" className="text-3xl font-extrabold text-navy sm:text-4xl">
              What we need from you before a proposal
            </h2>
            <p className="mt-5 text-muted">
              Every service page lists the capabilities we deliver as standard practice. Details
              that depend on your business — integrations, hosting, platform coverage and support
              terms — are confirmed with you and documented before work begins.
            </p>
          </div>
          <ul className="space-y-4">
            {[
              'The operational problem, not just the software name',
              'Who will use the system and what access each role needs',
              'Existing records, formats and anything that must be retained',
              'Timeline constraints and the budget range you are working with',
            ].map((item) => (
              <li
                key={item}
                className="rounded-(--radius-card) border border-line bg-surface p-5 text-sm text-ink"
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
