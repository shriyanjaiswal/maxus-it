import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Project } from '../data/portfolio'
import { ProjectThumb } from './artwork/ProjectThumb'


export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-(--radius-card) border border-line bg-surface transition-all duration-200 hover:-translate-y-1 hover:shadow-(--shadow-lift)">
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
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-md bg-blue-soft px-3 py-1 text-xs font-bold text-blue">
            {project.category}
          </span>
        </div>
        <h3 className="mt-4 text-lg font-bold text-navy">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm text-muted">{project.summary}</p>
        <Link
          to={`/portfolio/${project.slug}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue"
        >
          View Project
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
