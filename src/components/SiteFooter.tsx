import { Link } from 'react-router-dom'
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from 'lucide-react'
import { company, locationsLabel } from '../data/company'
import { footerServices, quickLinks, telLink } from '../data/site'
import { LogoMark } from './artwork/Logo'

const socials = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', Icon: Linkedin },
  { label: 'Facebook', href: 'https://www.facebook.com/', Icon: Facebook },
  { label: 'Twitter', href: 'https://twitter.com/', Icon: Twitter },
  { label: 'YouTube', href: 'https://www.youtube.com/', Icon: Youtube },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-white/70">
      <div className="container-page grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <LogoMark className="size-10" />
            <div>
              <span className="block font-display text-2xl font-extrabold text-white">
                Maxus <span className="text-lime">IT</span>
              </span>
              <p className="text-[0.65rem] font-semibold tracking-[0.22em] text-white/50 uppercase">
                Services Pvt Ltd
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm">{company.tagline}</p>
          <ul className="mt-6 flex gap-3">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (link to be confirmed)`}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-lime hover:text-lime"
                >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer quick links">
          <h2 className="font-display text-base font-bold text-white">Quick Links</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-lime">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Footer services">
          <h2 className="font-display text-base font-bold text-white">Our Services</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {footerServices.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="transition-colors hover:text-lime">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-base font-bold text-white">Contact Information</h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a href={telLink} className="flex items-start gap-3 transition-colors hover:text-lime">
                <Phone className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden="true" />
                {company.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${company.contact.email}`}
                className="flex items-start gap-3 break-all transition-colors hover:text-lime"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden="true" />
                {company.contact.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden="true" />
              <span>{locationsLabel}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All Rights Reserved.</p>
          <ul className="flex gap-6">
            <li>
              <Link to="/privacy-policy" className="transition-colors hover:text-lime">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors hover:text-lime">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
