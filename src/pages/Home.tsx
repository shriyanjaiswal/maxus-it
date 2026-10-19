import { CalendarDays, MapPin, Target, Users } from 'lucide-react'
import { company, locationsLabel } from '../data/company'
import { services } from '../data/services'
import { visibleProjects } from '../data/portfolio'
import { trustPoints } from '../data/site'
import { LinkButton } from '../components/Button'
import { PureHeroImageCarousel } from '../components/PureHeroImageCarousel'
import { DashboardPanel } from '../components/artwork/DashboardPanel'
import { Icon } from '../components/Icon'
import { SectionHeading } from '../components/SectionHeading'
import { Seo } from '../components/Seo'
import { ServiceSlider } from '../components/ServiceSlider'
import { ProjectCard } from '../components/ProjectCard'
import { ProcessSteps } from '../components/ProcessSteps'
import { ContactCTA } from '../components/ContactCTA'
import { ScrollReveal } from '../components/ScrollReveal'


const facts = [
  {
    Icon: CalendarDays,
    label: 'Incorporation',
    value: company.established.label.replace('Since ', ''),
    note: company.established.note,
    unverified: false,
  },
  {
    Icon: Users,
    label: 'Executive Leadership',
    value: company.founders.map((f) => f.name).join(' & '),
    note: 'Managing Director: ' + company.contact.person,
    unverified: false,
  },
  {
    Icon: MapPin,
    label: 'Corporate Presence',
    value: locationsLabel,
    note: 'Registered & Delivery Offices',
    unverified: false,
  },
  {
    Icon: Target,
    label: 'Corporate Mandate',
    value: 'Enterprise-Grade Delivery',
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
          '@graph': [
            {
              '@type': ['ITService', 'LocalBusiness'],
              '@id': 'https://www.maxusitservices.com/#itservice',
              name: company.name,
              alternateName: 'Maxus IT Services Pvt Ltd',
              description: company.tagline,
              email: company.contact.email,
              telephone: company.contact.phoneDial,
              url: 'https://www.maxusitservices.com/',
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
            },
            {
              '@type': 'FAQPage',
              '@id': 'https://www.maxusitservices.com/#faq',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Which industries does Maxus IT Services cater to across India?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We provide specialized ERP and custom software solutions for Garment & Footwear manufacturing, wholesale & retail, Schools & Educational Institutes, Electronics & Appliance retail counters, Healthcare clinics, Hospitality, and multi-warehouse distribution businesses.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can you implement ERP software remotely in other states outside Mumbai & Varanasi?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We deploy secure cloud and hybrid on-premise systems for clients across all states in India. Our deployment includes remote server setup, database configuration, historical ledger migration, and video training sessions with 24/7 dedicated WhatsApp support.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Does your billing and ERP software support Indian GST regulations?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'All our software platforms generate automated GST-compliant tax invoices, manage HSN/SAC codes, generate E-Way bills, and provide one-click exports for GSTR-1 and GSTR-3B filing.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can bills and payment receipts be sent directly to customers on WhatsApp?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Both our Garment & Footwear ERP and Business ERP-14 accounting suites come equipped with automated WhatsApp dispatch, allowing you to send professional digital invoices and payment receipts directly to client mobile phones.',
                  },
                },
              ],
            },
          ],
        }}
      />

      {/* 5 Full Banner Images Auto-Scroll Carousel without text content */}
      <PureHeroImageCarousel />

      <section className="bg-surface py-8 sm:py-12 lg:py-16" aria-label="Company overview">
        <div className="container-page">
          <ScrollReveal direction="up">
            <ul className="grid grid-cols-2 gap-2.5 sm:gap-0 sm:divide-x divide-line rounded-2xl sm:rounded-(--radius-card) border border-line bg-canvas sm:bg-surface p-2 sm:p-0 shadow-(--shadow-card) lg:grid-cols-4">
              {facts.map((fact) => (
                <li
                  key={fact.label}
                  className="rounded-xl sm:rounded-none bg-surface p-3.5 sm:p-6 flex flex-col justify-between border border-line/60 sm:border-0 shadow-xs sm:shadow-none transition-transform active:scale-[0.98]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                      <fact.Icon className="size-4.5 sm:size-5" aria-hidden="true" />
                    </span>
                    <span className="text-[10px] font-bold tracking-wider text-muted uppercase">
                      {fact.label}
                    </span>
                  </div>
                  <div className="mt-3">
                    <p className="font-display text-sm sm:text-base font-bold text-navy line-clamp-1">{fact.value}</p>
                    <p className="mt-0.5 text-[11px] sm:text-xs text-muted leading-tight line-clamp-2">{fact.note}</p>
                  </div>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface pb-10 sm:pb-16 lg:pb-24" aria-labelledby="services-heading">
        <div className="container-page">
          <ScrollReveal direction="up">
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
                <LinkButton to="/services" variant="outlineDark" className="w-full sm:w-auto justify-center">
                  View All Services
                </LinkButton>
              }
            />
          </ScrollReveal>
          <ScrollReveal direction="up" delay={150}>
            <div className="mt-5 sm:mt-8">
              <ServiceSlider services={services} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-canvas py-10 sm:py-16 lg:py-24" aria-labelledby="portfolio-heading">
        <div className="container-page">
          <ScrollReveal direction="up">
            <SectionHeading
              id="portfolio-heading"
              eyebrow="Our Portfolio"
              title="Some of Our Recent Work"
              description="Delivering practical solutions for growing businesses."
              action={
                <LinkButton to="/portfolio" variant="outlineDark" className="w-full sm:w-auto justify-center">
                  View All Projects
                </LinkButton>
              }
            />
          </ScrollReveal>
          {projects.length > 0 ? (
            <ScrollReveal direction="up" delay={200}>
              <div className="mt-6 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.slice(0, 6).map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </ScrollReveal>
          ) : (
            <p className="mt-6 sm:mt-12 rounded-2xl border border-dashed border-line bg-surface p-6 sm:p-10 text-center text-sm text-muted">
              Featured projects are currently being updated. Contact our team for custom case studies and live demos.
            </p>
          )}
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy py-10 sm:py-16 lg:py-24" aria-labelledby="solutions-heading">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_100%_at_20%_0%,rgba(23,107,138,0.55),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="container-page relative grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="right">
            <div>
              <p className="eyebrow flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-lime">
                <span className="h-px w-6 sm:w-8 bg-lime" aria-hidden="true" />
                Business Solutions
              </p>
              <h2
                id="solutions-heading"
                className="mt-2.5 sm:mt-4 text-[20px] font-extrabold text-white sm:text-3xl lg:text-[2.6rem] font-heading leading-tight"
              >
                Smart Solutions for{' '}
                <span className="text-lime">Efficient Business Operations</span>
              </h2>
              <p className="mt-3 sm:mt-5 text-[14px] sm:text-base text-white/75 leading-relaxed">
                Our billing, accounting, ERP and inventory solutions help you manage your business
                more efficiently with easy-to-use and practical technology.
              </p>
              <ul className="mt-5 sm:mt-8 grid gap-2.5 sm:gap-3 sm:grid-cols-2">
                {solutionChips.map((chip) => (
                  <li
                    key={chip.label}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 sm:px-4 sm:py-3"
                  >
                    <span className="inline-flex size-8 sm:size-9 shrink-0 items-center justify-center rounded-lg bg-blue/40 text-lime">
                      <Icon name={chip.icon} className="size-4" strokeWidth={2} />
                    </span>
                    <span className="text-[13px] sm:text-sm font-semibold text-white/90">{chip.label}</span>
                  </li>
                ))}
              </ul>
              <LinkButton to="/solutions" variant="lime" arrow className="mt-6 sm:mt-9 w-full sm:w-auto justify-center">
                Explore Business Solutions
              </LinkButton>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={200}>
            <DashboardPanel />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-surface py-10 sm:py-16 lg:py-24" aria-labelledby="why-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <p className="eyebrow flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-blue">
              <span className="h-px w-6 sm:w-8 bg-lime-dark" aria-hidden="true" />
              Why Choose Maxus
            </p>
            <h2 id="why-heading" className="mt-2.5 sm:mt-4 text-[20px] font-extrabold text-navy sm:text-3xl lg:text-4xl font-heading">
              Your Trusted Technology Partner
            </h2>
            <p className="mt-2.5 sm:mt-5 text-[14px] sm:text-base text-muted leading-relaxed">
              We focus on delivering practical, scalable and business aligned solutions with a
              customer-first approach.
            </p>
          </div>
          <ul className="grid gap-3 sm:gap-6 sm:grid-cols-2">
            {trustPoints.map((point) => (
              <li
                key={point.title}
                className="rounded-2xl border border-line bg-canvas p-4 sm:p-6 shadow-xs flex items-start gap-3 sm:gap-3.5 transition-transform active:scale-[0.98]"
              >
                <span className="inline-flex size-10 sm:size-12 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <Icon name={point.icon} className="size-5 sm:size-6" strokeWidth={1.7} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-[15px] sm:text-base font-bold text-navy">{point.title}</h3>
                  <p className="mt-1 text-[12px] sm:text-sm text-muted leading-relaxed">{point.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pan-India Service Coverage & Industrial Hubs Section */}
      <section className="bg-canvas py-10 sm:py-16 lg:py-24 border-t border-line" aria-labelledby="nationwide-coverage-heading">
        <div className="container-page">
          <SectionHeading
            id="nationwide-coverage-heading"
            eyebrow="Nationwide Footprint"
            title="Delivering IT & Software Solutions Across All States in India"
            description="Empowering manufacturers, retail chains, wholesalers, and educational institutions from Kashmir to Kanyakumari with seamless cloud deployment, on-premise setups, and 24/7 dedicated support."
          />

          <div className="mt-6 sm:mt-12 grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-line bg-surface p-4 sm:p-6 shadow-xs transition-transform active:scale-[0.98]">
              <div className="flex items-center gap-3">
                <span className="flex size-8 sm:size-10 items-center justify-center rounded-xl bg-blue-soft text-blue font-bold text-xs sm:text-sm">
                  01
                </span>
                <h3 className="font-heading font-bold text-navy text-[15px] sm:text-base">North India</h3>
              </div>
              <p className="mt-2 text-[12px] text-muted leading-relaxed">
                Delhi NCR, Uttar Pradesh (Kanpur, Lucknow, Noida, Varanasi), Punjab, Haryana, Rajasthan (Jaipur, Jodhpur), Uttarakhand.
              </p>
              <div className="mt-3 pt-2 border-t border-line text-[11px] sm:text-xs font-semibold text-blue">
                ✓ Garment ERP & School Portals
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-4 sm:p-6 shadow-xs transition-transform active:scale-[0.98]">
              <div className="flex items-center gap-3">
                <span className="flex size-8 sm:size-10 items-center justify-center rounded-xl bg-lime-soft text-lime-dark font-bold text-xs sm:text-sm">
                  02
                </span>
                <h3 className="font-heading font-bold text-navy text-[15px] sm:text-base">West India</h3>
              </div>
              <p className="mt-2 text-[12px] text-muted leading-relaxed">
                Maharashtra (Mumbai, Pune, Nagpur), Gujarat (Surat, Ahmedabad, Rajkot), Madhya Pradesh (Indore, Bhopal), Goa.
              </p>
              <div className="mt-3 pt-2 border-t border-line text-[11px] sm:text-xs font-semibold text-lime-dark">
                ✓ Textile & Touch POS Retail
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-4 sm:p-6 shadow-xs transition-transform active:scale-[0.98]">
              <div className="flex items-center gap-3">
                <span className="flex size-8 sm:size-10 items-center justify-center rounded-xl bg-blue-soft text-blue font-bold text-xs sm:text-sm">
                  03
                </span>
                <h3 className="font-heading font-bold text-navy text-[15px] sm:text-base">South India</h3>
              </div>
              <p className="mt-2 text-[12px] text-muted leading-relaxed">
                Karnataka (Bengaluru), Tamil Nadu (Chennai, Tirupur, Coimbatore), Telangana (Hyderabad), Andhra Pradesh, Kerala.
              </p>
              <div className="mt-3 pt-2 border-t border-line text-[11px] sm:text-xs font-semibold text-blue">
                ✓ Apparel BOM & Multi-Store ERP
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-4 sm:p-6 shadow-xs transition-transform active:scale-[0.98]">
              <div className="flex items-center gap-3">
                <span className="flex size-8 sm:size-10 items-center justify-center rounded-xl bg-lime-soft text-lime-dark font-bold text-xs sm:text-sm">
                  04
                </span>
                <h3 className="font-heading font-bold text-navy text-[15px] sm:text-base">East & Central</h3>
              </div>
              <p className="mt-2 text-[12px] text-muted leading-relaxed">
                West Bengal (Kolkata), Bihar (Patna), Odisha (Bhubaneswar), Jharkhand, Chhattisgarh, and North-Eastern States.
              </p>
              <div className="mt-3 pt-2 border-t border-line text-[11px] sm:text-xs font-semibold text-lime-dark">
                ✓ Wholesale & Distribution ERP
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-10 rounded-2xl bg-navy p-4.5 sm:p-8 text-white sm:flex sm:items-center sm:justify-between shadow-lg">
            <div>
              <p className="text-[11px] sm:text-xs font-bold text-lime uppercase tracking-widest">Pan-India Remote & On-Site Assistance</p>
              <h3 className="mt-1 text-[18px] sm:text-2xl font-extrabold font-heading">Looking to implement ERP or Custom Software in your city?</h3>
              <p className="mt-2 text-[13px] sm:text-sm text-white/75 max-w-2xl leading-relaxed">
                We provide instant live online demos, remote server installations, localized staff training, and 24/7 WhatsApp support anywhere in India.
              </p>
            </div>
            <LinkButton to="/contact" variant="lime" arrow className="mt-4 sm:mt-0 w-full sm:w-auto justify-center shrink-0">
              Get Pan-India Quote
            </LinkButton>
          </div>
        </div>
      </section>

      <ProcessSteps tone="muted" />

      {/* Nationwide ERP & IT Services FAQ Section */}
      <section className="bg-surface py-10 sm:py-16 lg:py-24 border-t border-line" aria-labelledby="home-faq-heading">
        <div className="container-page max-w-4xl">
          <SectionHeading
            id="home-faq-heading"
            eyebrow="Frequently Asked Questions"
            title="Everything You Need to Know About Our IT & ERP Solutions"
            description="Clear answers regarding software implementation, GST compliance, remote deployment, and post-launch technical support across India."
          />

          <div className="mt-6 sm:mt-12 space-y-3 sm:space-y-4">
            {[
              {
                q: 'Which industries does Maxus IT Services cater to across India?',
                a: 'We provide specialized ERP and custom software solutions for Garment & Footwear manufacturing, wholesale & retail, Schools & Educational Institutes, Electronics & Appliance retail counters, Healthcare clinics, Hospitality, and multi-warehouse distribution businesses.',
              },
              {
                q: 'Can you implement ERP software remotely in other states outside Mumbai & Varanasi?',
                a: 'Yes. We deploy secure cloud and hybrid on-premise systems for clients across all states in India. Our deployment includes remote server setup, database configuration, historical ledger migration, and video training sessions with 24/7 dedicated WhatsApp support.',
              },
              {
                q: 'Does your billing and ERP software support Indian GST regulations?',
                a: 'Absolutely. All our software platforms generate automated GST-compliant tax invoices, manage HSN/SAC codes, generate E-Way bills, and provide one-click exports for GSTR-1 and GSTR-3B filing.',
              },
              {
                q: 'Can bills and payment receipts be sent directly to customers on WhatsApp?',
                a: 'Yes. Both our Garment & Footwear ERP and Business ERP-14 accounting suites come equipped with automated WhatsApp dispatch, allowing you to send professional digital invoices and payment receipts directly to client mobile phones.',
              },
              {
                q: 'How does your team handle data migration from our existing spreadsheets?',
                a: 'Our engineering team conducts structured data sanitization and imports your products, parties, open balances, and inventory ledgers from Excel or legacy accounting systems directly into your new software without operational disruption.',
              },
            ].map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-line bg-canvas p-4 sm:p-6 transition-all duration-200 open:border-blue/50 open:bg-surface open:shadow-sm"
              >
                <summary className="cursor-pointer list-none font-heading text-[15px] sm:text-base font-bold text-navy flex items-center justify-between transition-colors group-hover:text-blue">
                  <span>{faq.q}</span>
                  <span className="ml-4 flex size-6 sm:size-7 shrink-0 items-center justify-center rounded-full bg-blue/10 text-blue font-bold text-sm sm:text-base transition-transform duration-300 group-open:rotate-45 group-open:bg-navy group-open:text-lime">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[13px] sm:text-sm text-muted leading-relaxed border-t border-line/60 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
