import { processSteps } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function ProcessSteps({ tone = 'light' }: { tone?: 'light' | 'muted' }) {
  return (
    <section
      className={`py-16 lg:py-20 ${tone === 'muted' ? 'bg-canvas' : 'bg-surface'}`}
      aria-labelledby="process-heading"
    >
      <div className="container-page">
        <SectionHeading eyebrow="Our Approach" title="A Simple and Effective Process" />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {processSteps.map((item, index) => (
            <li key={item.step} className="relative">
              <div className="flex items-center gap-4">
                <span
                  className={`inline-flex size-12 shrink-0 items-center justify-center rounded-full font-display text-base font-extrabold ${
                    index === 1 ? 'bg-lime text-navy' : 'bg-blue-soft text-blue'
                  }`}
                >
                  {item.step}
                </span>
                {index < processSteps.length - 1 && (
                  <span
                    className="hidden h-px flex-1 bg-line lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-muted">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
