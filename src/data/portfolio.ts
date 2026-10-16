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
 * Derived from the approved visual mockups, not from delivered client work.
 * Every record here is a layout sample until `publicationApproved` is true.
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
      'Layout sample: describe the business problem the client asked this type of project to solve.',
    solution:
      'Layout sample: describe the delivered approach, screens and integrations.',
    approach: ['Requirement discussion', 'Design and content plan', 'Build and review', 'Launch'],
    publicationApproved: false,
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
      'Layout sample: describe the operational coordination problem this project addressed.',
    solution:
      'Layout sample: describe the modules configured and how departments use them.',
    approach: ['Process mapping', 'Module configuration', 'Data setup', 'Staff onboarding'],
    publicationApproved: false,
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
      'Layout sample: describe why the business needed a mobile touchpoint.',
    solution:
      'Layout sample: describe the app flows and how they connect to existing records.',
    approach: ['Screen flows', 'Build and device testing', 'Store submission', 'Release'],
    publicationApproved: false,
  },
]

/**
 * Only approved projects ship to production. In development the samples stay
 * visible so the layout can be reviewed, always with an explicit warning.
 */
export const visibleProjects = (approvedOnly = import.meta.env.PROD) =>
  approvedOnly ? projects.filter((p) => p.publicationApproved) : projects

export const getProject = (slug?: string) => projects.find((p) => p.slug === slug)

export const projectCategories = [
  'All',
  ...Array.from(new Set(projects.map((p) => p.category))),
]
