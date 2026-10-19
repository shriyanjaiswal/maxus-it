import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Icon } from './Icon'
import type { Service } from '../data/services'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link
      to={`/services/${service.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-blue/40 hover:shadow-(--shadow-lift) sm:p-7 active:scale-[0.98]"
    >
      <span className="inline-flex size-11 sm:size-12 items-center justify-center rounded-xl bg-blue-soft text-blue transition-colors group-hover:bg-navy group-hover:text-lime">
        <Icon name={service.icon} className="size-5 sm:size-6" strokeWidth={1.7} />
      </span>
      <h3 className="mt-4 font-heading text-[17px] sm:text-lg font-bold text-navy">{service.title}</h3>
      <p className="mt-2 flex-1 text-[13px] sm:text-sm text-muted leading-relaxed">{service.summary}</p>
      <span className="mt-4 inline-flex items-center gap-2 text-[13px] sm:text-sm font-bold text-blue">
        Learn More
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </Link>
  )
}

export function ServiceGrid({ services, columns = 4 }: { services: Service[]; columns?: 3 | 4 }) {
  return (
    <div
      className={`grid gap-3.5 sm:gap-6 sm:grid-cols-2 ${
        columns === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
      }`}
    >
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  )
}
