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
  { icon: 'workflow', label: 'School ERP Software' },
  { icon: 'graduation-cap', label: 'Institute Management' },
  { icon: 'boxes', label: 'Electronic Store ERP' },
  { icon: 'receipt-text', label: 'Billing & Invoicing' },
  { icon: 'file-text', label: 'Financial Accounting' },
  { icon: 'smartphone', label: 'Mobile App Solutions' },
  { icon: 'bar-chart-3', label: 'Reports & Analytics' },
  { icon: 'shield-check', label: 'Secure Cloud & POS' },
]

export function Home() {
  const projects = visibleProjects()

  return (
    <>
      <Seo
        title="MAXUS IT SERVICES | IT Solutions, ERP & Accounting Software India"
        description="Maxus IT Services Pvt Ltd delivers premier Garment ERP, Business ERP-14, School Management, Touch POS billing, and Custom Software Development across all states in India."
        path="/"
        keywords="ERP software India, garment manufacturing ERP, footwear retail software, school ERP software India, touch POS billing software, GST accounting software, custom software development company India"
        ogImage="/assets/products/smart-it-solutions-banner.jpg"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ITService',
          name: company.name,
          alternateName: 'Maxus IT Services Pvt Ltd',
          description: company.tagline,
          email: company.contact.email,
          telephone: company.contact.phoneDial,
          areaServed: {
            '@type': 'Country',
            name: 'India',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'IT Services & Software Suites',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'SoftwareApplication',
                  name: 'Garment & Footwear ERP Software',
                  applicationCategory: 'BusinessApplication',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'SoftwareApplication',
                  name: 'Business ERP-14 Accounting Software',
                  applicationCategory: 'BusinessApplication',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'SoftwareApplication',
                  name: 'School ERP Software',
                  applicationCategory: 'EducationalApplication',
                },
              },
            ],
          },
        }}
      />

      <section className="relative overflow-hidden bg-navy-deep py-16 lg:py-24" aria-labelledby="hero-heading">
        {/* Layered atmospheric lighting & grid mesh */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_20%,rgba(23,107,138,0.55),transparent_70%)] animate-pulse-glow"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-40 -top-40 size-96 rounded-full bg-blue/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-10 bottom-0 size-80 rounded-full bg-lime/10 blur-3xl"
          aria-hidden="true"
        />
        {/* Subtle geometric dot grid pattern */}
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] opacity-60"
          aria-hidden="true"
        />

        <div className="container-page relative grid items-center gap-10 lg:grid-cols-[54%_46%] lg:gap-10">
          <div className="min-w-0 max-w-full">
            {/* Enterprise status badge */}
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-lime/30 bg-lime/10 px-3 py-1.5 text-[10.5px] font-bold tracking-wide text-lime uppercase backdrop-blur-md sm:px-4 sm:text-xs">
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-lime" />
              </span>
              <span className="leading-tight">Smart Tech • Practical Solutions • Business Growth</span>
            </div>

            <h1
              id="hero-heading"
              className="mt-5 text-balance-tight font-display text-[clamp(1.85rem,7.5vw,3.25rem)] font-extrabold tracking-tight break-words text-white lg:text-[clamp(3rem,4.5vw,4.5rem)] lg:leading-[1.08]"
            >
              Technology That Moves Your{' '}
              <span className="bg-gradient-to-r from-lime via-[#d8f45a] to-white bg-clip-text text-transparent">
                Business Forward.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              {company.heroDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <LinkButton to="/contact" variant="lime" arrow className="w-full justify-center shadow-[0_0_24px_rgba(184,217,50,0.35)] transition-all hover:shadow-[0_0_32px_rgba(184,217,50,0.5)] sm:w-auto">
                Discuss Your Project
              </LinkButton>
              <LinkButton to="/services" variant="outlineLight" className="w-full justify-center sm:w-auto">
                Explore Our Services
              </LinkButton>
            </div>

            {/* Highlights with frosted glass treatment */}
            <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:mt-10 sm:grid-cols-3 sm:gap-3">
              {heroHighlights.map((item) => (
                <li
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] p-3 backdrop-blur-md transition-colors hover:border-lime/30 hover:bg-white/[0.08]"
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-lime/15 text-lime shadow-inner">
                    <Icon name={item.icon} className="size-4.5" strokeWidth={2.2} />
                  </span>
                  <span className="text-xs font-semibold leading-snug text-white/90">
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: Interactive focal centerpiece (hidden on mobile, visible on desktop/tablet) */}
          <div className="relative hidden max-w-full items-center justify-center py-4 lg:flex">
            {/* Ambient halo glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue/30 via-lime/15 to-transparent blur-2xl" />

            {/* Floating Top Metric Glass Card */}
            <div className="animate-float-slow absolute -top-4 -left-4 z-20 hidden rounded-2xl border border-white/15 bg-navy-soft/80 p-4 shadow-2xl backdrop-blur-xl sm:flex sm:items-center sm:gap-3.5">
              <div className="flex size-11 items-center justify-center rounded-xl bg-lime text-navy font-bold shadow-md">
                <span className="text-lg">15+</span>
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">Years Experience</p>
                <p className="text-[11px] text-white/70">Trusted Tech Partner Since 2011</p>
              </div>
            </div>

            {/* Main Hero artwork */}
            <div className="relative z-10 w-full max-w-[540px]">
              <HeroGlobe className="mx-auto w-full drop-shadow-[0_20px_50px_rgba(7,31,53,0.8)]" />
            </div>

            {/* Floating Bottom Metric Glass Card */}
            <div className="animate-float-reverse absolute -bottom-4 -right-2 z-20 hidden rounded-2xl border border-white/15 bg-navy-soft/85 p-4 shadow-2xl backdrop-blur-xl sm:flex sm:items-center sm:gap-3.5">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue text-white shadow-md">
                <svg className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">99.9% Reliable SLA</p>
                <p className="text-[11px] text-lime">Enterprise ERP & Web Systems</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12 lg:py-16" aria-label="Company overview">
        <div className="container-page">
          <ul className="grid divide-y sm:divide-y-0 sm:divide-x divide-line rounded-(--radius-card) border border-line bg-surface shadow-(--shadow-card) sm:grid-cols-2 lg:grid-cols-4">
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
              {projects.slice(0, 6).map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="mt-12 rounded-(--radius-card) border border-dashed border-line bg-surface p-10 text-center text-sm text-muted">
              Featured projects are currently being updated. Contact our team for custom case studies and live demos.
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

      {/* Pan-India Service Coverage & Industrial Hubs Section */}
      <section className="bg-canvas py-16 lg:py-24 border-t border-line" aria-labelledby="nationwide-coverage-heading">
        <div className="container-page">
          <SectionHeading
            id="nationwide-coverage-heading"
            eyebrow="Nationwide Footprint"
            title="Delivering IT & Software Solutions Across All States in India"
            description="Empowering manufacturers, retail chains, wholesalers, and educational institutions from Kashmir to Kanyakumari with seamless cloud deployment, on-premise setups, and 24/7 dedicated support."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-(--radius-card) border border-line bg-surface p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-blue-soft text-blue font-bold text-sm">
                  01
                </span>
                <h3 className="font-bold text-navy">North India</h3>
              </div>
              <p className="mt-3 text-xs text-muted leading-relaxed">
                Delhi NCR, Uttar Pradesh (Kanpur, Lucknow, Noida, Varanasi), Punjab, Haryana, Rajasthan (Jaipur, Jodhpur), Uttarakhand.
              </p>
              <div className="mt-4 pt-3 border-t border-line text-xs font-semibold text-blue">
                ✓ Garment ERP & School Portals
              </div>
            </div>

            <div className="rounded-(--radius-card) border border-line bg-surface p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-lime-soft text-lime-dark font-bold text-sm">
                  02
                </span>
                <h3 className="font-bold text-navy">West India</h3>
              </div>
              <p className="mt-3 text-xs text-muted leading-relaxed">
                Maharashtra (Mumbai, Pune, Nagpur), Gujarat (Surat, Ahmedabad, Rajkot), Madhya Pradesh (Indore, Bhopal), Goa.
              </p>
              <div className="mt-4 pt-3 border-t border-line text-xs font-semibold text-lime-dark">
                ✓ Textile & Touch POS Retail
              </div>
            </div>

            <div className="rounded-(--radius-card) border border-line bg-surface p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-blue-soft text-blue font-bold text-sm">
                  03
                </span>
                <h3 className="font-bold text-navy">South India</h3>
              </div>
              <p className="mt-3 text-xs text-muted leading-relaxed">
                Karnataka (Bengaluru), Tamil Nadu (Chennai, Tirupur, Coimbatore), Telangana (Hyderabad), Andhra Pradesh, Kerala.
              </p>
              <div className="mt-4 pt-3 border-t border-line text-xs font-semibold text-blue">
                ✓ Apparel BOM & Multi-Store ERP
              </div>
            </div>

            <div className="rounded-(--radius-card) border border-line bg-surface p-6 shadow-xs">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-lime-soft text-lime-dark font-bold text-sm">
                  04
                </span>
                <h3 className="font-bold text-navy">East & Central</h3>
              </div>
              <p className="mt-3 text-xs text-muted leading-relaxed">
                West Bengal (Kolkata), Bihar (Patna), Odisha (Bhubaneswar), Jharkhand, Chhattisgarh, and North-Eastern States.
              </p>
              <div className="mt-4 pt-3 border-t border-line text-xs font-semibold text-lime-dark">
                ✓ Wholesale & Distribution ERP
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-navy p-8 text-white sm:flex sm:items-center sm:justify-between shadow-lg">
            <div>
              <p className="text-xs font-bold text-lime uppercase tracking-widest">Pan-India Remote & On-Site Assistance</p>
              <h3 className="mt-1 text-xl font-extrabold sm:text-2xl">Looking to implement ERP or Custom Software in your city?</h3>
              <p className="mt-2 text-sm text-white/75 max-w-2xl">
                We provide instant live online demos, remote server installations, localized staff training, and 24/7 WhatsApp support anywhere in India.
              </p>
            </div>
            <LinkButton to="/contact" variant="lime" arrow className="mt-6 sm:mt-0 shrink-0">
              Get Pan-India Quote
            </LinkButton>
          </div>
        </div>
      </section>

      <ProcessSteps tone="muted" />
      <ContactCTA />
    </>
  )
}
