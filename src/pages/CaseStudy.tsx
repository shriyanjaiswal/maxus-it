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
        title={`${project.title} | ${project.category} | MAXUS IT SERVICES`}
        description={project.summary}
        path={`/portfolio/${project.slug}`}
      />

      <section className="bg-navy py-12 lg:py-16" aria-labelledby="case-title">
        <div className="container-page">
          <Breadcrumbs
            crumbs={[
              { label: 'Home', to: '/' },
              { label: 'Portfolio', to: '/portfolio' },
              { label: project.title },
            ]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            <div>
              <p className="eyebrow text-lime">{project.category}</p>
              <h1
                id="case-title"
                className="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl"
              >
                {project.title}
              </h1>
              <p className="mt-5 text-white/75">{project.summary}</p>

            </div>
            <div className="overflow-hidden rounded-(--radius-card) border border-white/10 bg-surface">
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

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="challenge-heading">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="challenge-heading" className="text-2xl font-extrabold text-navy sm:text-3xl">
              The requirement
            </h2>
            <p className="mt-5 text-muted">{project.challenge}</p>
            <h2 className="mt-12 text-2xl font-extrabold text-navy sm:text-3xl">
              Our approach
            </h2>
            <ol className="mt-5 space-y-3">
              {project.approach.map((step, index) => (
                <li key={step} className="flex gap-4 text-sm text-muted">
                  <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-blue-soft font-display text-xs font-bold text-blue">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-navy sm:text-3xl">The solution</h2>
            <p className="mt-5 text-muted">{project.solution}</p>

            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <>
                <h2 className="mt-12 text-2xl font-extrabold text-navy sm:text-3xl">
                  Key software features
                </h2>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {project.keyFeatures.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-2.5 rounded-xl border border-line bg-canvas p-3 text-xs font-medium text-ink"
                    >
                      <span className="mt-1 size-1.5 shrink-0 rounded-full bg-blue" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <h2 className="mt-12 text-lg font-bold text-navy">Services delivered</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {project.services.map((serviceSlug) => {
                const service = getService(serviceSlug)
                if (!service) return null
                return (
                  <li key={serviceSlug}>
                    <Link
                      to={`/services/${serviceSlug}`}
                      className="inline-block rounded-full border border-line px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
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



      <section className="bg-surface py-16 lg:py-24" aria-labelledby="related-projects-heading">
        <div className="container-page">
          <h2 id="related-projects-heading" className="text-2xl font-extrabold text-navy sm:text-3xl">
            More work
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                to={`/portfolio/${item.slug}`}
                className="group rounded-(--radius-card) border border-line bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-(--shadow-lift)"
              >
                <p className="text-xs font-bold tracking-wide text-blue uppercase">
                  {item.category}
                </p>
                <h3 className="mt-3 text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm text-muted">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
