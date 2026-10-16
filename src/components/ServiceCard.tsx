import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Icon } from './Icon'
import type { Service } from '../data/services'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-(--radius-card) border border-line bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-blue/40 hover:shadow-(--shadow-lift) sm:p-7"
    >
      <span className="inline-flex size-12 items-center justify-center rounded-xl bg-blue-soft text-blue transition-colors group-hover:bg-navy group-hover:text-lime">
        <Icon name={service.icon} className="size-6" strokeWidth={1.7} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-navy">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm text-muted">{service.summary}</p>
      <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue">
        Learn More
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  )
}

export function ServiceGrid({ services, columns = 4 }: { services: Service[]; columns?: 3 | 4 }) {
  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 ${
        columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
      }`}
    >
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  )
}
