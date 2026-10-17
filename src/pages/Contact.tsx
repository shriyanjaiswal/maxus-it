import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { company, locationsLabel } from '../data/company'
import { mailtoLink, telLink, whatsappLink } from '../data/site'
import { ContactForm } from '../components/ContactForm'
import { PageHero } from '../components/PageHero'
import { Seo } from '../components/Seo'
import { AnchorButton } from '../components/Button'

type Channel = {
  Icon: typeof Phone
  label: string
  value: string
  href: string
  note: string
  unverified: boolean
  external?: boolean
}

const channels: Channel[] = [
  {
    Icon: Phone,
    label: 'Direct Consultation Line',
    value: company.contact.phoneDisplay,
    href: telLink,
    note: `${company.contact.person} (${company.contact.title} & Authorized Representative)`,
    unverified: false,
  },
  {
    Icon: Mail,
    label: 'Official Corporate Desk',
    value: company.contact.email,
    href: mailtoLink(),
    note: 'Priority commercial inquiries & enterprise proposals',
    unverified: false,
  },
  {
    Icon: MessageCircle,
    label: 'Official Enterprise WhatsApp',
    value: 'Direct Business Chat',
    href: whatsappLink(`Hello ${company.shortName}, I would like to schedule an enterprise consultation.`),
    note: 'Instant connectivity with our software architect desk',
    unverified: false,
    external: true,
  },
]

export function Contact() {
  return (
    <>
      <Seo
        title="Contact Us | MAXUS IT SERVICES"
        description="Talk to MAXUS IT SERVICES PVT. LTD. about a website, custom software, ERP, billing or inventory requirement. Call, email, WhatsApp or send an enquiry."
        path="/contact"
      />

      <PageHero
        eyebrow="Contact"
        title="Tell us what your business needs to do next"
        description="Share the operational problem rather than the software name — it usually gets to a working answer faster. We reply during business hours."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="bg-surface py-16 lg:py-24" aria-labelledby="contact-heading">
        <div className="container-page grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div>
            <h2 id="contact-heading" className="text-2xl font-extrabold text-navy sm:text-3xl">
              Contact details
            </h2>
            <ul className="mt-8 space-y-4">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex gap-4 rounded-(--radius-card) border border-line bg-canvas p-5 transition-colors hover:border-blue"
                  >
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                      <channel.Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold tracking-wide text-muted uppercase">
                        {channel.label}
                      </span>
                      <span className="mt-1 block font-display text-base font-bold break-all text-navy">
                        {channel.value}
                      </span>
                      <span className="mt-1 block text-xs text-muted">{channel.note}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-4 rounded-(--radius-card) border border-line bg-surface p-5">
              <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold tracking-wide text-muted uppercase">
                  Associated locations
                </p>
                <p className="mt-1 font-display text-base font-bold text-navy">{locationsLabel}</p>
              </div>
            </div>
          </div>

          <div id="enquiry" className="rounded-(--radius-card) border border-line bg-canvas p-7 sm:p-9">
            <h2 className="text-2xl font-extrabold text-navy">Send an enquiry</h2>
            <p className="mt-2 text-sm text-muted">
              Fields marked with an asterisk are required.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-14 lg:py-16" aria-labelledby="whatsapp-heading">
        <div className="container-page flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 id="whatsapp-heading" className="text-2xl font-extrabold text-white sm:text-3xl">
              Prefer to message us?
            </h2>
            <p className="mt-3 max-w-xl text-white/75">
              Send a WhatsApp message with a short description of your requirement and we&apos;ll
              pick it up during business hours.
            </p>
          </div>
          <AnchorButton
            href={whatsappLink(
              `Hello ${company.shortName}, I would like to discuss a project.`,
            )}
            external
            variant="lime"
            arrow
          >
            Message on WhatsApp
          </AnchorButton>
        </div>
      </section>
    </>
  )
}
