/**
 * Official Maxus IT Services Typography System
 * Responsive Scale:
 * - Mobile (< 1024px): User's exact approved scale
 *   H1: 22px, H2: 20px, H3: 18px, H4: 14px, Body: 15px, BodySmall: 13px, Caption: 11px
 * - Desktop (>= 1024px): Proportional refined step-up for larger displays
 *   H1: 30px, H2: 24px, H3: 20px, H4: 16px, Body: 16px, BodySmall: 14px, Caption: 12px
 */

export const typography = {
  h1: {
    mobile: { fontSize: 22, lineHeight: 28, letterSpacing: -0.5 },
    desktop: { fontSize: 30, lineHeight: 38, letterSpacing: -0.6 },
    fontSize: 22,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    letterSpacing: -0.5,
    lineHeight: 28,
    className: 'text-h1 font-display font-bold',
  },
  h2: {
    mobile: { fontSize: 20, lineHeight: 26, letterSpacing: -0.3 },
    desktop: { fontSize: 24, lineHeight: 32, letterSpacing: -0.4 },
    fontSize: 20,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    letterSpacing: -0.3,
    lineHeight: 26,
    className: 'text-h2 font-display font-bold',
  },
  h3: {
    mobile: { fontSize: 18, lineHeight: 24 },
    desktop: { fontSize: 20, lineHeight: 28 },
    fontSize: 18,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    lineHeight: 24,
    className: 'text-h3 font-display font-bold',
  },
  h4: {
    mobile: { fontSize: 14, lineHeight: 20 },
    desktop: { fontSize: 16, lineHeight: 22 },
    fontSize: 14,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    lineHeight: 20,
    className: 'text-h4 font-display font-bold',
  },
  body: {
    mobile: { fontSize: 15, lineHeight: 22 },
    desktop: { fontSize: 16, lineHeight: 26 },
    fontSize: 15,
    fontFamily: 'Space Grotesk',
    fontWeight: '400',
    lineHeight: 22,
    className: 'text-body font-sans',
  },
  bodySmall: {
    mobile: { fontSize: 13, lineHeight: 18 },
    desktop: { fontSize: 14, lineHeight: 20 },
    fontSize: 13,
    fontFamily: 'Space Grotesk',
    fontWeight: '400',
    lineHeight: 18,
    className: 'text-body-small font-sans',
  },
  caption: {
    mobile: { fontSize: 11, lineHeight: 16, letterSpacing: 0.2 },
    desktop: { fontSize: 12, lineHeight: 18, letterSpacing: 0.25 },
    fontSize: 11,
    fontFamily: 'Space Grotesk',
    fontWeight: '600',
    letterSpacing: 0.2,
    lineHeight: 16,
    className: 'text-caption font-sans font-semibold',
  },
} as const
