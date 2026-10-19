import { useMemo, useState } from 'react'
import { visibleProjects } from '../data/portfolio'
import { ContactCTA } from '../components/ContactCTA'
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
        title="Delivered Enterprise Software & Case Studies India | MAXUS IT SERVICES"
        description="Review enterprise software implementations, retail POS deployments, Garment ERP platforms, and cloud web architectures delivered across India by Maxus IT Services."
        path="/portfolio"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
        ]}
        keywords="ERP case studies India, garment software demo, retail POS implementations, school ERP case study, IT projects portfolio India, custom software portfolio"
        ogImage="/assets/products/smart-it-solutions-banner.jpg"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CollectionPage',
              name: 'Maxus IT Services Portfolio & Delivered Projects',
              description: 'Production software systems, ERP suites, and digital platforms delivered for businesses in India.',
              url: 'https://www.maxusitservices.com/portfolio',
            },
            {
              '@type': 'ItemList',
              name: 'Delivered Enterprise Software Solutions',
              itemListElement: projects.map((p, idx) => ({
                '@type': 'ListItem',
                position: idx + 1,
                name: p.title,
                url: `https://www.maxusitservices.com/portfolio/${p.slug}`,
              })),
            },
          ],
        }}
      />

      <PageHero
        eyebrow="Our Portfolio"
        title="Work that solved an operational problem"
        description="Explore featured technology projects delivered by MAXUS IT SERVICES PVT. LTD., covering enterprise web platforms, custom ERP systems, and mobile applications."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Portfolio' }]}
      />

      <section className="bg-surface py-10 sm:py-16 lg:py-24" aria-labelledby="projects-heading">
        <div className="container-page">
          <h2 id="projects-heading" className="sr-only">
            Projects
          </h2>

          {projects.length > 0 && (
            <div
              role="group"
              aria-label="Filter projects by category"
              className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  aria-pressed={active === category}
                  onClick={() => setActive(category)}
                  className={`rounded-full border px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm font-semibold whitespace-nowrap transition-all active:scale-95 ${
                    active === category
                      ? 'border-navy bg-navy text-white shadow-xs'
                      : 'border-line bg-surface text-navy hover:border-blue hover:text-blue'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          )}

          {shown.length > 0 ? (
            <div className="mt-6 sm:mt-10 grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
              {shown.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          ) : (
            <p className="mt-8 sm:mt-10 rounded-2xl border border-dashed border-line bg-canvas p-8 sm:p-12 text-center text-xs sm:text-sm text-muted">
              No projects found in this category. Check back soon or contact us to discuss your custom project.
            </p>
          )}
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
