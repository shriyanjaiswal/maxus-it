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
        title={`${service.title} in India | ${company.name}`}
        description={`${service.summary} Delivered across India with dedicated onboarding, customization, and 24/7 technical support.`}
        path={`/services/${service.slug}`}
        keywords={`${service.title} India, ${service.cardTitle}, IT software solutions India, enterprise business software, Maxus IT Services`}
        ogImage={service.ogImage || '/assets/products/smart-it-solutions-banner.jpg'}
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: `${service.title} in India`,
              description: service.summary,
              serviceType: service.title,
              provider: {
                '@type': 'Organization',
                name: company.name,
                telephone: company.contact.phoneDial,
                email: company.contact.email,
              },
              areaServed: {
                '@type': 'Country',
                name: 'India',
              },
            },
            ...(service.faqs && service.faqs.length > 0
              ? [
                  {
                    '@type': 'FAQPage',
                    mainEntity: service.faqs.map((faq) => ({
                      '@type': 'Question',
                      name: faq.question,
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: faq.answer,
                      },
                    })),
                  },
                ]
              : []),
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: 'https://www.maxusitservices.com/',
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Services',
                  item: 'https://www.maxusitservices.com/services',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: service.title,
                  item: `https://www.maxusitservices.com/services/${service.slug}`,
                },
              ],
            },
          ],
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

      <section className="bg-surface py-10 sm:py-16 lg:py-24" aria-labelledby="capabilities-heading">
        <div className="container-page grid gap-8 sm:gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="inline-flex size-11 sm:size-12 items-center justify-center rounded-xl bg-blue-soft text-blue">
                <Icon name={service.icon} className="size-5 sm:size-6" strokeWidth={1.7} />
              </span>
              <h2 id="capabilities-heading" className="text-[18px] sm:text-2xl font-extrabold text-navy sm:text-3xl font-heading">
                What this covers
              </h2>
            </div>
            <ul className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
              {service.capabilities.map((item) => (
                <li key={item} className="flex gap-3 rounded-2xl border border-line bg-canvas p-4 sm:p-5">
                  <Check className="mt-0.5 size-4.5 sm:size-5 shrink-0 text-lime-dark" aria-hidden="true" strokeWidth={2.4} />
                  <span className="text-[13px] sm:text-sm text-ink">{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 sm:mt-12 text-[18px] sm:text-2xl font-extrabold text-navy font-heading">Typical deliverables</h2>
            <ul className="mt-3.5 sm:mt-5 space-y-2 sm:space-y-3">
              {service.deliverables.map((item) => (
                <li key={item} className="flex gap-3 text-[13px] sm:text-sm text-muted">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-blue" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-5 sm:space-y-8">
            <div className="rounded-2xl border border-line bg-canvas p-4.5 sm:p-7">
              <h2 className="font-heading text-[16px] sm:text-lg font-bold text-navy">Well suited to</h2>
              <ul className="mt-3 space-y-2 sm:space-y-3">
                {service.fitFor.map((item) => (
                  <li key={item} className="flex gap-2.5 sm:gap-3 text-[13px] sm:text-sm text-ink">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-lime-dark" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-line bg-surface p-4.5 sm:p-7 shadow-(--shadow-card)">
              <h2 className="flex items-center gap-2 font-heading text-[16px] sm:text-lg font-bold text-navy">
                <CheckCircle2 className="size-4.5 sm:size-5 text-blue" aria-hidden="true" />
                Key Capabilities &amp; Scope
              </h2>
              <ul className="mt-3 space-y-2 text-[12px] sm:text-sm text-muted">
                {service.pending.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 size-1.5 shrink-0 rounded-full bg-lime-dark" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 sm:mt-5 border-t border-line/60 pt-3 text-[11px] sm:text-xs text-muted leading-relaxed">
                Turnkey implementation with custom workflows, source ownership, and dedicated technical support.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-canvas py-10 sm:py-16 lg:py-20" aria-labelledby="faq-heading">
        <div className="container-page max-w-3xl">
          <h2 id="faq-heading" className="text-[18px] sm:text-2xl font-extrabold text-navy sm:text-3xl font-heading">
            Common questions
          </h2>
          <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
            {service.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-line bg-surface p-4 sm:p-6 open:shadow-xs"
              >
                <summary className="cursor-pointer list-none font-heading text-[15px] sm:text-base font-bold text-navy marker:hidden">
                  {faq.question}
                </summary>
                <p className="mt-2.5 text-[13px] sm:text-sm text-muted leading-relaxed border-t border-line/60 pt-2.5">{faq.answer}</p>
              </details>
            ))}
          </div>

        </div>
      </section>

      <section className="bg-surface py-10 sm:py-16 lg:py-24" aria-labelledby="related-heading">
        <div className="container-page">
          <h2 id="related-heading" className="text-[18px] sm:text-2xl font-extrabold text-navy sm:text-3xl font-heading">
            Related services
          </h2>
          <div className="mt-6 sm:mt-10">
            <ServiceGrid services={related} columns={3} />
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
