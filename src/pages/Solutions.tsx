import { company } from '../data/company'
import { getService } from '../data/services'
import { ContactCTA } from '../components/ContactCTA'
import { DashboardPanel } from '../components/artwork/DashboardPanel'
import { LinkButton } from '../components/Button'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/SectionHeading'

const focusAreas = [
  'billing-accounting',
  'erp-business-management',
  'inventory-management',
]

const outcomes = [
  {
    title: 'One set of records',
    body: 'Purchase, stock, sales and billing entries feed the same data instead of separate registers.',
  },
  {
    title: 'Role-based access',
    body: 'Owners, store staff and accountants see the screens and reports that belong to their work.',
  },
  {
    title: 'Reviews that take minutes',
    body: 'Balances, outstanding amounts and stock positions are readable without manual collation.',
  },
]

export function Solutions() {
  return (
    <>
      <Seo
        title="Business Solutions | Billing, ERP and Inventory | MAXUS IT SERVICES"
        description="Billing and accounting, ERP and inventory management solutions that help businesses organise operations and manage records more efficiently."
        path="/solutions"
      />

      <PageHero
        eyebrow="Business Solutions"
        title={
          <>
            Smart solutions for <span className="text-lime">efficient operations</span>
          </>
        }
        description="Our billing, accounting, ERP and inventory solutions help you manage your business more efficiently with easy-to-use and practical technology."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Business Solutions' }]}
        actions={
          <>
            <LinkButton to="/contact" variant="lime" arrow>
              Discuss Your Requirements
            </LinkButton>
            <LinkButton to="/services" variant="outlineLight">
              All Services
            </LinkButton>
          </>
        }
      />

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="ops-heading">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <DashboardPanel />
          <div>
            <SectionHeading
              id="ops-heading"
              eyebrow="Operations View"
              title="Built around the records you already maintain"
              description="The dashboards we deliver focus on the numbers business owners actually review — billing status, stock positions and outstanding balances — presented consistently across users."
            />
            <ul className="mt-8 space-y-4">
              {outcomes.map((item) => (
                <li key={item.title} className="rounded-(--radius-card) border border-line bg-canvas p-5">
                  <h3 className="font-display text-base font-bold text-navy">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16 lg:py-24" aria-labelledby="focus-heading">
        <div className="container-page">
          <SectionHeading
            id="focus-heading"
            eyebrow="Focus Areas"
            title="Three areas we work in most"
            description="Each area is scoped against your workflow. Feature specifics such as tax handling, barcode support and module coverage are confirmed before they are committed in a proposal."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {focusAreas.map((slug) => {
              const service = getService(slug)
              if (!service) return null
              return (
                <article
                  key={slug}
                  className="flex h-full flex-col rounded-(--radius-card) border border-line bg-surface p-7"
                >
                  <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                  <p className="mt-3 text-sm text-muted">{service.summary}</p>
                  <ul className="mt-5 flex-1 space-y-2">
                    {service.capabilities.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-ink">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime-dark" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <LinkButton
                    to={`/services/${service.slug}`}
                    variant="outlineDark"
                    className="mt-6 w-full py-2.5"
                    arrow
                  >
                    Explore Service
                  </LinkButton>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20" aria-labelledby="start-heading">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <h2 id="start-heading" className="text-3xl font-extrabold text-white sm:text-4xl">
              Starting from a spreadsheet is fine
            </h2>
            <p className="mt-5 text-white/75">
              Most engagements begin with the records you already keep. We map those columns and
              routines to screens and reports, so the move to a system does not ask your staff to
              relearn how their work is done.
            </p>
          </div>
          <dl className="grid gap-6 self-center sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-(--radius-card) border border-white/10 bg-white/5 p-6">
              <dt className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                Speak with
              </dt>
              <dd className="mt-2 font-display text-lg font-bold text-white">
                {company.contact.person}, {company.contact.title}
              </dd>
            </div>
            <div className="rounded-(--radius-card) border border-white/10 bg-white/5 p-6">
              <dt className="text-xs font-semibold tracking-wide text-white/60 uppercase">
                Next step
              </dt>
              <dd className="mt-2 text-sm text-white/85">
                A requirement discussion, then a written scope covering screens, users and reports.
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
