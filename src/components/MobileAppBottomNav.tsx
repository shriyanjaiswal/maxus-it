import { NavLink } from 'react-router-dom'
import { Briefcase, Cpu, Home, MessageSquare, Tag } from 'lucide-react'

const navTabs = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/services', label: 'Services', icon: Briefcase },
  { to: '/solutions', label: 'Solutions', icon: Cpu },
  { to: '/pricing', label: 'Pricing', icon: Tag },
  { to: '/contact', label: 'Contact', icon: MessageSquare },
]

export function MobileAppBottomNav() {
  return (
    <nav
      aria-label="Mobile Application Navigation"
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-line/80 bg-surface/95 backdrop-blur-lg shadow-(--shadow-lift)"
      style={{ paddingBottom: 'max(env(safe-area-inset-bottom, 0px), 8px)' }}
    >
      <div className="grid grid-cols-5 items-center justify-around px-2 pt-1.5">
        {navTabs.map((tab) => {
          const IconComponent = tab.icon
          return (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) =>
                `flex flex-col items-center justify-center gap-1 py-1 rounded-xl transition-all duration-200 active:scale-90 ${
                  isActive
                    ? 'text-blue font-bold'
                    : 'text-muted hover:text-navy font-medium'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`relative flex size-8 items-center justify-center rounded-xl transition-all duration-200 ${
                      isActive ? 'bg-blue-soft text-blue shadow-xs' : 'text-muted'
                    }`}
                  >
                    <IconComponent className="size-4.5" strokeWidth={isActive ? 2.3 : 1.9} />
                    {isActive && (
                      <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-lime border border-surface animate-pulse" />
                    )}
                  </span>
                  <span className="text-[11px] leading-tight tracking-tight">
                    {tab.label}
                  </span>
                </>
              )}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
