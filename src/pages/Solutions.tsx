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
        title="Enterprise ERP Solutions & Business Accounting Software India | MAXUS IT SERVICES"
        description="Explore ready-to-deploy enterprise software: Garment & Footwear ERP, School ERP, Business ERP-14 Accounting, and Touch POS billing tailored for Indian manufacturers and retailers."
        path="/solutions"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Solutions', path: '/solutions' },
        ]}
        keywords="enterprise ERP solutions India, garment manufacturing ERP, footwear ERP software, touch POS billing India, school management system India, GST accounting software, retail inventory ERP"
        ogImage="/assets/products/complete-it-solutions-banner.jpg"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Enterprise ERP & Business Solutions in India',
          description: 'Specialized enterprise software suites engineered for educational institutions, garment manufacturing, retail trade, and wholesale distribution across India.',
          url: 'https://www.maxusitservices.com/solutions',
          provider: {
            '@type': 'Organization',
            name: company.name,
            telephone: company.contact.phoneDial,
          },
        }}
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

      <section className="bg-surface py-10 sm:py-16 lg:py-24" aria-labelledby="ops-heading">
        <div className="container-page grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <DashboardPanel />
          <div>
            <SectionHeading
              id="ops-heading"
              eyebrow="Operations View"
              title="Built around the records you already maintain"
              description="The dashboards we deliver focus on the numbers business owners actually review — billing status, stock positions and outstanding balances — presented consistently across users."
            />
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {outcomes.map((item) => (
                <li key={item.title} className="rounded-2xl border border-line bg-canvas p-4 sm:p-5">
                  <h3 className="font-display text-sm sm:text-base font-bold text-navy">{item.title}</h3>
                  <p className="mt-1 text-xs sm:text-sm text-muted leading-relaxed">{item.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-10 sm:py-16 lg:py-24" aria-labelledby="focus-heading">
        <div className="container-page">
          <SectionHeading
            id="focus-heading"
            eyebrow="Focus Areas"
            title="Three areas we work in most"
            description="Each area is scoped against your workflow. Feature specifics such as tax handling, barcode support and module coverage are confirmed before they are committed in a proposal."
          />
          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 lg:grid-cols-3">
            {focusAreas.map((slug) => {
              const service = getService(slug)
              if (!service) return null
              return (
                <article
                  key={slug}
                  className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 sm:p-7 shadow-xs"
                >
                  <h3 className="font-display text-base sm:text-lg font-bold text-navy">{service.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">{service.summary}</p>
                  <ul className="mt-4 flex-1 space-y-2">
                    {service.capabilities.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-2 text-xs sm:text-sm text-ink">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-lime-dark" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <LinkButton
                    to={`/services/${service.slug}`}
                    variant="outlineDark"
                    className="mt-5 w-full py-2.5 text-xs sm:text-sm font-bold"
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

      <section className="bg-surface py-10 sm:py-16 lg:py-24" aria-labelledby="industry-suites-heading">
        <div className="container-page">
          <SectionHeading
            id="industry-suites-heading"
            eyebrow="Specialized Software Suites"
            title="Complete ERP Solutions Engineered for Your Sector"
            description="Proven, ready-to-deploy platforms tailored for educational institutions and retail businesses, complete with mobile apps and real-time analytics."
          />
          <div className="mt-8 sm:mt-12 grid gap-5 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* School ERP Card */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-canvas transition-all hover:-translate-y-1 hover:shadow-(--shadow-lift)">
              <div className="aspect-16/10 overflow-hidden border-b border-line">
                <img
                  src="/assets/products/school-erp-software.jpg"
                  alt="School ERP Software"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="self-start rounded-md bg-blue-soft px-3 py-1 text-xs font-bold text-blue">
                  Education ERP
                </span>
                <h3 className="mt-3 text-xl font-bold text-navy">School ERP Software</h3>
                <p className="mt-2 text-sm text-muted">
                  Streamlines academic, fee management, biometric attendance, examination, and parent WhatsApp/SMS communication in one platform.
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-ink">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Student & Admission Records
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Online Fee Payment & Dues Tracking
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Automated Timetable & Vehicle Tracking
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-line">
                  <LinkButton to="/portfolio/school-erp-software" variant="outlineDark" className="w-full py-2.5" arrow>
                    View School ERP
                  </LinkButton>
                </div>
              </div>
            </div>

            {/* Institute Management Card */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-canvas transition-all hover:-translate-y-1 hover:shadow-(--shadow-lift) active:scale-[0.98]">
              <div className="aspect-16/10 overflow-hidden border-b border-line">
                <img
                  src="/assets/products/institute-management-software.jpg"
                  alt="Institute Management Software"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-4.5 sm:p-6">
                <span className="self-start rounded-lg bg-blue-soft px-2.5 py-1 text-[11px] sm:text-xs font-bold text-blue">
                  Coaching & Colleges
                </span>
                <h3 className="mt-3 text-[18px] sm:text-xl font-bold text-navy font-heading">Institute Management Software</h3>
                <p className="mt-2 text-[13px] sm:text-sm text-muted leading-relaxed">
                  Smart solution for coaching centers, colleges, and academies to handle admissions, batches, test marks, and instant student certificates.
                </p>
                <ul className="mt-3.5 space-y-1.5 text-[12px] sm:text-xs text-ink">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Inquiry Capture & Lead Management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Course & Batch Scheduling
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    ID Card Printing & Certificate Issuance
                  </li>
                </ul>
                <div className="mt-5 pt-3.5 border-t border-line">
                  <LinkButton to="/portfolio/institute-management-software" variant="outlineDark" className="w-full py-2.5 min-h-[44px] justify-center" arrow>
                    View Institute Software
                  </LinkButton>
                </div>
              </div>
            </div>

            {/* Electronic Store ERP Card */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-canvas transition-all hover:-translate-y-1 hover:shadow-(--shadow-lift) active:scale-[0.98]">
              <div className="aspect-16/10 overflow-hidden border-b border-line">
                <img
                  src="/assets/products/electronic-store-erp-software.jpg"
                  alt="Electronic Store ERP Software"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-4.5 sm:p-6">
                <span className="self-start rounded-lg bg-blue-soft px-2.5 py-1 text-[11px] sm:text-xs font-bold text-blue">
                  Retail & Electronics
                </span>
                <h3 className="mt-3 text-[18px] sm:text-xl font-bold text-navy font-heading">Electronic Store ERP Software</h3>
                <p className="mt-2 text-[13px] sm:text-sm text-muted leading-relaxed">
                  Powerful retail ERP for electronics, mobiles, and appliances with IMEI/serial tracking, warranty claims, multi-branch stock, and GST POS.
                </p>
                <ul className="mt-3.5 space-y-1.5 text-[12px] sm:text-xs text-ink">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Barcode & Serial Number Inventory
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Rapid POS & Multi-Branch Accounting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Warranty Logs & Service Center Requests
                  </li>
                </ul>
                <div className="mt-5 pt-3.5 border-t border-line">
                  <LinkButton to="/portfolio/electronic-store-erp-software" variant="outlineDark" className="w-full py-2.5 min-h-[44px] justify-center" arrow>
                    View Store ERP
                  </LinkButton>
                </div>
              </div>
            </div>

            {/* Garment & Footwear ERP Card */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-canvas transition-all hover:-translate-y-1 hover:shadow-(--shadow-lift) active:scale-[0.98]">
              <div className="aspect-16/10 overflow-hidden border-b border-line">
                <img
                  src="/assets/products/garment-footwear-erp-software.jpg"
                  alt="Garment and Footwear ERP Software"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-4.5 sm:p-6">
                <span className="self-start rounded-lg bg-blue-soft px-2.5 py-1 text-[11px] sm:text-xs font-bold text-blue">
                  Apparel & Manufacturing
                </span>
                <h3 className="mt-3 text-[18px] sm:text-xl font-bold text-navy font-heading">Garment & Footwear ERP</h3>
                <p className="mt-2 text-[13px] sm:text-sm text-muted leading-relaxed">
                  End-to-end ERP for retailers, wholesalers, manufacturers, and distributors covering design-to-delivery, style/size/color BOM, and WhatsApp bills.
                </p>
                <ul className="mt-3.5 space-y-1.5 text-[12px] sm:text-xs text-ink">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Style, Size, Color & BOM Management
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Cutting, Stitching & Finishing Stages
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Mobile Field Sales & WhatsApp Invoicing
                  </li>
                </ul>
                <div className="mt-5 pt-3.5 border-t border-line">
                  <LinkButton to="/portfolio/garment-footwear-erp-software" variant="outlineDark" className="w-full py-2.5 min-h-[44px] justify-center" arrow>
                    View Garment ERP
                  </LinkButton>
                </div>
              </div>
            </div>

            {/* Business ERP-14 Accounting Card */}
            <div className="flex flex-col overflow-hidden rounded-2xl border border-line bg-canvas transition-all hover:-translate-y-1 hover:shadow-(--shadow-lift) active:scale-[0.98]">
              <div className="aspect-16/10 overflow-hidden border-b border-line">
                <img
                  src="/assets/products/business-erp14-accounting-software.jpg"
                  alt="Business ERP-14 Accounting Software"
                  className="h-full w-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-1 flex-col p-4.5 sm:p-6">
                <span className="self-start rounded-lg bg-blue-soft px-2.5 py-1 text-[11px] sm:text-xs font-bold text-blue">
                  Multi-Industry Accounting
                </span>
                <h3 className="mt-3 text-[18px] sm:text-xl font-bold text-navy font-heading">Business ERP-14 Accounting</h3>
                <p className="mt-2 text-[13px] sm:text-sm text-muted leading-relaxed">
                  Modern Touch POS billing, accurate financial ledgers, Excel bulk handling, and automated backup for retail, manufacturing, healthcare, and hospitality.
                </p>
                <ul className="mt-3.5 space-y-1.5 text-[12px] sm:text-xs text-ink">
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Rapid Touch POS Counter Billing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Online & Offline Hybrid Mode
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-blue" />
                    Excel Import/Export & Auto Cloud Backup
                  </li>
                </ul>
                <div className="mt-5 pt-3.5 border-t border-line">
                  <LinkButton to="/portfolio/business-erp14-accounting-software" variant="outlineDark" className="w-full py-2.5 min-h-[44px] justify-center" arrow>
                    View Business ERP-14
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-10 sm:py-16 lg:py-20" aria-labelledby="start-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <div>
            <h2 id="start-heading" className="text-[20px] font-extrabold text-white sm:text-3xl lg:text-4xl font-heading leading-tight">
              Starting from a spreadsheet is fine
            </h2>
            <p className="mt-3 sm:mt-5 text-[14px] sm:text-base text-white/75 leading-relaxed">
              Most engagements begin with the records you already keep. We map those columns and
              routines to screens and reports, so the move to a system does not ask your staff to
              relearn how their work is done.
            </p>
          </div>
          <dl className="grid gap-4 self-center sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4.5 sm:p-6">
              <dt className="text-[11px] sm:text-xs font-semibold tracking-wide text-white/60 uppercase">
                Speak with
              </dt>
              <dd className="mt-1.5 font-heading text-[16px] sm:text-lg font-bold text-white">
                {company.contact.person}, {company.contact.title}
              </dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4.5 sm:p-6">
              <dt className="text-[11px] sm:text-xs font-semibold tracking-wide text-white/60 uppercase">
                Next step
              </dt>
              <dd className="mt-1.5 text-[13px] sm:text-sm text-white/85 leading-relaxed">
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
