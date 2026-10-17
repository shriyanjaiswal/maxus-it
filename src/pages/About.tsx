import { Handshake, Lightbulb, Target } from 'lucide-react'
import { company, locationsLabel } from '../data/company'
import { processSteps } from '../data/site'
import { ContactCTA } from '../components/ContactCTA'

import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/SectionHeading'

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
        title="About Us | Established IT & ERP Software Company India | MAXUS IT SERVICES"
        description="MAXUS IT SERVICES PVT. LTD. has delivered practical, scalable technology and enterprise ERP solutions since 2011 with a customer-first approach across India."
        path="/about"
        keywords="about Maxus IT Services, IT company Mumbai Varanasi, software company since 2011, ERP providers India, Ram Jaiswal Maxus IT"
        ogImage="/assets/products/smart-it-solutions-banner.jpg"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About Maxus IT Services Pvt Ltd',
          description: 'Corporate history, vision, executive leadership, and customer-first approach of Maxus IT Services.',
          mainEntity: {
            '@type': 'Organization',
            name: company.name,
            foundingDate: '2011-06',
            slogan: company.slogan,
            url: 'https://www.maxusitservices.com',
          },
        }}
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
                Incorporation &amp; Heritage
              </dt>
              <dd className="mt-2 font-display text-lg font-bold text-navy">
                {company.established.label}
              </dd>
              <dd className="mt-1 text-sm text-muted">{company.established.note}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-wide text-muted uppercase">
                Operating Offices &amp; Regional Presence
              </dt>
              <dd className="mt-2 font-display text-lg font-bold text-navy">{locationsLabel}</dd>
              <dd className="mt-1 text-sm text-muted">Dual regional delivery centers across India</dd>
            </div>
            <div className="sm:col-span-2 pt-4 border-t border-line/60">
              <dt className="text-xs font-semibold tracking-wide text-muted uppercase">
                Executive Leadership &amp; Board of Directors
              </dt>
              <dd className="mt-3 grid gap-3 sm:grid-cols-2 font-display text-base font-bold text-navy">
                {company.founders.map((founder) => (
                  <div key={founder.name} className="flex items-center gap-2.5 rounded-lg border border-line/70 bg-surface px-4 py-2.5">
                    <span className="size-2 rounded-full bg-blue" />
                    <span>{founder.name}</span>
                  </div>
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

      <ContactCTA />
    </>
  )
}
