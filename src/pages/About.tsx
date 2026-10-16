import { Download, Handshake, Lightbulb, Target } from 'lucide-react'
import { company, locationsLabel } from '../data/company'
import { processSteps } from '../data/site'
import { ContactCTA } from '../components/ContactCTA'
import { DevFlag } from '../components/DevFlag'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/SectionHeading'

const brandDownloads = [
  {
    title: '4K Official Brand Logo',
    description:
      'Master full-color transparent lockup with 3D Earth Atom emblem and corporate typography.',
    preview: '/assets/brand/maxus-it-services-logo-transparent.png',
    fileName: 'MAXUS_IT_SERVICES_LOGO_4K_TRANSPARENT.png',
    format: 'PNG (Transparent)',
    dimensions: '4K Ultra HD',
    type: 'Full Lockup',
  },
  {
    title: '3D Glossy Earth Atom Emblem',
    description:
      'Official standalone symbol combining the global orbit, atom geometry and forward tech figure.',
    preview: '/assets/brand/glossy-earth-atom-emblem.png',
    fileName: 'Glossy_Earth_Atom_Emblem.png',
    format: 'PNG (Transparent)',
    dimensions: 'High-Res Symbol',
    type: 'Symbol Mark',
  },
  {
    title: 'Glossy Tech Icon & App Badge',
    description:
      'Rounded squircle application badge designed for digital services, app stores and mobile icons.',
    preview: '/assets/brand/glossy-maxus-it-tech-icon.png',
    fileName: 'Glossy_Maxus_IT_Tech_Icon.png',
    format: 'PNG (High-Res)',
    dimensions: 'Square App Icon',
    type: 'App Icon',
  },
]

const principles = [
  {
    Icon: Handshake,
    title: 'Customer First',
    body: 'Requirements are captured in plain business language before any technology choice is made.',
  },
  {
    Icon: Lightbulb,
    title: 'Practical Over Trendy',
    body: 'We scope what your operation needs today, and what it can realistically maintain next year.',
  },
  {
    Icon: Target,
    title: 'Accountable Delivery',
    body: 'Written scope, review points and a named contact through implementation and support.',
  },
]

export function About() {
  return (
    <>
      <Seo
        title={`About Us | ${company.name}`}
        description="MAXUS IT SERVICES PVT. LTD. delivers practical, scalable technology solutions with a customer-first approach. Learn about our vision, founders and working principles."
        path="/about"
      />

      <PageHero
        eyebrow="About Us"
        title="Practical technology, delivered with a customer-first approach"
        description={`${company.tagline} We listen to business requirements, understand challenges and work toward identifying suitable technology solutions.`}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="story-heading">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="story-heading"
              eyebrow="Our Story"
              title="Building business capability, one system at a time"
            />
            <div className="mt-6 space-y-5 text-muted">
              <p>
                MAXUS IT SERVICES PVT. LTD. works with businesses that need technology to remove
                friction rather than add it — a website that brings enquiries, software that matches
                the way the team already works, and records that stay consistent across billing,
                stock and sales.
              </p>
              <p>
                {company.approach} That usually means starting with the operational problem, agreeing
                a written scope, and delivering in stages so your staff can adapt without disrupting
                day-to-day work.
              </p>
              <p>
                {company.vision}
              </p>
            </div>
          </div>
          <dl className="grid gap-6 rounded-(--radius-card) border border-line bg-canvas p-8 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold tracking-wide text-muted uppercase">
                Established
              </dt>
              <dd className="mt-2 font-display text-lg font-bold text-navy">
                {company.established.label}
              </dd>
              <dd className="mt-1 text-sm text-muted">{company.established.note}</dd>
              {company.established.unverified && <DevFlag label="Verify before launch" />}
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-wide text-muted uppercase">
                Associated Locations
              </dt>
              <dd className="mt-2 font-display text-lg font-bold text-navy">{locationsLabel}</dd>
              {company.locations.some((l) => l.unverified) && (
                <div className="mt-2">
                  <DevFlag label="Confirm current locations" />
                </div>
              )}
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs font-semibold tracking-wide text-muted uppercase">
                Founded By
              </dt>
              <dd className="mt-2 space-y-1 font-display text-lg font-bold text-navy">
                {company.founders.map((founder) => (
                  <span key={founder.name} className="block">
                    {founder.name}
                    {founder.unverified && <span className="ml-2 align-middle"><DevFlag label="Verify name and role" /></span>}
                  </span>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-canvas py-16 lg:py-24" aria-labelledby="principles-heading">
        <div className="container-page">
          <SectionHeading
            id="principles-heading"
            eyebrow="Working Principles"
            title="How we approach every engagement"
          />
          <ul className="mt-12 grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <li
                key={item.title}
                className="rounded-(--radius-card) border border-line bg-surface p-7"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <item.Icon className="size-6" aria-hidden="true" strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-20" aria-labelledby="values-heading">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="rounded-(--radius-card) border border-line bg-canvas p-8">
            <h2 id="values-heading" className="text-xl font-bold text-navy">
              Vision
            </h2>
            <p className="mt-3 text-muted">{company.vision}</p>
          </div>
          <div className="rounded-(--radius-card) border border-line bg-canvas p-8">
            <h2 className="text-xl font-bold text-navy">Approach</h2>
            <p className="mt-3 text-muted">{company.approach}</p>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-16 lg:py-20" aria-labelledby="about-process-heading">
        <div className="container-page">
          <SectionHeading
            id="about-process-heading"
            eyebrow="Our Approach"
            title="Understand, plan, implement, support"
          />
          <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <li key={item.step} className="rounded-(--radius-card) border border-line bg-surface p-6">
                <span className="font-display text-2xl font-extrabold text-lime-dark">
                  {item.step}
                </span>
                <h3 className="mt-3 text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="brand-kit-heading">
        <div className="container-page">
          <SectionHeading
            id="brand-kit-heading"
            eyebrow="Official Brand Assets"
            title="Brand identity & downloadable media kit"
            description="Official visual assets for MAXUS IT SERVICES PVT. LTD. Authorized for partner communications, press materials, and client portals."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {brandDownloads.map((asset) => (
              <div
                key={asset.title}
                className="group flex flex-col overflow-hidden rounded-(--radius-card) border border-line bg-surface transition-all duration-200 hover:-translate-y-1 hover:shadow-(--shadow-lift)"
              >
                <div className="flex h-56 items-center justify-center border-b border-line bg-gradient-to-b from-[#0a1f33] to-[#071626] p-6">
                  <img
                    src={asset.preview}
                    alt={asset.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-md bg-blue-soft px-2.5 py-0.5 text-xs font-bold text-blue">
                      {asset.type}
                    </span>
                    <span className="text-xs font-medium text-muted">
                      {asset.dimensions}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-navy">{asset.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{asset.description}</p>
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-line/60 pt-4">
                    <span className="text-xs font-medium text-muted">{asset.format}</span>
                    <a
                      href={asset.preview}
                      download={asset.fileName}
                      className="inline-flex items-center gap-1.5 rounded-(--radius-btn) bg-navy px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-blue focus-visible:outline-none"
                    >
                      <Download className="size-3.5" aria-hidden="true" />
                      Download
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
