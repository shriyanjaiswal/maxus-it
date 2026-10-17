import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, Phone, X } from 'lucide-react'
import { company } from '../data/company'
import { nav, telLink } from '../data/site'
import { services } from '../data/services'
import { LinkButton } from './Button'
import { LogoMark, Wordmark } from './artwork/Logo'

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
        <Link to="/" className="flex items-center gap-3" aria-label={`${company.name} home`}>
          <LogoMark className="size-9 lg:size-11" />
          <Wordmark />
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
                      <div className="mb-2 pb-2 border-b border-line flex items-center justify-between px-2">
                        <Link
                          to="/services"
                          className="text-xs font-bold text-blue hover:underline uppercase tracking-wider"
                        >
                          View All 12 Services →
                        </Link>
                        <span className="text-[11px] text-muted">Enterprise & Digital Solutions</span>
                      </div>
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

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center rounded-lg border border-line text-navy lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
          {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-line bg-surface lg:hidden">
          <nav aria-label="Mobile" className="container-page max-h-[calc(100vh-68px)] overflow-y-auto py-4">
            <ul className="space-y-1">
              {nav.map((item) => (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <div className="flex items-center justify-between gap-2 rounded-lg px-2">
                        <Link
                          to="/services"
                          className="flex-1 py-3 text-base font-semibold text-navy"
                        >
                          {item.label}
                        </Link>
                        <button
                          type="button"
                          aria-expanded={mobileServices}
                          aria-controls="mobile-services-list"
                          aria-label="Toggle service list"
                          onClick={() => setMobileServices((open) => !open)}
                          className="inline-flex size-9 items-center justify-center rounded-lg border border-line"
                        >
                          <ChevronDown
                            className={`size-4 transition-transform ${mobileServices ? 'rotate-180' : ''}`}
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                      {mobileServices && (
                        <ul id="mobile-services-list" className="mb-2 ml-2 border-l border-line pl-4">
                          {services.map((service) => (
                            <li key={service.slug}>
                              <Link
                                to={`/services/${service.slug}`}
                                className="block py-2.5 text-sm text-muted hover:text-blue"
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block rounded-lg px-2 py-3 text-base font-semibold ${
                          isActive ? 'text-blue' : 'text-navy'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-4 grid gap-3 pb-6">
              <LinkButton to="/contact" variant="lime" arrow className="w-full">
                Let&apos;s Talk
              </LinkButton>
              <a
                href={telLink}
                className="inline-flex w-full items-center justify-center gap-2 rounded-(--radius-btn) border border-line px-5 py-3 text-sm font-bold text-navy"
              >
                <Phone className="size-4" aria-hidden="true" />
                {company.contact.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
