import { Link } from 'react-router-dom'
import { Mail, MapPin, MessageSquare, Phone, ShieldCheck } from 'lucide-react'
import { company, locationsLabel } from '../data/company'
import { footerServices, quickLinks, telLink, whatsappLink } from '../data/site'
import { LogoMark } from './artwork/Logo'

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
          <p className="mt-4 max-w-xs text-sm">{company.tagline}</p>
          <div className="mt-5 flex flex-wrap gap-2.5">
            <a
              href={whatsappLink('Hello Maxus IT Services, I would like to enquire about your software solutions.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-lime/30 bg-lime/10 px-3 py-1.5 text-xs font-semibold text-lime transition-colors hover:bg-lime/20"
            >
              <MessageSquare className="size-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 transition-colors hover:bg-white/10"
            >
              <Phone className="size-3.5" />
              <span>Instant Call</span>
            </a>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
            <ShieldCheck className="size-4 text-lime" />
            <span>Pan-India On-Site &amp; Cloud Support</span>
          </div>
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
