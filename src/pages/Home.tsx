import { CalendarDays, MapPin, Target, Users } from 'lucide-react'
import { company, locationsLabel } from '../data/company'
import { services } from '../data/services'
import { visibleProjects } from '../data/portfolio'
import { heroHighlights, trustPoints } from '../data/site'
import { LinkButton } from '../components/Button'
import { HeroGlobe } from '../components/artwork/HeroGlobe'
import { DashboardPanel } from '../components/artwork/DashboardPanel'
import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'
import { ServiceGrid } from '../components/ServiceCard'
import { ProjectCard } from '../components/ProjectCard'
import { ProcessSteps } from '../components/ProcessSteps'
import { ContactCTA } from '../components/ContactCTA'


const facts = [
  {
    Icon: CalendarDays,
    label: 'Since',
    value: company.established.label.replace('Since ', ''),
    note: company.established.note,
    unverified: company.established.unverified,
  },
  {
    Icon: Users,
    label: 'Founded By',
    value: company.founders.map((f) => f.name).join(' & '),
    note: 'Business head: ' + company.contact.person,
    unverified: company.founders.some((f) => f.unverified),
  },
  {
    Icon: MapPin,
    label: 'Our Presence',
    value: locationsLabel,
    note: 'Associated locations',
    unverified: company.locations.some((l) => l.unverified),
  },
  {
    Icon: Target,
    label: 'Our Vision',
    value: 'Practical technology',
    note: company.vision,
    unverified: false,
  },
]

const solutionChips = [
  { icon: 'receipt-text', label: 'Billing & Invoicing' },
  { icon: 'file-text', label: 'Accounting' },
  { icon: 'boxes', label: 'Inventory Management' },
  { icon: 'workflow', label: 'ERP Solutions' },
  { icon: 'bar-chart-3', label: 'Business Reports' },
  { icon: 'users', label: 'Multi-User Access' },
]

export function Home() {
  const projects = visibleProjects()

  return (
    <>
      <Seo
        title="MAXUS IT SERVICES | Technology That Moves Your Business Forward"
        description={company.heroDescription}
        path="/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: company.name,
          description: company.tagline,
          email: company.contact.email,
          telephone: company.contact.phoneDial,
        }}
      />

      <section className="relative overflow-hidden bg-navy-deep" aria-labelledby="hero-heading">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_100%_at_75%_20%,rgba(23,107,138,0.5),transparent_65%)]"
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-12 py-14 lg:grid-cols-[52%_48%] lg:gap-8 lg:py-20">
          <div>
            <p className="eyebrow text-lime">{company.heroEyebrow}</p>
            <h1
              id="hero-heading"
              className="mt-5 text-balance-tight font-display text-[clamp(2.25rem,10vw,3.25rem)] font-extrabold text-white lg:text-[clamp(2.8rem,5vw,4.4rem)]"
            >
              Technology That Moves Your{' '}
              <span className="text-lime">Business Forward.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-white/80 lg:text-lg">
              {company.heroDescription}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <LinkButton to="/contact" variant="lime" arrow>
                Discuss Your Project
              </LinkButton>
              <LinkButton to="/services" variant="outlineLight">
                Explore Our Services
              </LinkButton>
            </div>
            <ul className="mt-10 grid gap-5 sm:grid-cols-3">
              {heroHighlights.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-lime">
                    <Icon name={item.icon} className="size-4" strokeWidth={2} />
                  </span>
                  <span className="text-xs font-semibold text-white/85 lg:text-sm">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <HeroGlobe className="mx-auto w-full max-w-[560px]" />
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 lg:py-16" aria-label="Company overview">
        <div className="container-page">
          <ul className="grid divide-line rounded-(--radius-card) border border-line bg-surface shadow-(--shadow-card) sm:grid-cols-2 sm:divide-x lg:grid-cols-4">
            {facts.map((fact) => (
              <li key={fact.label} className="flex gap-4 p-6">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <fact.Icon className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-wide text-muted uppercase">
                    {fact.label}
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-navy">{fact.value}</p>
                  <p className="mt-1 text-xs text-muted">{fact.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface pb-16 lg:pb-24" aria-labelledby="services-heading">
        <div className="container-page">
          <SectionHeading
            id="services-heading"
            eyebrow="Our Services"
            title={
              <>
                Comprehensive IT Services for <span className="text-blue">Your Business</span>
              </>
            }
            description="We provide end-to-end technology solutions to simplify your operations and accelerate growth."
            action={
              <LinkButton to="/services" variant="outlineDark">
                View All Services
              </LinkButton>
            }
          />
          <div className="mt-12">
            <ServiceGrid services={services} />
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16 lg:py-24" aria-labelledby="portfolio-heading">
        <div className="container-page">
          <SectionHeading
            id="portfolio-heading"
            eyebrow="Our Portfolio"
            title="Some of Our Recent Work"
            description="Delivering practical solutions for growing businesses."
            action={
              <LinkButton to="/portfolio" variant="outlineDark">
                View All Projects
              </LinkButton>
            }
          />
          {projects.length > 0 ? (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {projects.slice(0, 3).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="mt-12 rounded-(--radius-card) border border-dashed border-line bg-surface p-10 text-center text-sm text-muted">
              Approved client projects will appear here once publication permission is confirmed.
            </p>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-16 lg:py-24" aria-labelledby="solutions-heading">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_100%_at_20%_0%,rgba(23,107,138,0.55),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="eyebrow flex items-center gap-3 text-lime">
              <span className="h-px w-8 bg-lime" aria-hidden="true" />
              Business Solutions
            </p>
            <h2
              id="solutions-heading"
              className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-[2.6rem]"
            >
              Smart Solutions for{' '}
              <span className="text-lime">Efficient Business Operations</span>
            </h2>
            <p className="mt-5 text-white/75">
              Our billing, accounting, ERP and inventory solutions help you manage your business
              more efficiently with easy-to-use and practical technology.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {solutionChips.map((chip) => (
                <li
                  key={chip.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="inline-flex size-9 items-center justify-center rounded-lg bg-blue/40 text-lime">
                    <Icon name={chip.icon} className="size-4" strokeWidth={2} />
                  </span>
                  <span className="text-sm font-semibold text-white/90">{chip.label}</span>
                </li>
              ))}
            </ul>
            <LinkButton to="/solutions" variant="lime" arrow className="mt-9">
              Explore Business Solutions
            </LinkButton>
          </div>
          <DashboardPanel />
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="why-heading">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <p className="eyebrow flex items-center gap-3 text-blue">
              <span className="h-px w-8 bg-lime-dark" aria-hidden="true" />
              Why Choose Maxus
            </p>
            <h2 id="why-heading" className="mt-4 text-3xl font-extrabold text-navy sm:text-4xl">
              Your Trusted Technology Partner
            </h2>
            <p className="mt-5 text-muted">
              We focus on delivering practical, scalable and business aligned solutions with a
              customer-first approach.
            </p>
          </div>
          <ul className="grid gap-8 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li key={point.title}>
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <Icon name={point.icon} className="size-6" strokeWidth={1.7} />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">{point.title}</h3>
                <p className="mt-2 text-sm text-muted">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ProcessSteps tone="muted" />
      <ContactCTA />
    </>
  )
}
