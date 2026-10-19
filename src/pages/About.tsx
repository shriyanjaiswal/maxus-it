import { Handshake, Lightbulb, Target } from 'lucide-react'
import { company, locationsLabel } from '../data/company'
import { processSteps } from '../data/site'
import { ContactCTA } from '../components/ContactCTA'

import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { SectionHeading } from '../components/SectionHeading'

const principles = [
  {
    Icon: Handshake,
    title: 'Customer First',
    body: 'Requirements are captured in plain business language before any technology choice is made.',
  },
  {
    Icon: Lightbulb,
    title: 'Practical Over Trendy',
    body: 'We scope what your operation needs today, and what it can realistically maintain next year.',
  },
  {
    Icon: Target,
    title: 'Accountable Delivery',
    body: 'Written scope, review points and a named contact through implementation and support.',
  },
]

export function About() {
  return (
    <>
      <Seo
        title="About Us | Established IT & ERP Software Company India | MAXUS IT SERVICES"
        description="MAXUS IT SERVICES PVT. LTD. has delivered practical, scalable technology and enterprise ERP solutions since 2011 with a customer-first approach across India."
        path="/about"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Us', path: '/about' },
        ]}
        keywords="Shriyan Jaiswal, Shriyan Jaiswal Technical Head, Shriyan Jaiswal Maxus IT, Shriyan Jaiswal software developer, Shriyan Technologies, about Maxus IT Services, IT company Mumbai Varanasi, software company since 2011, ERP providers India, Ram Jaiswal Maxus IT, Dr Usha Gupta HR"
        ogImage="/assets/products/smart-it-solutions-banner.jpg"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'AboutPage',
              name: 'About Maxus IT Services Pvt Ltd and Leadership',
              description:
                'Corporate history, vision, executive leadership, and engineering team including Technical Head Shriyan Jaiswal and HR Dr. Usha Gupta.',
              mainEntity: {
                '@type': 'Organization',
                name: company.name,
                foundingDate: '2011-06',
                slogan: company.slogan,
                url: 'https://www.maxusitservices.com',
              },
            },
            {
              '@type': 'Person',
              '@id': 'https://www.maxusitservices.com/about#shriyan-jaiswal',
              name: 'Shriyan Jaiswal',
              jobTitle: 'Technical Head',
              worksFor: {
                '@type': 'Organization',
                name: 'MAXUS IT SERVICES PVT. LTD.',
                url: 'https://www.maxusitservices.com',
              },
              sameAs: [
                'https://www.shriyantechnologies.com/',
                'https://github.com/shriyanjaiswal',
              ],
              description:
                'Shriyan Jaiswal is the Technical Head at MAXUS IT SERVICES PVT. LTD. and founder of Shriyan Technologies, leading enterprise software development, ERP architecture, cloud solutions, and AI automation.',
              knowsAbout: [
                'Software Engineering',
                'Enterprise ERP Architecture',
                'Business Process Automation',
                'Web & Mobile App Development',
                'Cloud Architecture',
                'AI Agent Workflows',
              ],
            },
            {
              '@type': 'Person',
              '@id': 'https://www.maxusitservices.com/about#dr-usha-gupta',
              name: 'Dr. Usha Gupta',
              jobTitle: 'HR and Recruiter',
              worksFor: {
                '@type': 'Organization',
                name: 'MAXUS IT SERVICES PVT. LTD.',
                url: 'https://www.maxusitservices.com',
              },
              description:
                'Dr. Usha Gupta serves as HR & Talent Recruiter at MAXUS IT SERVICES PVT. LTD., overseeing human capital development, technical hiring, employee onboarding, and organizational culture.',
              knowsAbout: [
                'Human Resource Management',
                'Technical Recruitment',
                'Talent Acquisition',
                'Organizational Behavior',
                'People Operations',
              ],
            },
            {
              '@type': 'Person',
              '@id': 'https://www.maxusitservices.com/about#ram-jaiswal',
              name: 'Ram Jaiswal',
              alternateName: ['Mr. Ram Jaiswal', 'Ram Jaiswal Maxus IT'],
              jobTitle: 'Co-Founder & Business Head',
              worksFor: {
                '@type': 'Organization',
                name: 'MAXUS IT SERVICES PVT. LTD.',
                url: 'https://www.maxusitservices.com',
              },
              description:
                'Ram Jaiswal is the Co-Founder and Business Head of MAXUS IT SERVICES PVT. LTD., steering nationwide enterprise ERP distribution, GST business software implementation, client partnerships, and corporate strategy since 2011.',
              knowsAbout: [
                'Enterprise ERP Consulting',
                'GST Billing & Tax Accounting Compliance',
                'Garment & Footwear Industry Solutions',
                'Retail Point of Sale (POS) Systems',
                'Nationwide Business Development',
              ],
            },
            {
              '@type': 'Person',
              '@id': 'https://www.maxusitservices.com/about#krishna-murty-iyer',
              name: 'Krishna Murty Iyer',
              alternateName: ['Mr. Krishna Murty Iyer', 'K M Iyer'],
              jobTitle: 'Co-Founder & Director',
              worksFor: {
                '@type': 'Organization',
                name: 'MAXUS IT SERVICES PVT. LTD.',
                url: 'https://www.maxusitservices.com',
              },
              description:
                'Krishna Murty Iyer is the Co-Founder and Director of MAXUS IT SERVICES PVT. LTD., driving operational governance, financial oversight, and large-scale enterprise system rollouts across India.',
              knowsAbout: [
                'Corporate Governance',
                'Enterprise IT Infrastructure',
                'Financial Accounting Systems',
                'Operations Management',
              ],
            },
          ],
        }}
      />

      <PageHero
        eyebrow="About Us"
        title="Practical technology, delivered with a customer-first approach"
        description={`${company.tagline} We listen to business requirements, understand challenges and work toward identifying suitable technology solutions.`}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About Us' }]}
      />

      <section className="bg-surface py-10 sm:py-16 lg:py-24" aria-labelledby="story-heading">
        <div className="container-page grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              id="story-heading"
              eyebrow="Our Story"
              title="Building business capability, one system at a time"
            />
            <div className="mt-6 space-y-4 sm:space-y-5 text-sm sm:text-base text-muted leading-relaxed">
              <p>
                MAXUS IT SERVICES PVT. LTD. works with businesses that need technology to remove
                friction rather than add it — a website that brings enquiries, software that matches
                the way the team already works, and records that stay consistent across billing,
                stock and sales.
              </p>
              <p>
                {company.approach} That usually means starting with the operational problem, agreeing
                a written scope, and delivering in stages so your staff can adapt without disrupting
                day-to-day work.
              </p>
              <p>
                {company.vision}
              </p>
            </div>
          </div>
          <dl className="grid gap-5 sm:gap-6 rounded-2xl border border-line bg-canvas p-4.5 sm:p-8 sm:grid-cols-2">
            <div>
              <dt className="text-[11px] sm:text-xs font-semibold tracking-wide text-muted uppercase">
                Incorporation &amp; Heritage
              </dt>
              <dd className="mt-1.5 font-display text-base sm:text-lg font-bold text-navy">
                {company.established.label}
              </dd>
              <dd className="mt-0.5 text-xs sm:text-sm text-muted">{company.established.note}</dd>
            </div>
            <div>
              <dt className="text-[11px] sm:text-xs font-semibold tracking-wide text-muted uppercase">
                Operating Offices &amp; Regional Presence
              </dt>
              <dd className="mt-1.5 font-display text-base sm:text-lg font-bold text-navy">{locationsLabel}</dd>
              <dd className="mt-0.5 text-xs sm:text-sm text-muted">Dual regional delivery centers across India</dd>
            </div>
            <div className="sm:col-span-2 pt-5 border-t border-line/60">
              <dt className="text-[11px] sm:text-xs font-bold tracking-wider text-muted uppercase">
                Executive Leadership &amp; Core Management
              </dt>
              <dd className="mt-3.5 grid gap-3 sm:grid-cols-2">
                {company.leadership.map((member) => (
                  <div
                    key={member.name}
                    className="group relative flex items-start gap-3 rounded-xl border border-line bg-surface p-3.5 shadow-xs transition-all hover:border-blue/40"
                  >
                    {/* Visual Monogram Avatar */}
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-soft text-blue font-black text-xs">
                      {member.name
                        .replace('Mr. ', '')
                        .replace('Dr. ', '')
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <h4 className="text-xs sm:text-sm font-bold text-navy leading-snug truncate">
                          {member.name}
                        </h4>
                        <span className="inline-block shrink-0 rounded-full bg-lime-dark/10 px-1.5 py-0.5 text-[9px] font-bold text-lime-dark uppercase tracking-wider">
                          {member.badge}
                        </span>
                      </div>
                      <p className="mt-0.5 text-[11px] font-medium text-muted leading-tight">
                        {member.role}
                      </p>
                    </div>
                  </div>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bg-canvas py-10 sm:py-16 lg:py-24" aria-labelledby="principles-heading">
        <div className="container-page">
          <SectionHeading
            id="principles-heading"
            eyebrow="Working Principles"
            title="How we approach every engagement"
          />
          <ul className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-line bg-surface p-5 sm:p-7 transition-transform active:scale-[0.98]"
              >
                <span className="inline-flex size-11 sm:size-12 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <item.Icon className="size-5 sm:size-6" aria-hidden="true" strokeWidth={1.7} />
                </span>
                <h3 className="mt-4 font-display text-base sm:text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Executive Leadership Spotlight & Technical Authority */}
      <section className="bg-canvas py-10 sm:py-16 lg:py-24 border-t border-line" aria-labelledby="leadership-spotlight-heading">
        <div className="container-page">
          <SectionHeading
            id="leadership-spotlight-heading"
            eyebrow="Key Leadership"
            title="Experienced Leaders Driving Technology and Talent"
            description="Our core leadership bridges seasoned business domain expertise with modern software engineering and employee development."
          />

          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Shriyan Jaiswal Card */}
            <div className="rounded-2xl border-2 border-blue/40 bg-surface p-4.5 sm:p-7 shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center rounded-full bg-blue/10 px-2 py-0.5 text-[10px] font-bold text-blue uppercase tracking-wider">
                  Tech &amp; Engineering
                </span>
                <span className="text-[10px] font-semibold text-lime-dark bg-lime-dark/10 px-2 py-0.5 rounded-full">
                  Lead Architect
                </span>
              </div>
              <h3 className="font-heading text-[17px] sm:text-xl font-extrabold text-navy">Shriyan Jaiswal</h3>
              <p className="text-[11px] sm:text-xs font-bold text-blue mt-0.5 uppercase tracking-wider">Technical Head</p>
              <p className="mt-2.5 text-[12px] sm:text-xs text-muted leading-relaxed">
                Leads software architecture, enterprise ERP platforms, cloud infrastructure, AI automation workflows, and high-performance database design across all products at MAXUS IT SERVICES.
              </p>
              <div className="mt-4 pt-3 border-t border-line flex items-center justify-between text-xs">
                <span className="font-semibold text-navy">Engineering &amp; IT</span>
                <span className="text-blue font-semibold">Core Tech</span>
              </div>
            </div>

            {/* Dr. Usha Gupta Card */}
            <div className="rounded-2xl border border-line bg-surface p-4.5 sm:p-7 shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center rounded-full bg-lime-dark/10 px-2 py-0.5 text-[10px] font-bold text-lime-dark uppercase tracking-wider">
                  People &amp; Culture
                </span>
                <span className="text-[10px] font-semibold text-muted bg-canvas px-2 py-0.5 rounded-full">
                  Recruiter
                </span>
              </div>
              <h3 className="font-heading text-[17px] sm:text-xl font-extrabold text-navy">Dr. Usha Gupta</h3>
              <p className="text-[11px] sm:text-xs font-bold text-lime-dark mt-0.5 uppercase tracking-wider">HR &amp; Recruiter</p>
              <p className="mt-2.5 text-[12px] sm:text-xs text-muted leading-relaxed">
                Manages talent acquisition, technical recruitment, human capital strategy, and workplace culture, ensuring top engineering talent is onboarded and nurtured.
              </p>
              <div className="mt-4 pt-3 border-t border-line flex items-center justify-between text-xs">
                <span className="font-semibold text-navy">Talent Operations</span>
                <span className="text-muted">Maxus IT Team</span>
              </div>
            </div>

            {/* Mr. Ram Jaiswal Card */}
            <div className="rounded-2xl border border-line bg-surface p-4.5 sm:p-7 shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center rounded-full bg-navy/10 px-2 py-0.5 text-[10px] font-bold text-navy uppercase tracking-wider">
                  Leadership
                </span>
                <span className="text-[10px] font-semibold text-muted bg-canvas px-2 py-0.5 rounded-full">
                  Since 2011
                </span>
              </div>
              <h3 className="font-heading text-[17px] sm:text-xl font-extrabold text-navy">Mr. Ram Jaiswal</h3>
              <p className="text-[11px] sm:text-xs font-bold text-navy mt-0.5 uppercase tracking-wider">Co-Founder &amp; Business Head</p>
              <p className="mt-2.5 text-[12px] sm:text-xs text-muted leading-relaxed">
                Directs nationwide client strategy, GST trade compliance, commercial relations, and multi-state ERP distribution partnerships across India.
              </p>
              <div className="mt-4 pt-3 border-t border-line flex items-center justify-between text-xs">
                <span className="font-semibold text-navy">Mumbai &amp; Varanasi</span>
                <span className="text-blue font-semibold">15+ Yrs</span>
              </div>
            </div>

            {/* Mr. Krishna Murty Iyer Card */}
            <div className="rounded-2xl border border-line bg-surface p-4.5 sm:p-7 shadow-xs hover:shadow-md transition-all active:scale-[0.98]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center rounded-full bg-navy/10 px-2 py-0.5 text-[10px] font-bold text-navy uppercase tracking-wider">
                  Leadership
                </span>
                <span className="text-[10px] font-semibold text-muted bg-canvas px-2 py-0.5 rounded-full">
                  Since 2011
                </span>
              </div>
              <h3 className="font-heading text-[17px] sm:text-xl font-extrabold text-navy">Mr. Krishna Murty Iyer</h3>
              <p className="text-[11px] sm:text-xs font-bold text-navy mt-0.5 uppercase tracking-wider">Co-Founder &amp; Director</p>
              <p className="mt-2.5 text-[12px] sm:text-xs text-muted leading-relaxed">
                Oversees corporate governance, enterprise IT infrastructure, financial oversight, and large-scale enterprise system rollouts across India.
              </p>
              <div className="mt-4 pt-3 border-t border-line flex items-center justify-between text-xs">
                <span className="font-semibold text-navy">Corporate Operations</span>
                <span className="text-blue font-semibold">15+ Yrs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-10 sm:py-16 lg:py-20" aria-labelledby="values-heading">
        <div className="container-page grid gap-4 sm:gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-line bg-canvas p-4.5 sm:p-8">
            <h2 id="values-heading" className="font-heading text-[18px] sm:text-xl font-bold text-navy">
              Vision
            </h2>
            <p className="mt-2 text-[13px] sm:text-sm text-muted leading-relaxed">{company.vision}</p>
          </div>
          <div className="rounded-2xl border border-line bg-canvas p-4.5 sm:p-8">
            <h2 className="font-heading text-[18px] sm:text-xl font-bold text-navy">Approach</h2>
            <p className="mt-2 text-[13px] sm:text-sm text-muted leading-relaxed">{company.approach}</p>
          </div>
        </div>
      </section>

      <section className="bg-canvas py-10 sm:py-16 lg:py-20" aria-labelledby="about-process-heading">
        <div className="container-page">
          <SectionHeading
            id="about-process-heading"
            eyebrow="Our Approach"
            title="Understand, plan, implement, support"
          />
          <ol className="mt-6 sm:mt-10 grid gap-3 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((item) => (
              <li key={item.step} className="rounded-2xl border border-line bg-surface p-4 sm:p-6 transition-transform active:scale-[0.98]">
                <span className="font-display text-lg sm:text-2xl font-extrabold text-lime-dark">
                  {item.step}
                </span>
                <h3 className="mt-2 font-heading text-[15px] sm:text-base font-bold text-navy">{item.title}</h3>
                <p className="mt-1 text-[12px] sm:text-sm text-muted leading-relaxed">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
