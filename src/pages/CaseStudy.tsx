import { Link, useParams } from 'react-router-dom'
import { getProject, projects, visibleProjects } from '../data/portfolio'
import { getService } from '../data/services'
import { ContactCTA } from '../components/ContactCTA'
import { Breadcrumbs } from '../components/PageHero'
import { ProjectThumb } from '../components/artwork/ProjectThumb'
import { Seo } from '../components/Seo'
import { NotFound } from './NotFound'

export function CaseStudy() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <NotFound />

  const visible = visibleProjects()
  if (!visible.some((item) => item.slug === project.slug)) return <NotFound />

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3)

  return (
    <>
      <Seo
        title={`${project.title} | Software Solutions India | MAXUS IT SERVICES`}
        description={`${project.summary} Engineered by Maxus IT Services for businesses across India.`}
        path={`/portfolio/${project.slug}`}
        keywords={`${project.title}, ${project.category}, ERP software India, business software solutions India, Maxus IT Services`}
        ogImage={project.image || '/assets/products/smart-it-solutions-banner.jpg'}
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'SoftwareApplication',
              name: project.title,
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Windows, Web, Android, iOS',
              description: project.summary,
              provider: {
                '@type': 'Organization',
                name: 'MAXUS IT SERVICES PVT. LTD.',
                telephone: '+91-9559335909',
              },
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'INR',
                availability: 'https://schema.org/InStock',
                description: 'Custom implementation and live demonstration upon enquiry across India',
              },
            },
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
                  name: 'Portfolio',
                  item: 'https://www.maxusitservices.com/portfolio',
                },
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: project.title,
                  item: `https://www.maxusitservices.com/portfolio/${project.slug}`,
                },
              ],
            },
          ],
        }}
      />

      <section className="bg-navy py-8 sm:py-12 lg:py-16" aria-labelledby="case-title">
        <div className="container-page">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', to: '/' },
              { label: 'Portfolio', to: '/portfolio' },
              { label: project.title },
            ]}
          />
          <div className="mt-6 sm:mt-8 grid gap-6 sm:gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <p className="eyebrow text-lime text-[11px] sm:text-xs font-bold uppercase tracking-wider">{project.category}</p>
              <h1
                id="case-title"
                className="mt-2 sm:mt-4 text-[22px] font-extrabold text-white sm:text-3xl lg:text-4xl font-heading leading-tight"
              >
                {project.title}
              </h1>
              <p className="mt-2.5 sm:mt-5 text-[14px] sm:text-base text-white/75 leading-relaxed">{project.summary}</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-md">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              ) : (
                <ProjectThumb variant={project.artwork} />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-10 sm:py-16 lg:py-24" aria-labelledby="challenge-heading">
        <div className="container-page grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="challenge-heading" className="text-[18px] sm:text-2xl font-extrabold text-navy font-heading">
              The requirement
            </h2>
            <p className="mt-2.5 sm:mt-4 text-[14px] sm:text-base text-muted leading-relaxed">{project.challenge}</p>
            <h2 className="mt-6 sm:mt-10 text-[18px] sm:text-2xl font-extrabold text-navy font-heading">
              Our approach
            </h2>
            <ol className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
              {project.approach.map((step, index) => (
                <li key={step} className="flex gap-3 sm:gap-4 text-[13px] sm:text-sm text-muted">
                  <span className="inline-flex size-6 sm:size-7 shrink-0 items-center justify-center rounded-full bg-blue-soft font-display text-xs font-bold text-blue">
                    {index + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-[18px] sm:text-2xl font-extrabold text-navy font-heading">The solution</h2>
            <p className="mt-2.5 sm:mt-4 text-[14px] sm:text-base text-muted leading-relaxed">{project.solution}</p>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <>
                <h2 className="mt-6 sm:mt-10 text-[18px] sm:text-2xl font-extrabold text-navy font-heading">
                  Key software features
                </h2>
                <ul className="mt-3 sm:mt-4 grid gap-2 sm:gap-2.5 sm:grid-cols-2">
                  {project.keyFeatures.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2 rounded-xl border border-line bg-canvas p-2.5 sm:p-3 text-[12px] sm:text-xs font-medium text-ink"
                    >
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-blue" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="mt-6 sm:mt-10 font-heading text-[16px] sm:text-lg font-bold text-navy">Services delivered</h2>
            <ul className="mt-3 sm:mt-4 flex flex-wrap gap-2 sm:gap-3">
              {project.services.map((serviceSlug) => {
                const service = getService(serviceSlug)
                if (!service) return null
                return (
                  <li key={serviceSlug}>
                    <Link
                      to={`/services/${serviceSlug}`}
                      className="inline-block rounded-full border border-line px-3 py-1.5 sm:px-4 sm:py-2 text-[12px] sm:text-sm font-semibold text-navy transition-colors hover:border-blue hover:text-blue active:scale-95"
                    >
                      {service.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-surface py-10 sm:py-16 lg:py-24" aria-labelledby="related-projects-heading">
        <div className="container-page">
          <h2 id="related-projects-heading" className="text-[18px] sm:text-2xl font-extrabold text-navy font-heading">
            More work
          </h2>
          <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/portfolio/${item.slug}`}
                className="group rounded-2xl border border-line bg-surface p-5 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-(--shadow-lift) active:scale-[0.98]"
              >
                <p className="text-[11px] sm:text-xs font-bold tracking-wide text-blue uppercase">
                  {item.category}
                </p>
                <h3 className="mt-2 font-display text-sm sm:text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-1.5 text-xs sm:text-sm text-muted leading-relaxed">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
