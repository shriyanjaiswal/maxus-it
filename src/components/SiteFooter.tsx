import { Link } from 'react-router-dom'
import {
  ArrowUp,
  Building2,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
} from 'lucide-react'
import { company } from '../data/company'
import { quickLinks, telLink, whatsappLink } from '../data/site'
import { OfficialMaxusLogoLight } from './artwork/Logo'

const erpSuites = [
  { label: 'Garment & Footwear ERP', to: '/portfolio/garment-footwear-erp-software' },
  { label: 'Business ERP-14 Accounting', to: '/portfolio/business-erp14-accounting-software' },
  { label: 'School ERP System', to: '/portfolio/school-erp-software' },
  { label: 'Institute Management Software', to: '/portfolio/institute-management-software' },
  { label: 'Electronic Store Retail ERP', to: '/portfolio/electronic-store-erp-software' },
  { label: 'Touch POS & GST Billing', to: '/services/billing-accounting' },
  { label: 'Multi-Warehouse Inventory', to: '/services/inventory-management' },
]

const itServices = [
  { label: 'Custom Software Development', to: '/services/custom-software' },
  { label: 'Website Design & Portals', to: '/services/website-development' },
  { label: 'Mobile App Development', to: '/services/mobile-app-development' },
  { label: 'WhatsApp & Telegram Bots', to: '/services/telegram-bot-development' },
  { label: 'Cloud Solutions & Hosting', to: '/services/custom-software' },
  { label: 'SEO & Online Promotion', to: '/services/digital-marketing' },
  { label: 'View All Services →', to: '/services' },
]

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy-deep text-white/70" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Website Footer
      </h2>

      <div className="container-page py-12 lg:py-16">
        {/* Top Corporate Accreditation & Touchpoint Bar */}
        <div className="border-b border-white/10 pb-8 mb-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <span className="flex items-center gap-2 font-bold text-white uppercase tracking-wider">
              <span className="size-2 rounded-full bg-lime animate-pulse" />
              MAXUS IT SERVICES PVT. LTD.
            </span>
            <span className="text-white/40">·</span>
            <span className="text-white/70">Established June 2011</span>
            <span className="text-white/40">·</span>
            <span className="text-white/70">Dual Delivery Centers: Mumbai &amp; Varanasi</span>
            <span className="text-white/40">·</span>
            <span className="text-lime font-semibold">Pan-India Deployment &amp; AMC</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={whatsappLink('Hello Maxus IT Services, I would like to schedule an enterprise software consultation.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-lime/10 border border-lime/30 px-3.5 py-1.5 text-xs font-semibold text-lime hover:bg-lime/20 transition-colors"
            >
              <MessageSquare className="size-3.5" />
              <span>WhatsApp Direct</span>
            </a>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white/90 hover:bg-white/10 transition-colors"
            >
              <Phone className="size-3.5 text-lime" />
              <span>Call +91-9559335909</span>
            </a>
          </div>
        </div>

        {/* 4-Column Balanced Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Column 1: Brand & Credibility (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link
              to="/"
              className="inline-flex items-center rounded-xl bg-white px-3.5 py-1.5 shadow-sm transition-transform hover:scale-[1.02]"
              aria-label="Maxus IT Services Home"
            >
              <OfficialMaxusLogoLight className="h-10 w-auto" />
            </Link>
            <p className="text-xs text-white/75 leading-relaxed pr-4">
              MAXUS IT SERVICES PVT. LTD. delivers mission-critical ERP platforms, GST billing engines,
              and bespoke software engineering for manufacturers, retail chains, and educational
              institutes across India since 2011.
            </p>

            <div className="pt-2 space-y-2 text-xs text-white/65">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="size-4 text-lime shrink-0" />
                <span>GST Tax Compliant &amp; Statutory E-Way Systems</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Building2 className="size-4 text-lime shrink-0" />
                <span>Dual Delivery Centers: Mumbai &amp; Varanasi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="size-4 text-lime shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:30 PM IST</span>
              </div>
            </div>
          </div>

          {/* Column 2: Software & ERP Suites (3 Cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Software &amp; ERP Suites
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {erpSuites.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-white/70 hover:text-lime transition-colors inline-block py-0.5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: IT & Cloud Services (2 Cols) */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              IT Services
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
              {itServices.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className={`inline-block py-0.5 transition-colors ${
                      item.label.includes('→')
                        ? 'font-bold text-lime hover:underline'
                        : 'text-white/70 hover:text-lime'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Corporate Desk & Offices (3 Cols) */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Corporate Desk
            </h3>
            <ul className="mt-4 space-y-3.5 text-xs">
              <li>
                <a
                  href={telLink}
                  className="flex items-start gap-3 text-white/80 hover:text-lime transition-colors group"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden="true" />
                  <div>
                    <span className="block font-bold text-sm text-white group-hover:text-lime">
                      {company.contact.phoneDisplay}
                    </span>
                    <span className="text-[11px] text-white/50">
                      {company.contact.person} ({company.contact.title})
                    </span>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="flex items-start gap-3 text-white/80 hover:text-lime transition-colors group"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden="true" />
                  <div>
                    <span className="block font-semibold break-all text-white group-hover:text-lime">
                      {company.contact.email}
                    </span>
                    <span className="text-[11px] text-white/50">Official Proposals &amp; Support</span>
                  </div>
                </a>
              </li>

              <li className="pt-2.5 border-t border-white/10">
                <div className="flex items-start gap-3 text-white/70">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-lime" aria-hidden="true" />
                  <div className="space-y-2.5 text-xs">
                    <div>
                      <span className="block text-[11px] font-bold text-lime uppercase tracking-wider">
                        Primary Office (Mumbai HQ):
                      </span>
                      <p className="mt-0.5 text-white/75 leading-relaxed">
                        {company.offices.primary.address}
                      </p>
                    </div>
                    <div className="pt-2 border-t border-white/10">
                      <span className="block text-[11px] font-bold text-white/90 uppercase tracking-wider">
                        Varanasi Branch:
                      </span>
                      <p className="mt-0.5 text-white/75 leading-relaxed">
                        {company.offices.varanasi.address}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links Sub-Navigation Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="text-white/40 uppercase font-bold tracking-wider text-[11px]">
              Navigation:
            </span>
            {quickLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-lime transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-[11px] font-semibold text-white/70 hover:border-lime hover:text-lime transition-all ml-auto"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="size-3" />
          </button>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="border-t border-white/10 bg-navy-deep/80">
        <div className="container-page flex flex-col gap-3 py-5 text-xs sm:flex-row sm:items-center sm:justify-between text-white/50">
          <p>© {new Date().getFullYear()} {company.name} All Rights Reserved. (Established 2011)</p>
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/privacy-policy" className="hover:text-lime transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-lime transition-colors">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-lime transition-colors">
                Sitemap
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
