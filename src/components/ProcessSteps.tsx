import { processSteps } from '../data/site'
import { SectionHeading } from './SectionHeading'

export function ProcessSteps({ tone = 'light' }: { tone?: 'light' | 'muted' }) {
  return (
    <section
      className={`py-10 sm:py-16 lg:py-20 ${tone === 'muted' ? 'bg-canvas' : 'bg-surface'}`}
      aria-labelledby="process-heading"
    >
      <div className="container-page">
        <SectionHeading eyebrow="Our Approach" title="A Simple and Effective Process" />
        <ol className="mt-8 sm:mt-12 grid gap-3.5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((item, index) => (
            <li
              key={item.step}
              className="relative rounded-2xl border border-line/70 bg-surface p-4 sm:border-0 sm:bg-transparent sm:p-0"
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span
                  className={`inline-flex size-9 sm:size-12 shrink-0 items-center justify-center rounded-xl sm:rounded-full font-display text-sm sm:text-base font-extrabold ${
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
              <h3 className="mt-3 sm:mt-5 text-[17px] sm:text-lg font-bold text-navy font-heading">{item.title}</h3>
              <p className="mt-1.5 sm:mt-2 text-[13px] sm:text-sm text-muted leading-relaxed">{item.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
