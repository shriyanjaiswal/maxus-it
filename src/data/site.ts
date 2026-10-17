import { company } from './company'
import { services } from './services'

/**
 * Canonical URLs stay disabled until the client confirms the live domain
 * (the package ships `NEEDS_CLIENT_DOMAIN`). Set VITE_SITE_URL at build time.
 */
export const siteUrl =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://www.maxusitservices.com'

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services', children: services.map((s) => ({ label: s.title, to: `/services/${s.slug}` })) },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Process', to: '/process' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export const footerServices = [
  { label: 'Website Development', slug: 'website-development' },
  { label: 'Custom Software', slug: 'custom-software' },
  { label: 'Billing & Accounting', slug: 'billing-accounting' },
  { label: 'ERP Solutions', slug: 'erp-business-management' },
  { label: 'Inventory Management', slug: 'inventory-management' },
  { label: 'Mobile App Development', slug: 'mobile-app-development' },
  { label: 'Telegram & WhatsApp Bots', slug: 'telegram-bot-development' },
  { label: 'Meta Ads & Campaigns', slug: 'meta-ads-campaigns' },
  { label: 'Business Automation & AI', slug: 'business-automation' },
  { label: 'UI/UX Design', slug: 'ui-ux-design' },
  { label: 'Digital Marketing', slug: 'digital-marketing' },
  { label: 'Industry Solutions', slug: 'industry-solutions' },
].map((item) => ({ ...item, to: `/services/${item.slug}` }))

export const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Process', to: '/process' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Contact', to: '/contact' },
]

export const whatsappLink = (message: string) =>
  `https://wa.me/${company.contact.whatsapp}?text=${encodeURIComponent(message)}`

export const telLink = `tel:${company.contact.phoneDial}`

export const mailtoLink = (subject = 'Enquiry from the MAXUS IT SERVICES website') =>
  `mailto:${company.contact.email}?subject=${encodeURIComponent(subject)}`

export const processSteps = [
  {
    step: '01',
    title: 'Understand',
    body: 'We listen to your needs and understand your challenges.',
  },
  {
    step: '02',
    title: 'Plan',
    body: 'We identify the right technology solution for you.',
  },
  {
    step: '03',
    title: 'Implement',
    body: 'We develop and deploy the solution with care.',
  },
  {
    step: '04',
    title: 'Support',
    body: 'We provide ongoing support as agreed.',
  },
]

export const trustPoints = [
  { icon: 'users', title: 'Aligned with Your Business Needs', body: 'Solutions scoped around how you actually operate.' },
  { icon: 'gauge', title: 'Focus on Efficiency and Productivity', body: 'Less duplicated entry, clearer day-to-day records.' },
  { icon: 'shield-check', title: 'Professional Planning and Implementation', body: 'Written scope and review points before delivery.' },
  { icon: 'headphones', title: 'Technical Support and Maintenance', body: 'A named contact for questions after go-live.' },
]

export const heroHighlights = [
  { icon: 'target', title: 'Business Focused Solutions' },
  { icon: 'bar-chart-3', title: 'Practical & Scalable Technology' },
  { icon: 'headphones', title: 'Dedicated Support and Communication' },
]
