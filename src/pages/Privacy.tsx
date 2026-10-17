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
      />
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How we handle information you share with ${company.name}.`}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Privacy Policy' }]}
      />
      <section className="bg-surface py-16 lg:py-20">
        <div className="container-page max-w-3xl">
          <p className="text-sm text-muted">
            Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          {sections.map((section) => (
            <div key={section.title} className="mt-10">
              <h2 className="text-xl font-bold text-navy">{section.title}</h2>
              <p className="mt-3 text-muted">{section.body}</p>
            </div>
          ))}
          <div className="mt-10 rounded-(--radius-card) border border-line bg-canvas p-6">
            <h2 className="text-lg font-bold text-navy">Contact</h2>
            <p className="mt-2 text-sm text-muted">
              Questions about this policy: {company.contact.person}, {company.contact.title} —{' '}
              <a href={telLink} className="text-blue underline underline-offset-2">
                {company.contact.phoneDisplay}
              </a>{' '}
              /{' '}
              <a href={mailtoLink('Privacy question')} className="text-blue underline break-all underline-offset-2">
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
