import { company } from '../data/company'
import { mailtoLink, telLink } from '../data/site'
import { ContactCTA } from '../components/ContactCTA'

import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

const sections = [
  {
    title: 'Information you send us',
    body: `When you use the enquiry form on this website we collect the name, email address, phone number, service topic and message you choose to provide. We use these details only to respond to your enquiry and discuss the work you have asked about.`,
  },
  {
    title: 'How enquiries are delivered',
    body: 'Form submissions are passed to the enquiry delivery service configured for this deployment. The service processes the message on our behalf; no private credentials are stored in the website code that your browser downloads.',
  },
  {
    title: 'Direct contact',
    body: 'If you call, email or message us on WhatsApp, the content you send is kept for as long as needed to handle the conversation and any resulting engagement.',
  },
  {
    title: 'Hosting and technical logs',
    body: 'Our hosting provider may record standard technical information such as IP address, requested page and browser type for security and diagnostic purposes.',
  },
  {
    title: 'Analytics',
    body: 'This site does not enable visitor analytics unless a measurement service is explicitly configured for the live deployment. If one is added, this policy is updated to describe it.',
  },
  {
    title: 'Sharing',
    body: 'We do not sell your information. Details are shared only with the providers needed to operate this website and deliver your enquiry.',
  },
  {
    title: 'Your choices',
    body: 'You can ask us to delete enquiry data we hold about you, or withdraw from a conversation at any time, using the contact details below.',
  },
]

export function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy | MAXUS IT SERVICES"
        description="How MAXUS IT SERVICES PVT. LTD. handles information submitted through this website, including enquiry form data, hosting logs and analytics."
        path="/privacy-policy"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Privacy Policy', path: '/privacy-policy' },
        ]}
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How we handle information you share with ${company.name}.`}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
      />
      <section className="bg-surface py-10 sm:py-16 lg:py-20">
        <div className="container-page max-w-3xl">
          <p className="text-[13px] text-muted">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
            {sections.map((section) => (
              <div key={section.title} className="rounded-2xl border border-line/70 bg-canvas/40 p-4 sm:border-0 sm:bg-transparent sm:p-0">
                <h2 className="text-[17px] sm:text-xl font-bold text-navy font-heading">{section.title}</h2>
                <p className="mt-2 text-[14px] sm:text-base text-muted leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-10 rounded-2xl border border-line bg-canvas p-4.5 sm:p-6">
            <h2 className="text-[16px] sm:text-lg font-bold text-navy font-heading">Contact</h2>
            <p className="mt-2 text-[13px] sm:text-sm text-muted leading-relaxed">
              Questions about this policy: {company.contact.person}, {company.contact.title} —{' '}
              <a href={telLink} className="text-blue font-semibold underline underline-offset-2">
                {company.contact.phoneDisplay}
              </a>{' '}
              /{' '}
              <a href={mailtoLink('Privacy question')} className="text-blue font-semibold underline break-all underline-offset-2">
                {company.contact.email}
              </a>
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
