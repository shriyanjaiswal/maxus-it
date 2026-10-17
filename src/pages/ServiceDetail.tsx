import { Link, useParams } from 'react-router-dom'
import { Check, CheckCircle2 } from 'lucide-react'
import { company } from '../data/company'
import { getService, services } from '../data/services'
import { ContactCTA } from '../components/ContactCTA'
import { Icon } from '../components/Icon'

import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { ServiceGrid } from '../components/ServiceCard'
import { NotFound } from './NotFound'

export function ServiceDetail() {
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <NotFound />

  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3)

  return (
    <>
      <Seo
        title={`${service.title} | ${company.name}`}
        description={service.summary}
        path={`/services/${service.slug}`}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: service.title,
          description: service.summary,
          serviceType: service.title,
          provider: { '@type': 'Organization', name: company.name },
        }}
      />

      <PageHero
        eyebrow="Service"
        title={service.title}
        description={service.intro}
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.title },
        ]}
        actions={
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-(--radius-btn) bg-lime px-6 py-3.5 font-display text-sm font-bold text-navy transition-colors hover:bg-lime-dark"
          >
            Discuss Your Project
          </Link>
        }
      />

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="capabilities-heading">
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-4">
              <span className="inline-flex size-12 items-center justify-center rounded-xl bg-blue-soft text-blue">
                <Icon name={service.icon} className="size-6" strokeWidth={1.7} />
              </span>
              <h2 id="capabilities-heading" className="text-2xl font-extrabold text-navy sm:text-3xl">
                What this covers
              </h2>
            </div>
            <ul className="mt-8 space-y-4">
              {service.capabilities.map((item) => (
                <li key={item} className="flex gap-3 rounded-(--radius-card) border border-line bg-canvas p-5">
                  <Check className="mt-0.5 size-5 shrink-0 text-lime-dark" aria-hidden="true" strokeWidth={2.4} />
                  <span className="text-sm text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-14 text-2xl font-extrabold text-navy">Typical deliverables</h2>
            <ul className="mt-6 space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-8">
            <div className="rounded-(--radius-card) border border-line bg-canvas p-7">
              <h2 className="text-lg font-bold text-navy">Well suited to</h2>
              <ul className="mt-4 space-y-3">
                {service.fitFor.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-ink">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-lime-dark" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-(--radius-card) border border-line bg-surface p-7 shadow-(--shadow-card)">
              <h2 className="flex items-center gap-2 text-lg font-bold text-navy">
                <CheckCircle2 className="size-5 text-blue" aria-hidden="true" />
                Key Capabilities & Scope
              </h2>
              <ul className="mt-4 space-y-2.5 text-sm text-muted">
                {service.pending.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-lime-dark" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-line/60 pt-4 text-xs text-muted">
                Turnkey implementation with custom workflows, source ownership, and dedicated technical support.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-canvas py-16 lg:py-20" aria-labelledby="faq-heading">
        <div className="container-page max-w-3xl">
          <h2 id="faq-heading" className="text-2xl font-extrabold text-navy sm:text-3xl">
            Common questions
          </h2>
          <div className="mt-8 space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-(--radius-card) border border-line bg-surface p-6 open:shadow-(--shadow-card)"
              >
                <summary className="cursor-pointer list-none font-display text-base font-bold text-navy marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm text-muted">{faq.answer}</p>
              </details>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="related-heading">
        <div className="container-page">
          <h2 id="related-heading" className="text-2xl font-extrabold text-navy sm:text-3xl">
            Related services
          </h2>
          <div className="mt-10">
            <ServiceGrid services={related} columns={3} />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
