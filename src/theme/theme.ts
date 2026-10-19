/**
 * Official Maxus IT Services Design System Theme
 * 
 * Enterprise-grade theme definition containing:
 * - colors: Complete 50-950 scales for Navy (Primary), Blue (Accent), Lime (Energy/CTA), 
 *           Ink (Neutral text/borders), plus semantic status palettes (Success, Warning, Danger, Info).
 * - spacing: Standardized 4pt/8pt grid scale for layout consistency.
 * - borderRadius: Tailored radii for buttons (10px), cards (16px), inputs (8px), and pills (9999px).
 * - shadows: Calibrated soft enterprise shadows with dual Web CSS and Native style object compatibility.
 * - typography: Responsive typography tokens (Mobile & Desktop).
 */

import { typography } from './typography'

export const colors = {
  // Primary Corporate Identity: Deep Navy
  navy: {
    50: '#F0F6FA',
    100: '#DFECF4',
    200: '#C3DAE9',
    300: '#98BED7',
    400: '#689CC0',
    500: '#427BA5',
    600: '#2B6088',
    700: '#1F4A6D',
    800: '#14456C', // Soft Navy (card headers, secondary containers)
    900: '#0D3150', // Core Brand Navy (primary brand color)
    950: '#071F35', // Deep Midnight Navy (hero background, footer)
  },

  // Secondary Technology Accent: Cyan / Marine Blue
  blue: {
    50: '#E6F2F7', // Soft Blue tag background
    100: '#CEE5EF',
    200: '#A3D0E3',
    300: '#6FB5D3',
    400: '#4397BE',
    500: '#257DA4',
    600: '#176B8A', // Primary Blue Accent (links, icons, badges)
    700: '#125670',
    800: '#10455A',
    900: '#0E3A4B',
    950: '#07232E',
  },

  // Vibrant Energy & Action: Lime Green
  lime: {
    50: '#FAFEE8',
    100: '#F3FDC6',
    200: '#E7FB92',
    300: '#D6F557',
    400: '#B8D932', // Brand Lime (Primary CTA, glow accents)
    500: '#9CBA1F', // Lime Dark (Hover state, high contrast)
    600: '#7C9514',
    700: '#5E7312',
    800: '#4A5A13',
    900: '#3E4D14',
    950: '#202B06',
  },

  // Neutral Editorial Slate: Ink & Grayscale
  ink: {
    50: '#F5F8FA', // Canvas page background
    100: '#EEF3F7', // Alternate row / card hover background
    200: '#DCE4EA', // Divider & border line
    300: '#CAD5DE',
    400: '#929AA2', // Silver secondary text / subtle labels
    500: '#76828C',
    600: '#5E6B75', // Muted body text / descriptions
    700: '#47535C',
    800: '#35414A',
    900: '#27343E', // Core ink (primary readable text)
    950: '#161E24', // Ultra dark text
  },

  // Semantic Status: Success / Active (Zap)
  zap: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    500: '#22C55E',
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    whatsapp: '#25D366', // Official WhatsApp brand color
  },

  // Semantic Status: Warning / Highlight (Sun)
  sun: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    500: '#F59E0B',
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
  },

  // Semantic Status: Danger / Error (Pop)
  pop: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    500: '#EF4444',
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
  },

  // Semantic Status: Information (Sky)
  sky: {
    50: '#F0F9FF',
    100: '#E0F2FE',
    200: '#BAE6FD',
    500: '#0EA5E9',
    600: '#0284C7',
    700: '#0369A1',
  },

  // Semantic Surface Mappings
  surface: {
    canvas: '#F5F8FA',
    card: '#FFFFFF',
    elevated: '#FFFFFF',
    border: '#DCE4EA',
    borderSubtle: '#EEF3F7',
    line: '#DCE4EA',
    silver: '#929AA2',
  },

  // Absolute Base Tokens
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const

export const spacing = {
  0: 0,
  2: 2,
  4: 4,
  8: 8,
  12: 12,
  16: 16,
  20: 20,
  24: 24,
  32: 32,
  40: 40,
  48: 48,
  56: 56,
  64: 64,
  80: 80,
  96: 96,
  128: 128,

  // Semantic layout aliases
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  section: 64,
  sectionLg: 96,
} as const

export const borderRadius = {
  none: 0,
  xs: 4,
  small: 8,     // Inputs, sub-items, small badges
  button: 10,   // Standard buttons (--radius-btn: 10px)
  medium: 12,   // Dropdown menus, tooltips, toasts
  large: 16,    // Content cards, modal dialogs (--radius-card: 16px)
  xlarge: 24,   // Featured hero panels, large containers
  xxlarge: 32,  // Section banners, floating popouts
  pill: 9999,   // Action pills, round tags, FAB buttons
  full: 9999,
} as const

export const shadows = {
  none: {
    css: 'none',
    elevation: 0,
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  card: {
    css: '0 1px 2px rgb(13 49 80 / 0.04), 0 8px 24px -12px rgb(13 49 80 / 0.12)',
    elevation: 2,
    shadowColor: '#0D3150',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
  },
  lift: {
    css: '0 2px 4px rgb(13 49 80 / 0.06), 0 18px 40px -16px rgb(13 49 80 / 0.22)',
    elevation: 6,
    shadowColor: '#0D3150',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 20,
  },
  fab: {
    css: '0 4px 14px 0 rgba(37, 211, 102, 0.39)',
    elevation: 5,
    shadowColor: '#25D366',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
  },
  popover: {
    css: '0 10px 38px -10px rgba(13, 49, 80, 0.2), 0 10px 20px -15px rgba(13, 49, 80, 0.12)',
    elevation: 8,
    shadowColor: '#0D3150',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
  },
} as const

export const theme = {
  colors,
  spacing,
  borderRadius,
  shadows,
  typography,
} as const

export type Theme = typeof theme
export type ColorPalette = typeof colors
export type SpacingScale = typeof spacing
export type BorderRadiusScale = typeof borderRadius
export type ShadowTokens = typeof shadows

export default theme
