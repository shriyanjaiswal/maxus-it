import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

type Props = {
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
  crumbs?: { label: string; to?: string }[]
}

export function PageHero({ eyebrow, title, description, actions, crumbs }: Props) {
  return (
    <section className="relative overflow-hidden bg-navy py-14 lg:py-20" aria-labelledby="page-title">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_15%_0%,rgba(23,107,138,0.6),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container-page relative">
        {crumbs && <Breadcrumbs crumbs={crumbs} />}
        <p className="eyebrow mt-6 flex items-center gap-3 text-lime">
          <span className="h-px w-8 bg-lime" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 id="page-title" className="mt-4 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl">
          {title}
        </h1>
        {description && <p className="mt-5 max-w-2xl text-white/75">{description}</p>}
        {actions && <div className="mt-8 flex flex-wrap gap-4">{actions}</div>}
      </div>
    </section>
  )
}

export function Breadcrumbs({ crumbs }: { crumbs: { label: string; to?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-xs text-white/60">
        {crumbs.map((crumb, index) => (
          <li key={crumb.label} className="flex items-center gap-2">
            {crumb.to && index < crumbs.length - 1 ? (
              <Link to={crumb.to} className="transition-colors hover:text-lime">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-white/85">{crumb.label}</span>
            )}
            {index < crumbs.length - 1 && (
              <ChevronRight className="size-3.5" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
