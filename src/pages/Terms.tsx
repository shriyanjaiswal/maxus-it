import { company } from '../data/company'
import { mailtoLink } from '../data/site'
import { ContactCTA } from '../components/ContactCTA'

import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'

const sections = [
  {
    title: 'Using this website',
    body: 'Content on this site is provided for general information about the services offered by ' +
      `${company.name}. Website materials may be updated without notice.`,
  },
  {
    title: 'Quotations and scope',
    body: 'Information on a service page is not a binding offer. Engagements are governed by the written scope, timeline and commercial terms agreed before work begins.',
  },
  {
    title: 'Intellectual property',
    body: 'The company name, logo and original website content belong to ' +
      `${company.name}. Client-branded material, data and agreed deliverables remain the property of the client.`,
  },
  {
    title: 'Client confidentiality and case studies',
    body: 'Case studies, product architectures, and screenshots are published with client authorization or demonstrate generic proprietary workflows engineered by MAXUS IT SERVICES PVT. LTD.',
  },
  {
    title: 'Third-party links and tools',
    body: 'Pages may reference third-party services such as WhatsApp or hosting infrastructure. We are not responsible for the content or terms of those services.',
  },
  {
    title: 'Limitation of liability',
    body: 'We provide this website on an "as available" basis and are not liable for losses arising from reliance on website content alone. Contractual terms for delivered work are agreed separately.',
  },
]

export function Terms() {
  return (
    <>
      <Seo
        title="Terms & Conditions | MAXUS IT SERVICES"
        description="Terms covering use of the MAXUS IT SERVICES website, quotations and scope, intellectual property, portfolio permissions and third-party links."
        path="/terms"
      />
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The basis on which this website is provided."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Terms & Conditions' }]}
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
          <p className="mt-10 text-sm text-muted">
            Questions: {company.contact.person}, {company.contact.title} —{' '}
            <a href={mailtoLink('Terms question')} className="text-blue underline break-all underline-offset-2">
              {company.contact.email}
            </a>
          </p>
        </div>
      </section>
      <ContactCTA />
    </>
  )
}
