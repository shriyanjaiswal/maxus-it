import { useMemo, useState } from 'react'
import { company } from '../data/company'
import { visibleProjects } from '../data/portfolio'
import { ContactCTA } from '../components/ContactCTA'
import { DevNotice } from '../components/DevFlag'
import { PageHero } from '../components/PageHero'
import { ProjectCard } from '../components/ProjectCard'
import { Seo } from '../components/Seo'

export function Portfolio() {
  const projects = visibleProjects()
  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects],
  )
  const [active, setActive] = useState('All')

  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <>
      <Seo
        title="Portfolio | MAXUS IT SERVICES"
        description="Selected projects delivered by MAXUS IT SERVICES PVT. LTD. across websites, business systems and mobile applications."
        path="/portfolio"
      />

      <PageHero
        eyebrow="Our Portfolio"
        title="Work that solved an operational problem"
        description="Explore selected projects delivered by MAXUS IT SERVICES PVT. LTD. Each case study covers the requirement, the delivered approach and the outcome where the client has approved publication."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }]}
      />

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="projects-heading">
        <div className="container-page">
          <h2 id="projects-heading" className="sr-only">
            Projects
          </h2>

          {projects.length > 0 && (
            <div
              role="group"
              aria-label="Filter projects by category"
              className="flex flex-wrap gap-3"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active === category}
                  onClick={() => setActive(category)}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition-colors ${
                    active === category
                      ? 'border-navy bg-navy text-white'
                      : 'border-line bg-surface text-navy hover:border-blue hover:text-blue'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          <div className="mt-4">
            <DevNotice>
              The records below are layout samples taken from the approved design mockups. They are
              not delivered client projects and are excluded from production builds until
              <code className="mx-1 rounded bg-white/70 px-1.5 py-0.5 text-xs">
                publicationApproved
              </code>
              is set in src/data/portfolio.ts. Replace them with approved case studies before
              launch. Contact {company.contact.person} to confirm permissions.
            </DevNotice>
          </div>

          {shown.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {shown.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="mt-10 rounded-(--radius-card) border border-dashed border-line bg-canvas p-12 text-center text-muted">
              No approved projects to show yet. Case studies appear here once clients confirm
              publication permission.
            </p>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
