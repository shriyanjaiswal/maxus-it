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
    <section className="relative overflow-hidden bg-navy py-8 sm:py-12 lg:py-20" aria-labelledby="page-title">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_15%_0%,rgba(23,107,138,0.6),transparent_60%)]"
        aria-hidden="true"
      />
      <div className="container-page relative">
        {crumbs && <Breadcrumbs crumbs={crumbs} />}
        <p className="eyebrow mt-2.5 sm:mt-6 flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-lime">
          <span className="h-px w-6 sm:w-8 bg-lime" aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 id="page-title" className="mt-2.5 sm:mt-4 max-w-3xl text-[22px] font-extrabold text-white sm:text-4xl lg:text-5xl font-heading leading-tight tracking-tight">
          {title}
        </h1>
        {description && <p className="mt-2.5 sm:mt-5 max-w-2xl text-[14px] sm:text-base text-white/75 leading-relaxed">{description}</p>}
        {actions && <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">{actions}</div>}
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
