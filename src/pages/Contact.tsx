import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { company } from '../data/company'
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
        title="Contact Us | Request ERP & Software Consultation Across India | MAXUS IT SERVICES"
        description="Connect with MAXUS IT SERVICES PVT. LTD. for websites, custom software, ERP, billing or inventory software. Call +91-9559335909, WhatsApp, or request an instant proposal."
        path="/contact"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
        keywords="contact Maxus IT Services, ERP software quote India, software development enquiry, Ram Jaiswal contact, Maxus IT phone number"
        ogImage="/assets/products/smart-it-solutions-banner.jpg"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Maxus IT Services Pvt Ltd',
          description: 'Official contact and consultation channels for software and ERP inquiries across India.',
          mainEntity: {
            '@type': 'Organization',
            name: company.name,
            telephone: company.contact.phoneDial,
            email: company.contact.email,
            address: [
              {
                '@type': 'PostalAddress',
                name: 'Primary Office (Mumbai HQ)',
                streetAddress: company.offices.primary.address,
                addressLocality: 'Mumbai',
                addressRegion: 'Maharashtra',
                postalCode: '400069',
                addressCountry: 'IN',
              },
              {
                '@type': 'PostalAddress',
                name: 'Varanasi Branch Delivery Center',
                streetAddress: company.offices.varanasi.address,
                addressLocality: 'Varanasi',
                addressRegion: 'Uttar Pradesh',
                postalCode: '221002',
                addressCountry: 'IN',
              },
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: company.contact.phoneDial,
              contactType: 'sales & support',
              areaServed: 'IN',
            },
          },
        }}
      />

      <PageHero
        eyebrow="Contact"
        title="Tell us what your business needs to do next"
        description="Share the operational problem rather than the software name — it usually gets to a working answer faster. We reply during business hours."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="bg-surface py-10 sm:py-16 lg:py-24" aria-labelledby="contact-heading">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <div>
            <h2 id="contact-heading" className="text-[20px] lg:text-3xl font-extrabold text-navy font-heading">
              Direct Channels
            </h2>
            <ul className="mt-5 sm:mt-8 space-y-3 sm:space-y-4">
              {channels.map((channel) => (
                <li key={channel.label}>
                  <a
                    href={channel.href}
                    {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-line bg-canvas p-4 sm:p-5 transition-colors hover:border-blue active:scale-[0.99]"
                  >
                    <span className="inline-flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                      <channel.Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[11px] font-semibold tracking-wide text-muted uppercase">
                        {channel.label}
                      </span>
                      <span className="mt-0.5 block font-heading text-[15px] sm:text-base font-bold break-all text-navy">
                        {channel.value}
                      </span>
                      <span className="mt-0.5 block text-[12px] text-muted">{channel.note}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8 space-y-3.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted">
                Official Office Locations
              </h3>

              {/* Primary Office (Mumbai HQ) */}
              <div className="rounded-2xl border border-line bg-canvas p-4 sm:p-5 transition-colors hover:border-blue">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <span className="inline-flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-blue-soft text-blue">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-blue-soft px-2 py-0.5 text-[10px] font-bold text-blue uppercase tracking-wider">
                        Primary Office · Mumbai HQ
                      </span>
                      <span className="text-[11px] font-semibold text-muted">
                        PIN: {company.offices.primary.pincode}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13px] sm:text-sm font-medium text-navy leading-relaxed">
                      {company.offices.primary.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Varanasi Branch */}
              <div className="rounded-2xl border border-line bg-canvas p-4 sm:p-5 transition-colors hover:border-blue">
                <div className="flex items-start gap-3.5 sm:gap-4">
                  <span className="inline-flex size-10 sm:size-11 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <MapPin className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-navy/10 px-2 py-0.5 text-[10px] font-bold text-navy uppercase tracking-wider">
                        Varanasi Branch Delivery Center
                      </span>
                      <span className="text-[11px] font-semibold text-muted">
                        PIN: {company.offices.varanasi.pincode}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13px] sm:text-sm font-medium text-navy leading-relaxed">
                      {company.offices.varanasi.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="enquiry" className="rounded-2xl border border-line bg-canvas p-4.5 sm:p-7 md:p-9 shadow-sm">
            <h2 className="text-[20px] lg:text-2xl font-extrabold text-navy font-heading">Send an enquiry</h2>
            <p className="mt-1.5 text-[13px] sm:text-sm text-muted">
              Fields marked with an asterisk are required.
            </p>
            <div className="mt-5 sm:mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-10 sm:py-14 lg:py-16" aria-labelledby="whatsapp-heading">
        <div className="container-page flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h2 id="whatsapp-heading" className="text-[20px] sm:text-2xl lg:text-3xl font-extrabold text-white font-heading">
              Prefer to message us?
            </h2>
            <p className="mt-2.5 max-w-xl text-[14px] sm:text-base text-white/75 leading-relaxed">
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
            className="w-full sm:w-auto justify-center"
          >
            Message on WhatsApp
          </AnchorButton>
        </div>
      </section>
    </>
  )
}
