import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { Icon } from './Icon'

const base =
  'inline-flex items-center justify-center gap-2 rounded-(--radius-btn) px-6 py-3.5 font-display text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.99] cursor-pointer'

const variants = {
  lime: 'bg-lime text-navy hover:bg-lime-dark hover:shadow-md hover:shadow-lime/20',
  outlineLight: 'border border-white/35 text-white hover:border-white hover:bg-white/10',
  outlineDark: 'border border-line text-navy hover:border-navy hover:bg-canvas hover:shadow-sm',
  navy: 'bg-navy text-white hover:bg-navy-soft hover:shadow-md hover:shadow-navy/20',
  white: 'bg-white text-navy hover:bg-canvas hover:shadow-md',
} as const

type CommonProps = {
  children: ReactNode
  variant?: keyof typeof variants
  className?: string
  arrow?: boolean
  icon?: string
}

const classes = (variant: keyof typeof variants, className = '') =>
  `${base} ${variants[variant]} ${className}`

export function LinkButton({
  to,
  children,
  variant = 'lime',
  className,
  arrow = false,
  icon,
}: CommonProps & { to: string }) {
  return (
    <Link to={to} className={classes(variant, className)}>
      {icon && <Icon name={icon} className="size-4" />}
      {children}
      {arrow && <Icon name="arrow-right" className="size-4" strokeWidth={2.4} />}
    </Link>
  )
}

export function AnchorButton({
  href,
  children,
  variant = 'lime',
  className,
  arrow = false,
  icon,
  external = false,
  ariaLabel,
}: CommonProps & { href: string; external?: boolean; ariaLabel?: string }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      className={classes(variant, className)}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon && <Icon name={icon} className="size-4" />}
      {children}
      {arrow && <Icon name="arrow-right" className="size-4" strokeWidth={2.4} />}
    </a>
  )
}

export function ActionButton({
  children,
  variant = 'navy',
  className,
  ...rest
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={classes(variant, className)} {...rest}>
      {children}
    </button>
  )
}
