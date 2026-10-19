import type { ReactNode } from 'react'

type Props = {
  id?: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  action?: ReactNode
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  align = 'left',
  tone = 'light',
  className = '',
}: Props) {
  const dark = tone === 'dark'
  return (
    <div
      className={`flex flex-col gap-4 sm:gap-6 ${
        action ? 'lg:flex-row lg:items-end lg:justify-between' : ''
      } ${align === 'center' ? 'items-center text-center' : ''} ${className}`}
    >
      <div className={align === 'center' ? 'max-w-2xl' : 'max-w-2xl'}>
        <p className={`eyebrow flex items-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider ${align === 'center' ? 'justify-center' : ''} ${dark ? 'text-lime' : 'text-blue'}`}>
          <span className={`h-px w-6 sm:w-8 ${dark ? 'bg-lime' : 'bg-lime-dark'}`} aria-hidden="true" />
          {eyebrow}
        </p>
        <h2
          id={id}
          className={`mt-2.5 sm:mt-4 text-[20px] font-extrabold sm:text-3xl lg:text-[2.6rem] font-heading leading-tight tracking-tight ${
            dark ? 'text-white' : 'text-navy'
          }`}
        >
          {title}
        </h2>
        {description && (
          <p className={`mt-2.5 sm:mt-4 text-[15px] sm:text-base leading-relaxed ${dark ? 'text-white/75' : 'text-muted'}`}>{description}</p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  )
}

export const Accent = ({ children }: { children: ReactNode }) => (
  <span className="text-blue">{children}</span>
)

export const AccentLime = ({ children }: { children: ReactNode }) => (
  <span className="text-lime">{children}</span>
)
