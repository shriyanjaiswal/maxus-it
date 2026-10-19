import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { ProjectThumb } from './artwork/ProjectThumb'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-200 hover:-translate-y-1 hover:shadow-(--shadow-lift) active:scale-[0.98]">
      <div className="aspect-16/10 overflow-hidden border-b border-line bg-canvas">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <ProjectThumb
            variant={project.artwork}
            className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-4.5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-lg bg-blue-soft px-2.5 py-1 text-[11px] sm:text-xs font-bold text-blue">
            {project.category}
          </span>
        </div>
        <h3 className="mt-3 text-[17px] sm:text-lg font-bold text-navy font-heading">{project.title}</h3>
        <p className="mt-2 flex-1 text-[13px] sm:text-sm text-muted leading-relaxed">{project.summary}</p>
        <Link
          to={`/portfolio/${project.slug}`}
          className="mt-4 inline-flex items-center gap-2 text-[14px] sm:text-sm font-bold text-blue min-h-[44px]"
        >
          View Project
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
