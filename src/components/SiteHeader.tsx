import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, MessageSquare, Phone, X } from 'lucide-react'
import { company } from '../data/company'
import { nav, telLink, whatsappLink } from '../data/site'
import { services } from '../data/services'
import { LinkButton } from './Button'
import { OfficialMaxusLogoLight } from './artwork/Logo'

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServices, setMobileServices] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
    setMobileServices(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }
    const onClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative py-2 text-sm font-semibold transition-colors ${
      isActive ? 'text-blue after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:bg-lime-dark' : 'text-ink hover:text-blue'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-surface/95 backdrop-blur">
      <div className="container-page flex h-[68px] items-center justify-between gap-4 lg:h-[84px]">
        <Link to="/" className="flex items-center" aria-label={`${company.name} home`}>
          <OfficialMaxusLogoLight className="h-10 sm:h-11 lg:h-12 w-auto" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  onClick={() => setServicesOpen((open) => !open)}
                  className="flex items-center gap-1 py-2 text-sm font-semibold text-ink transition-colors hover:text-blue"
                >
                  {item.label}
                  <ChevronDown
                    className={`size-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 top-full z-50 w-[580px] pt-3">
                    <div className="rounded-(--radius-card) border border-line bg-surface p-3 shadow-(--shadow-lift)">
                      <ul className="grid grid-cols-2 gap-1 max-h-[420px] overflow-y-auto">
                        {services.map((service) => (
                          <li key={service.slug}>
                            <Link
                              to={`/services/${service.slug}`}
                              className="block rounded-lg px-2.5 py-1.5 text-xs font-medium text-ink hover:bg-canvas hover:text-blue transition-colors"
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink}
            className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-semibold text-navy transition-colors hover:border-blue hover:text-blue"
          >
            <Phone className="size-4" aria-hidden="true" />
            {company.contact.phoneDisplay}
          </a>
          <LinkButton to="/contact" variant="lime" className="px-5 py-2.5">
            Let&apos;s Talk
          </LinkButton>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={telLink}
            aria-label="Direct Call Maxus IT Services"
            className="inline-flex size-10 items-center justify-center rounded-xl bg-blue-soft text-blue border border-line active:scale-95 transition-transform"
          >
            <Phone className="size-4.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-xl border border-line bg-surface text-navy active:scale-95 transition-transform"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Native App Slide-Over Drawer for Mobile */}
      {mobileOpen &&
        typeof document !== 'undefined' &&
        createPortal(
          <div className="fixed inset-0 z-100 lg:hidden" id="mobile-navigation" role="dialog" aria-modal="true">
            {/* Backdrop Blur Overlay */}
            <div
              className="fixed inset-0 bg-navy-deep/60 backdrop-blur-xs transition-opacity"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />

            {/* Off-Canvas App Drawer Panel */}
            <div className="fixed inset-y-0 right-0 z-101 w-[88vw] max-w-[360px] bg-surface shadow-2xl flex flex-col border-l border-line">
              {/* Drawer Header */}
              <div className="flex h-16 items-center justify-between border-b border-line px-5 bg-canvas/60">
                <Link to="/" onClick={() => setMobileOpen(false)} aria-label="Maxus IT Services">
                  <OfficialMaxusLogoLight className="h-8 w-auto" />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex size-9 items-center justify-center rounded-full border border-line text-muted hover:text-navy hover:bg-canvas active:scale-95 transition-all"
                  aria-label="Close navigation"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Drawer Scrollable Body */}
              <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
                {/* Quick Contact App Action Cards */}
                <div className="rounded-2xl border border-line bg-canvas p-3.5 space-y-2.5">
                  <div className="text-[11px] font-bold text-muted uppercase tracking-wider px-1">
                    Direct Support &amp; Enquiries
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={telLink}
                      className="flex items-center gap-2 rounded-xl border border-line bg-surface p-2.5 text-xs font-bold text-navy hover:text-blue active:scale-95 transition-all shadow-xs"
                    >
                      <span className="flex size-7 items-center justify-center rounded-lg bg-blue-soft text-blue">
                        <Phone className="size-3.5" />
                      </span>
                      <span>Call Now</span>
                    </a>
                    <a
                      href={whatsappLink('Hello Maxus IT Services, I would like to schedule a consultation.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-xl border border-line bg-surface p-2.5 text-xs font-bold text-navy hover:text-[#25D366] active:scale-95 transition-all shadow-xs"
                    >
                      <span className="flex size-7 items-center justify-center rounded-lg bg-[#25D366]/15 text-[#25D366]">
                        <MessageSquare className="size-3.5" />
                      </span>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                  <LinkButton
                    to="/contact"
                    variant="lime"
                    arrow
                    onClick={() => setMobileOpen(false)}
                    className="w-full justify-center py-2 text-xs font-bold"
                  >
                    Book Free Consultation
                  </LinkButton>
                </div>

                {/* Navigation Cells */}
                <nav aria-label="Mobile Drawer Navigation" className="space-y-1">
                  <div className="text-[11px] font-bold text-muted uppercase tracking-wider px-1 mb-2">
                    Application Pages
                  </div>
                  {nav.map((item) => (
                    <div key={item.label} className="border-b border-line/60 last:border-b-0">
                      {item.children ? (
                        <>
                          <div className="flex items-center justify-between py-2.5">
                            <Link
                              to="/services"
                              onClick={() => setMobileOpen(false)}
                              className="flex-1 font-display text-sm font-bold text-navy hover:text-blue"
                            >
                              {item.label}
                            </Link>
                            <button
                              type="button"
                              aria-expanded={mobileServices}
                              onClick={() => setMobileServices((open) => !open)}
                              className="flex size-8 items-center justify-center rounded-lg border border-line text-muted"
                              aria-label="Toggle services list"
                            >
                              <ChevronDown
                                className={`size-4 transition-transform duration-200 ${
                                  mobileServices ? 'rotate-180 text-blue' : ''
                                }`}
                              />
                            </button>
                          </div>
                          {mobileServices && (
                            <div className="mb-3 space-y-1 pl-3 border-l-2 border-blue-soft animate-fade-in">
                              {services.map((service) => (
                                <Link
                                  key={service.slug}
                                  to={`/services/${service.slug}`}
                                  onClick={() => setMobileOpen(false)}
                                  className="block rounded-lg px-2.5 py-1.5 text-xs font-medium text-muted hover:text-blue hover:bg-canvas transition-colors"
                                >
                                  {service.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <NavLink
                          to={item.to}
                          onClick={() => setMobileOpen(false)}
                          className={({ isActive }) =>
                            `flex items-center justify-between py-2.5 rounded-lg font-display text-sm font-bold transition-colors ${
                              isActive ? 'text-blue' : 'text-navy hover:text-blue'
                            }`
                          }
                        >
                          {({ isActive }) => (
                            <>
                              <span>{item.label}</span>
                              <span
                                className={`size-1.5 rounded-full ${
                                  isActive ? 'bg-lime ring-2 ring-lime/40' : 'bg-line'
                                }`}
                              />
                            </>
                          )}
                        </NavLink>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Corporate Badges in Drawer */}
                <div className="rounded-xl border border-line bg-canvas p-3 text-[11px] text-muted space-y-1">
                  <div className="font-bold text-navy">Maxus IT Services Pvt. Ltd.</div>
                  <div>Incorporated June 2011 · ISO 9001:2015</div>
                  <div>Dual Delivery: Mumbai &amp; Varanasi</div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </header>
  )
}
