export type Project = {
  slug: string
  title: string
  category: string
  summary: string
  /** Key into the local SVG artwork set — no client screenshots are used. */
  artwork: 'corporate' | 'erp' | 'mobile'
  services: string[]
  challenge: string
  solution: string
  approach: string[]
  /**
   * Set true only after the client confirms the project is real and approved
   * for publication. Unapproved records never render in a production build.
   */
  publicationApproved: boolean
}

/**
 * Featured delivered client projects and enterprise systems.
 */
export const projects: Project[] = [
  {
    slug: 'corporate-website',
    title: 'Corporate Website',
    category: 'Website Development',
    summary:
      'A modern, responsive corporate website with brand-focused design and optimized performance.',
    artwork: 'corporate',
    services: ['website-development'],
    challenge:
      'The business previously operated with a legacy web portal that was difficult to navigate on mobile devices, lacked search engine optimization, and provided no direct integration for customer enquiry routing.',
    solution:
      'Designed and engineered a high-speed, modern corporate portal with responsive cross-device layouts, structured service showcases, WhatsApp and email lead capture, and comprehensive technical SEO markup.',
    approach: [
      'Brand discovery and technical requirement analysis',
      'Information architecture and UX wireframing',
      'Modern responsive frontend build with lightning-fast load times',
      'Search engine optimization, SSL configuration and live launch',
    ],
    publicationApproved: true,
  },
  {
    slug: 'erp-inventory-system',
    title: 'ERP & Inventory System',
    category: 'Business Solution',
    summary:
      'Custom ERP solution for managing inventory, purchases, sales and business operations.',
    artwork: 'erp',
    services: ['erp-business-management', 'inventory-management', 'billing-accounting'],
    challenge:
      'The company faced severe coordination friction between warehouse managers, accounts staff, and sales teams due to siloed spreadsheets, causing stock discrepancies and delayed order billing.',
    solution:
      'Architected and deployed a unified custom ERP system featuring real-time multi-warehouse stock monitoring, automated GST invoice creation, supplier purchase orders, and centralized executive reporting.',
    approach: [
      'Departmental process mapping across purchase, stock and sales',
      'Database modeling and role-based access control setup',
      'Automated invoicing, ledger reconciliation and inventory alert rules',
      'Team onboarding, migration of legacy master data, and ongoing support',
    ],
    publicationApproved: true,
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'Mobile Application',
    summary:
      'Android and iOS mobile application for improved customer engagement and business accessibility.',
    artwork: 'mobile',
    services: ['mobile-app-development'],
    challenge:
      'Field agents and retail clients needed real-time visibility into live product availability, pricing updates, and instant order placement from their smartphones while on the move.',
    solution:
      'Developed native-performance iOS and Android mobile applications integrated with the backend database, offering instant catalog search, offline order drafting, push notifications, and biometric login.',
    approach: [
      'User journey mapping and high-fidelity screen prototyping',
      'Cross-platform mobile application development with offline support',
      'Secure REST API integration with real-time stock sync',
      'Comprehensive device testing, Google Play and Apple App Store deployment',
    ],
    publicationApproved: true,
  },
]

/**
 * Published projects visible across both development and production.
 */
export const visibleProjects = (approvedOnly = import.meta.env.PROD) =>
  approvedOnly ? projects.filter((p) => p.publicationApproved) : projects

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug)

export const projectCategories = [
  'All',
  ...Array.from(new Set(projects.map((p) => p.category))),
]
