type Props = { className?: string }

/** Official high-resolution 3D glossy Earth Atom emblem. */
export function LogoMark({ className = 'size-10' }: Props) {
  return (
    <img
      src="/assets/brand/glossy-earth-atom-emblem.png"
      alt="Maxus IT Services Emblem"
      className={`${className} object-contain shrink-0`}
      loading="eager"
    />
  )
}

/** Official squircle app and tech icon badge. */
export function BrandIcon({ className = 'size-12' }: Props) {
  return (
    <img
      src="/assets/brand/glossy-maxus-it-tech-icon.png"
      alt="Maxus IT Tech Icon"
      className={`${className} object-contain rounded-xl shadow-sm shrink-0`}
      loading="lazy"
    />
  )
}

/** Full 4K transparent brand logo with typography. */
export function BrandLogoFull({ className = 'h-12 w-auto' }: Props) {
  return (
    <img
      src="/assets/brand/maxus-it-services-logo-transparent.png"
      alt="MAXUS IT SERVICES PVT LTD"
      className={`${className} object-contain`}
      loading="lazy"
    />
  )
}

export function Wordmark({ tone = 'dark' }: { tone?: 'light' | 'dark' }) {
  const primary = tone === 'light' ? 'text-white' : 'text-navy'
  const secondary = tone === 'light' ? 'text-white/65' : 'text-muted'
  return (
    <span className="leading-none">
      <span className={`block font-display text-xl font-extrabold tracking-tight ${primary}`}>
        Maxus <span className={tone === 'light' ? 'text-lime' : 'text-blue'}>IT</span>
      </span>
      <span className={`mt-1 block text-[0.6rem] font-semibold tracking-[0.22em] uppercase ${secondary}`}>
        Services Pvt Ltd
      </span>
    </span>
  )
}
