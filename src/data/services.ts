export type Service = {
  slug: string
  title: string
  cardTitle: string
  icon: string
  summary: string
  intro: string
  capabilities: string[]
  fitFor: string[]
  deliverables: string[]
  faqs: { question: string; answer: string }[]
  pending: string[]
}

/**
 * Titles and summaries come from maxus_website_package/02_content_data/services.json.
 * `pending` lists the capabilities the package flags as detailsToConfirm — never
 * presented to visitors as committed features.
 */
export const services: Service[] = [
  {
    slug: 'website-development',
    title: 'Website Design & Development',
    cardTitle: 'Website Design & Development',
    icon: 'monitor-smartphone',
    summary:
      'Modern, responsive websites that strengthen your brand and online presence.',
    intro:
      'Websites designed around your brand and your customers — clear structure, responsive layouts and content that loads comfortably on every screen size.',
    capabilities: [
      'Responsive layouts tested on phones, tablets and desktops',
      'Brand-focused visual design and page structure',
      'Contact and enquiry pages built around real enquiries',
      'Search-friendly headings, metadata and page speed review',
    ],
    fitFor: [
      'Businesses replacing an outdated website',
      'New ventures that need a credible online presence',
      'Companies whose current site is difficult to update',
    ],
    deliverables: [
      'Page-by-page design and content plan',
      'Developed, tested website with responsive layouts',
      'Handover notes covering what you can update yourself',
    ],
    faqs: [
      {
        question: 'Can I update the content myself?',
        answer:
          'Content editing options depend on the approach agreed for your project. We confirm the editing scope before development starts.',
      },
      {
        question: 'Do you provide hosting and maintenance?',
        answer:
          'Hosting, domain and ongoing maintenance arrangements are confirmed per project — see the pending details below.',
      },
    ],
    pending: [
      'Website types offered (business, ecommerce, catalogues)',
      'CMS and ecommerce capabilities',
      'Maintenance and hosting options and pricing',
    ],
  },
  {
    slug: 'custom-software',
    title: 'Customized Software Development',
    cardTitle: 'Customized Software Development',
    icon: 'code-2',
    summary:
      'Business-oriented software solutions for your specific operational needs.',
    intro:
      'Software built around how your business actually works, instead of forcing your workflow into a generic product.',
    capabilities: [
      'Requirement workshops mapped to written functional scope',
      'Screens and reports designed around daily operations',
      'Role-based access for owners, staff and accountants',
      'Phased rollout so teams adapt without disruption',
    ],
    fitFor: [
      'Businesses running on spreadsheets that no longer scale',
      'Off-the-shelf tools missing a critical workflow',
      'Multi-branch or multi-user operations needing shared records',
    ],
    deliverables: [
      'Documented scope and screen flow',
      'Working application with user roles',
      'Staff onboarding and usage documentation',
    ],
    faqs: [
      {
        question: 'How does a custom project usually start?',
        answer:
          'With a discussion of the operational problem, followed by a written scope covering screens, users and reports before any build begins.',
      },
      {
        question: 'Can existing data be brought across?',
        answer:
          'Data migration depends on the format of your current records; we assess it during scoping rather than assuming it.',
      },
    ],
    pending: [
      'Typical software categories delivered',
      'Supported platforms, languages and integrations',
      'Post-delivery support terms',
    ],
  },
  {
    slug: 'billing-accounting',
    title: 'Billing & Accounting Solutions',
    cardTitle: 'Billing & Accounting Solutions',
    icon: 'receipt-text',
    summary:
      'Simplify invoicing, billing and transaction records with digital solutions.',
    intro:
      'Digital billing and accounting setups that reduce manual entry, keep records consistent and make month-end review less painful.',
    capabilities: [
      'Structured invoicing and billing workflows',
      'Transaction records kept in one place',
      'Party ledgers and outstanding balance views',
      'Reports formatted for routine review',
    ],
    fitFor: [
      'Businesses issuing frequent invoices',
      'Teams reconciling payments across multiple parties',
      'Owners who need clearer visibility of receivables',
    ],
    deliverables: [
      'Configured billing and accounting workflow',
      'Invoice and report formats agreed with your team',
      'Staff guidance on day-to-day usage',
    ],
    faqs: [
      {
        question: 'Do you handle tax or GST features?',
        answer:
          'Tax handling depends on what is offered for your case — this is one of the details awaiting client confirmation before we state it publicly.',
      },
      {
        question: 'Can we keep our current invoice layout?',
        answer:
          'Invoice formats are agreed during scoping so printed and shared documents match what your customers already recognise.',
      },
    ],
    pending: [
      'Tax / GST features actually offered',
      'Invoice formats and standard reports',
      'Integrations with accounting packages',
    ],
  },
  {
    slug: 'erp-business-management',
    title: 'ERP & Business Management Solutions',
    cardTitle: 'ERP & Business Management Solutions',
    icon: 'workflow',
    summary:
      'Streamline business processes, organize operations and improve coordination.',
    intro:
      'ERP work focused on coordination — connecting purchase, stock, sales and accounts so the same information does not have to be entered twice.',
    capabilities: [
      'Process mapping across purchase, stock, sales and accounts',
      'Shared records instead of parallel department spreadsheets',
      'Role-based screens for each department',
      'Management views summarising operations',
    ],
    fitFor: [
      'Growing businesses coordinating several departments',
      'Operations still stitched together with spreadsheets',
      'Owners needing one view across branches or teams',
    ],
    deliverables: [
      'Documented process map and module scope',
      'Configured ERP modules with user roles',
      'Rollout support and departmental training',
    ],
    faqs: [
      {
        question: 'Which ERP modules do you provide?',
        answer:
          'The module list is confirmed per engagement; we do not publish a module inventory until it is verified.',
      },
      {
        question: 'Is implementation customised?',
        answer:
          'Customisation scope, reporting and implementation effort are agreed in writing after the requirement discussion.',
      },
    ],
    pending: [
      'ERP modules actually provided',
      'Implementation and customisation scope',
      'Reporting capabilities',
    ],
  },
  {
    slug: 'inventory-management',
    title: 'Inventory & Stock Management',
    cardTitle: 'Inventory & Stock Management',
    icon: 'boxes',
    summary:
      'Manage inventory, purchases, sales and stock records efficiently.',
    intro:
      'Stock systems that keep purchase, sales and balance records aligned, so what the godown holds and what the screen shows match.',
    capabilities: [
      'Purchase, sales and stock-entry workflows',
      'Live stock balances with item-wise history',
      'Low-stock and reorder visibility',
      'Records structured for routine stock review',
    ],
    fitFor: [
      'Traders and retailers managing many SKUs',
      'Businesses reconciling physical stock with records',
      'Teams needing consistent purchase and sales entries',
    ],
    deliverables: [
      'Item and category structure agreed with your team',
      'Working stock, purchase and sales modules',
      'Reporting views for stock review',
    ],
    faqs: [
      {
        question: 'Do you support barcode scanning?',
        answer:
          'Barcode support depends on the setup offered for your case and is confirmed before it appears in a proposal.',
      },
      {
        question: 'Can multiple locations be tracked?',
        answer:
          'Multi-location stock handling is one of the details awaiting confirmation; we scope it against your actual godowns or branches.',
      },
    ],
    pending: [
      'Barcode support',
      'Multi-location stock handling',
      'Reporting and integrations',
    ],
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile Application Development',
    cardTitle: 'Mobile Application Development',
    icon: 'smartphone',
    summary:
      'Mobile solutions to improve accessibility and customer engagement.',
    intro:
      'Mobile applications that extend an existing service — giving customers and staff a practical way to act from a phone.',
    capabilities: [
      'Screen flows designed for one-handed use',
      'Connection to your existing records and services',
      'Offline-tolerant behaviour where operations need it',
      'Release and store submission planning',
    ],
    fitFor: [
      'Businesses with repeat customers wanting an app',
      'Field teams capturing data on phones',
      'Existing systems that need a mobile front end',
    ],
    deliverables: [
      'Clickable screen flow before build',
      'Tested application build',
      'Store submission and release notes',
    ],
    faqs: [
      {
        question: 'Do you build for Android and iOS?',
        answer:
          'Platform coverage and whether delivery is native or cross-platform are confirmed per project before we commit to them.',
      },
      {
        question: 'What happens after launch?',
        answer:
          'Maintenance and update arrangements are agreed separately; they are not assumed in an initial build.',
      },
    ],
    pending: [
      'Android / iOS capabilities',
      'Native or cross-platform delivery',
      'App maintenance options',
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing & Online Promotion',
    cardTitle: 'Digital Marketing & Online Promotion',
    icon: 'chart-no-axes-combined',
    summary:
      'Support your digital presence through marketing and visibility services.',
    intro:
      'Practical support for being found online — a sound website foundation, clear listings and consistent visibility work.',
    capabilities: [
      'On-page structure, headings and metadata review',
      'Search-friendly content organisation',
      'Presence and listing consistency',
      'Simple reporting on what changed',
    ],
    fitFor: [
      'Businesses with a site nobody can find',
      'Local services competing on search results',
      'Brands starting structured online promotion',
    ],
    deliverables: [
      'Baseline visibility review',
      'Agreed on-page and content improvements',
      'Periodic summary of activity',
    ],
    faqs: [
      {
        question: 'Do you run paid advertising?',
        answer:
          'Paid campaigns, SEO scope and social work are confirmed per engagement — we do not advertise channels we have not verified.',
      },
      {
        question: 'How is progress reported?',
        answer:
          'Reporting cadence and the platforms covered are agreed at the start of an engagement.',
      },
    ],
    pending: [
      'SEO, paid ads and social media scope',
      'Reporting cadence',
      'Platforms actually supported',
    ],
  },
  {
    slug: 'industry-solutions',
    title: 'Customized Industry Solutions',
    cardTitle: 'Customized Industry Solutions',
    icon: 'puzzle',
    summary:
      'Technology solutions tailored to your business model and industry needs.',
    intro:
      'Where a standard product category does not fit, we start from the workflow of your trade and work backwards to the software.',
    capabilities: [
      'Workflow discovery specific to your trade',
      'Solution design around real operating constraints',
      'Combining web, software and reporting where needed',
      'Staged implementation with review points',
    ],
    fitFor: [
      'Specialist trades with unusual operating rules',
      'Businesses between two standard products',
      'Operators who need software shaped around staff routines',
    ],
    deliverables: [
      'Written workflow analysis',
      'Solution design covering systems and reports',
      'Implementation plan with review checkpoints',
    ],
    faqs: [
      {
        question: 'Which industries do you serve?',
        answer:
          'Industry experience is published only where a delivered project supports it; that list is currently awaiting client confirmation.',
      },
      {
        question: 'Can you show a relevant past project?',
        answer:
          'Reference projects are shared where the client has approved publication — see the portfolio page for approved work.',
      },
    ],
    pending: ['Industries served', 'Relevant delivered projects', 'Typical solution examples'],
  },
]

export const getService = (slug?: string) => services.find((s) => s.slug === slug)
