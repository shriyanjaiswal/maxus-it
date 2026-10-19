import { CheckCircle2, Search, Code2, ShieldCheck, Rocket, TrendingUp, Users } from 'lucide-react'
import { Seo } from '../components/Seo'
import { PageHero } from '../components/PageHero'
import { ContactCTA } from '../components/ContactCTA'

const processRoadmap = [
  {
    step: '01',
    name: 'Discovery & Requirements',
    short: 'Understanding your operation',
    icon: Search,
    description:
      'We begin with a deep dive into your business operations, challenges, data workflows, user roles, and commercial objectives. No assumptions — only clear facts.',
    deliverables: ['Operational gap analysis', 'Requirements inventory', 'Technical feasibility study'],
  },
  {
    step: '02',
    name: 'Strategy & Architecture',
    short: 'The technical blueprint',
    icon: ShieldCheck,
    description:
      'Our architects define the database schema, user journeys, technology stack, security policies, and third-party API integrations (GST, SMS, payments).',
    deliverables: ['System architecture diagram', 'Scope of work & milestones', 'Commercial estimate'],
  },
  {
    step: '03',
    name: 'UI/UX & Interactive Design',
    short: 'Built for human speed',
    icon: Users,
    description:
      'We craft clean, intuitive interfaces and clickable prototypes designed for everyday operators, minimizing clicks and eliminating training friction.',
    deliverables: ['Wireframes & user flows', 'Figma prototypes', 'Approved UI components'],
  },
  {
    step: '04',
    name: 'Engineering & Development',
    short: 'Clean, scalable code',
    icon: Code2,
    description:
      'Our senior engineers build your software following strict coding standards, automated tests, modular architecture, and secure role-based access controls.',
    deliverables: ['Staging environment builds', 'Weekly milestone demos', 'API & database code'],
  },
  {
    step: '05',
    name: 'Quality Assurance & Testing',
    short: 'Zero tolerance for bugs',
    icon: CheckCircle2,
    description:
      'Comprehensive testing across browsers, screen sizes, offline fallback scenarios, stress loads, and security edge cases before any real deployment.',
    deliverables: ['Cross-device QA signoff', 'Data migration dry-run', 'Security vulnerability audit'],
  },
  {
    step: '06',
    name: 'Deployment & Staff Onboarding',
    short: 'Smooth transition to live',
    icon: Rocket,
    description:
      'We deploy to production cloud servers, migrate existing legacy records, configure backups, and train your staff until everyone is confident using the system.',
    deliverables: ['Cloud production launch', 'Operator training sessions', 'Admin handover manual'],
  },
  {
    step: '07',
    name: 'Growth, AMC & Support',
    short: 'Long-term partnership',
    icon: TrendingUp,
    description:
      'Software is living infrastructure. We provide continuous support, performance tuning, GST compliance updates, and feature expansions as your business grows.',
    deliverables: ['Fast SLA response times', 'Monthly health checks', 'Ongoing feature upgrades'],
  },
]

export function Process() {
  return (
    <>
      <Seo
        title="Our 7-Step Software Development Process | MAXUS IT SERVICES"
        description="Learn how MAXUS IT SERVICES takes your business software from initial discovery and UI design to engineering, QA testing, launch, and long-term support."
        path="/process"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Process', path: '/process' },
        ]}
        keywords="software development process, agile engineering lifecycle, ERP implementation steps, custom software roadmap, IT consulting workflow"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: '7-Step Enterprise Software Development Process',
          description:
            'A structured, transparent engineering lifecycle from discovery and UI design to engineering, quality testing, and cloud deployment by MAXUS IT SERVICES.',
          step: processRoadmap.map((item, idx) => ({
            '@type': 'HowToStep',
            position: idx + 1,
            name: item.name,
            text: item.description,
          })),
        }}
      />

      <PageHero
        eyebrow="Our Methodology"
        title={
          <>
            A proven 7-step process for <span className="text-lime">predictable success</span>
          </>
        }
        description="No guesswork, no missed deadlines. We follow a structured, transparent engineering lifecycle from the first discovery meeting to post-launch growth."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Process' }]}
      />

      {/* Process Roadmap List */}
      <section className="bg-canvas py-10 sm:py-16 lg:py-24" aria-labelledby="roadmap-heading">
        <div className="container-page max-w-5xl">
          <div className="text-center mb-8 sm:mb-14">
            <h2 id="roadmap-heading" className="text-[20px] lg:text-3xl xl:text-4xl font-extrabold text-navy font-heading">
              From Concept to Operational Excellence
            </h2>
            <p className="mt-3 text-muted text-[15px] sm:text-base max-w-2xl mx-auto leading-relaxed">
              Each step is documented, transparent, and requires your explicit approval before moving
              to the next phase.
            </p>
          </div>

          <div className="relative border-l-2 border-line/80 ml-3.5 sm:ml-8 md:ml-12 pl-5 sm:pl-10 space-y-6 sm:space-y-10">
            {processRoadmap.map((item) => {
              const IconComp = item.icon
              return (
                <div key={item.step} className="relative group">
                  {/* Step Marker */}
                  <div className="absolute left-0 -translate-x-[calc(50%+1px)] top-3 sm:top-4 flex size-7 sm:size-10 items-center justify-center rounded-full bg-surface border-2 border-blue text-[11px] sm:text-sm font-black text-blue shadow-sm group-hover:bg-blue group-hover:text-white transition-colors">
                    {item.step}
                  </div>

                  <div className="rounded-2xl border border-line bg-surface p-4.5 sm:p-7 hover:shadow-md transition-shadow">
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3">
                      <div className="flex items-center gap-2.5 sm:gap-3">
                        <div className="p-1.5 sm:p-2 rounded-xl bg-blue/10 text-blue shrink-0">
                          <IconComp className="size-4.5 sm:size-5" />
                        </div>
                        <h3 className="text-[17px] sm:text-xl lg:text-2xl font-bold text-navy font-heading">{item.name}</h3>
                      </div>
                      <span className="text-[11px] font-semibold text-lime-dark bg-lime-dark/10 px-2.5 py-1 rounded-full uppercase tracking-wider">
                        {item.short}
                      </span>
                    </div>

                    <p className="text-[14px] sm:text-base text-muted leading-relaxed mt-2.5">
                      {item.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-line/60">
                      <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-navy mb-2.5">
                        Key Deliverables:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.deliverables.map((del) => (
                          <span
                            key={del}
                            className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink bg-canvas-subtle border border-line px-2.5 py-1 rounded-lg"
                          >
                            <CheckCircle2 className="size-3.5 text-lime-dark shrink-0" />
                            {del}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Structured Process Matters */}
      <section className="bg-surface py-10 sm:py-16 lg:py-20 border-y border-line" aria-label="Why process matters">
        <div className="container-page grid gap-4 sm:gap-6 lg:grid-cols-3">
          <div className="p-4.5 sm:p-6 rounded-2xl border border-line bg-canvas">
            <h3 className="text-[16px] sm:text-lg font-bold text-navy font-heading">Predictable Budgets & Timelines</h3>
            <p className="mt-2 text-[13px] sm:text-sm text-muted leading-relaxed">
              Detailed scoping before writing a single line of code means no scope creep and no surprise bills at the finish line.
            </p>
          </div>
          <div className="p-4.5 sm:p-6 rounded-2xl border border-line bg-canvas">
            <h3 className="text-[16px] sm:text-lg font-bold text-navy font-heading">Zero Downtime Migration</h3>
            <p className="mt-2 text-[13px] sm:text-sm text-muted leading-relaxed">
              We run parallel dry-runs and staging simulations so switching from your old accounting or spreadsheet system to your new software is seamless.
            </p>
          </div>
          <div className="p-4.5 sm:p-6 rounded-2xl border border-line bg-canvas">
            <h3 className="text-[16px] sm:text-lg font-bold text-navy font-heading">Direct Access to Engineers</h3>
            <p className="mt-2 text-[13px] sm:text-sm text-muted leading-relaxed">
              No endless middle managers. You collaborate directly with tech leads and developers who understand the business context.
            </p>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
