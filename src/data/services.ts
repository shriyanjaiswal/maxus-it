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
          'Yes. We can integrate an intuitive Content Management System (CMS) or custom admin dashboard so your team can easily update text, images, and publish new content without coding.',
      },
      {
        question: 'Do you provide hosting and maintenance?',
        answer:
          'Yes. We offer turnkey cloud hosting, domain setup, SSL security certificates, regular automated backups, and ongoing technical maintenance packages tailored to your traffic needs.',
      },
    ],
    pending: [
      'Corporate Websites & Service Portals',
      'Custom E-commerce & Payment Gateways',
      'Headless CMS & Content Management',
      'Speed Optimization & Technical SEO',
      'Managed Cloud Hosting & SSL Setup',
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
          'We begin with a detailed discovery session to analyze your operational pain points, followed by a formal scope of work covering screen wireframes, database architecture, and release milestones.',
      },
      {
        question: 'Can existing data be brought across?',
        answer:
          'Yes. We perform structured data migration from spreadsheets, legacy databases, or existing accounting tools into your new custom software with full data validation.',
      },
    ],
    pending: [
      'Custom Web Applications & Portals',
      'Enterprise Database Architecture',
      'Third-party API & Hardware Integrations',
      'Multi-tier Role Permissions & Auditing',
      'Continuous Support & SLA Maintenance',
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
          'Yes. Our billing solutions feature automated GST calculation, HSN/SAC code management, multi-tax rate support, E-way bill generation, and compliant tax invoice printing.',
      },
      {
        question: 'Can we keep our current invoice layout?',
        answer:
          'Yes. We customize invoice layouts to match your existing branding, stationery, company letterhead, and thermal or standard A4/A5 printer formats.',
      },
    ],
    pending: [
      'GST-Compliant Invoicing & Tax Calculations',
      'Custom Thermal & A4 Invoice Print Templates',
      'Customer & Vendor Ledger Reconciliation',
      'Outstanding Receivables & Aging Reports',
      'Tally & Accounting Export Capabilities',
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
          'We offer modular ERP solutions covering Procurement, Inventory Control, Sales Order Processing, Billing & Finance, Production Tracking, and Human Resource Management.',
      },
      {
        question: 'Is implementation customised?',
        answer:
          'Yes. Every module is tailored to match your organizational hierarchy, department approval chains, and specific business operating procedures.',
      },
    ],
    pending: [
      'Supply Chain & Procurement Management',
      'Order Management & Dispatch Workflows',
      'Centralized Financial & Tax Reporting',
      'Departmental Role-Based Access Controls',
      'Executive KPI Dashboards & Analytics',
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
          'Yes. We support 1D/2D barcode and QR code scanners, handheld mobile scanners, and barcode label printing for rapid stock intake and dispatch.',
      },
      {
        question: 'Can multiple locations be tracked?',
        answer:
          'Yes. Our multi-warehouse architecture tracks live inventory levels, stock transfers, and valuation across multiple branches, godowns, and retail outlets.',
      },
    ],
    pending: [
      'Real-time Stock Tracking & Low-Stock Alerts',
      'Barcode & QR Code Scanning Integration',
      'Multi-Warehouse & Godown Stock Transfers',
      'Batch Numbers & Expiry Date Management',
      'Dead Stock & Inventory Valuation Reports',
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
          'Yes. We develop cross-platform applications using modern frameworks like React Native and Flutter, ensuring native performance and shared logic across both iOS and Android.',
      },
      {
        question: 'What happens after launch?',
        answer:
          'We provide end-to-end post-launch support, including OS update compatibility, bug fixes, performance monitoring, and feature iteration.',
      },
    ],
    pending: [
      'iOS & Android App Store Deployment',
      'Offline Data Caching & Cloud Sync',
      'Push Notifications & Messaging Integrations',
      'Biometric Authentication (FaceID/Fingerprint)',
      'Payment Gateway & In-App Transactions',
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
          'Yes. We manage targeted Google Ads (Search & Display), Meta advertising (Facebook & Instagram), and local map campaigns structured for maximum return on ad spend.',
      },
      {
        question: 'How is progress reported?',
        answer:
          'We provide transparent monthly reports tracking search keyword rankings, website traffic, conversion rates, and acquisition costs.',
      },
    ],
    pending: [
      'Search Engine Optimization (On-Page & Technical)',
      'Google Search Ads & Meta Performance Marketing',
      'Google Business Profile & Local Map Optimization',
      'Conversion Rate & Lead Funnel Optimization',
      'Monthly Analytics & Performance Reporting',
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
          'We have delivered custom solutions for manufacturing plants, wholesale textile & garment distributors, retail chains, logistics providers, and professional service firms.',
      },
      {
        question: 'Can you show a relevant past project?',
        answer:
          'Yes. We showcase live solution architectures and workflows during our technical consultation to demonstrate direct relevance to your business model.',
      },
    ],
    pending: [
      'Wholesale & Distribution Management',
      'Manufacturing & Production Tracking',
      'Retail POS & Multi-Store Inventory',
      'Healthcare & Clinic Management Portals',
      'Logistics & Dispatch Fleet Coordination',
    ],
  },
]

export const getService = (slug?: string) => services.find((s) => s.slug === slug)
