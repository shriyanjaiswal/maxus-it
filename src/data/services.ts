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
      'Web Application Development (Responsive, scalable and secure)',
      'Custom Software Development tailored to unique business needs',
      'ERP & CRM Solutions (Manage, automate and grow)',
      'Mobile App Development (Android, iOS & cross-platform)',
      'Cloud Solutions (Secure, flexible and scalable cloud hosting)',
      'E-commerce Solutions (Build, sell and expand online store operations)',
      'IT Consulting & Strategic Technical Support',
      'Digital Transformation & Legacy Modernization',
      'Creative & Intuitive UI/UX Design',
    ],
    fitFor: [
      'Businesses running on spreadsheets that no longer scale',
      'Off-the-shelf tools missing a critical workflow',
      'Multi-branch or multi-user operations needing shared records',
      'Enterprises seeking unified ERP, CRM, and cloud infrastructure',
    ],
    deliverables: [
      'Documented functional scope and high-fidelity screen flow',
      'Turnkey custom software application with role-based access',
      'Mobile apps for Android and iOS when required',
      'Staff onboarding, historic data migration, and dedicated SLA maintenance',
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
      'Web Application Development',
      'Custom Software Development',
      'Mobile App Development (Android & iOS)',
      'Cloud Solutions & Microservices',
      'ERP & CRM Solutions',
      'E-commerce Solutions',
      'IT Consulting & 24/7 Support',
      'Digital Transformation',
      'UI/UX Design',
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
  {
    slug: 'telegram-bot-development',
    title: 'Telegram & WhatsApp Bot Development',
    cardTitle: 'Telegram & WhatsApp Bot Development',
    icon: 'send',
    summary:
      'Automated, scalable chat bots for instant customer support, alerts, lead qualification and operational utilities.',
    intro:
      'Turn conversational channels into 24/7 automated engines. We build robust bots for Telegram and WhatsApp that answer enquiries, send critical business alerts, manage community workflows, and sync with your ERP or database.',
    capabilities: [
      'Automated customer support and conversational FAQ handling',
      'Real-time alerts for sales transactions, payment updates & dispatch',
      'Group & community automation with access control and verification',
      'Custom webhook integration with ERP, CRM, and cloud databases',
      'Interactive inline menus, command bots, and automated lead capture',
    ],
    fitFor: [
      'Businesses wanting to automate routine customer support queries',
      'Distributors needing instant dispatch alerts sent to retailer groups',
      'Trading teams requiring real-time rate updates and automated order intake',
      'Organizations managing high-volume customer communities',
    ],
    deliverables: [
      'Custom Telegram or WhatsApp Business bot architecture and flow',
      'Secure webhook server deployment on high-availability cloud infrastructure',
      'Database connection and API endpoints for live ERP/billing data lookup',
      'Admin control panel with broadcast messaging capabilities and analytics',
      'Complete documentation and handover training',
    ],
    faqs: [
      {
        question: 'Can the bot connect directly to our existing ERP or billing software?',
        answer:
          'Yes. We build custom API bridges and webhooks so your Telegram or WhatsApp bot can securely pull live data—such as order status, account balances, or inventory stock levels—directly from your database.',
      },
      {
        question: 'Is Telegram bot hosting reliable for high traffic?',
        answer:
          'Yes. We deploy bot servers with containerized Docker architecture, auto-restarts, and webhook event-driven handling, ensuring sub-second response times and 99.9% uptime even under heavy concurrent user interactions.',
      },
      {
        question: 'Can the bot accept payment confirmations and send invoices?',
        answer:
          'Yes. Bots can be configured to generate and send PDF invoices, receive payment reference numbers, or provide instant transaction receipts via automated document generation.',
      },
    ],
    pending: [
      'Telegram Customer Support Bots',
      'WhatsApp Business API Workflows',
      'Automated ERP Transaction Alerts',
      'Order Status & Inventory Bot Lookup',
      'Community Moderation & Admin Bots',
      'Lead Qualification & Broadcast Funnels',
    ],
  },
  {
    slug: 'meta-ads-campaigns',
    title: 'Meta Ads & Performance Lead Campaigns',
    cardTitle: 'Meta Ads & Performance Campaigns',
    icon: 'megaphone',
    summary:
      'Data-driven advertising campaigns across Facebook and Instagram engineered for high-intent customer acquisition and maximum ROAS.',
    intro:
      'Stop burning budget on vanity impressions. We structure targeted Meta advertising campaigns designed specifically to generate qualified B2B leads, wholesale buyer inquiries, and high-margin retail sales.',
    capabilities: [
      'Precision audience targeting based on verified business intent and geography',
      'Compelling ad creative design, copywriting, and video reels production',
      'Lead form funnels integrated directly with your CRM, WhatsApp, or email',
      'Meta Conversions API (CAPI) and Pixel integration for precise attribution',
      'Continuous A/B split testing across creatives, hooks, and audience segments',
    ],
    fitFor: [
      'Manufacturers looking for nationwide wholesale buyers and distributors',
      'Retailers launching new store openings, seasonal collections, or sales',
      'Service companies needing a steady pipeline of inbound customer inquiries',
      'Brands struggling with rising ad costs and low lead quality',
    ],
    deliverables: [
      'Complete campaign strategy, audience research, and competitor ad audit',
      'High-converting ad creatives (images, carousels, and motion graphics)',
      'Meta Business Manager setup with verified domains and CAPI tracking',
      'Automated instant lead notification delivery to your sales team via WhatsApp',
      'Transparent weekly performance reports with cost-per-lead (CPL) analytics',
    ],
    faqs: [
      {
        question: 'How do you ensure leads are genuine and not spam?',
        answer:
          'We implement custom qualifying questions inside Meta native lead forms, phone number OTP verification where needed, and audience exclusions to filter out casual browsers and ensure only genuine buyers reach your sales desk.',
      },
      {
        question: 'How quickly can our team contact leads generated by Meta Ads?',
        answer:
          'Instantly. We connect your Meta lead forms via automated webhooks so each new lead triggers an immediate WhatsApp or email alert directly to your sales executives within seconds of submission.',
      },
      {
        question: 'What monthly ad budget do we need to get started?',
        answer:
          'We recommend starting with a manageable testing budget (typically ₹15,000 to ₹30,000/month in ad spend) to test creatives and isolate winning audiences before scaling your investment.',
      },
    ],
    pending: [
      'Facebook & Instagram Lead Generation Ads',
      'B2B Wholesale & Distributor Acquisition Campaigns',
      'Meta Conversions API (CAPI) & Pixel Tracking',
      'High-Converting Ad Creatives & Video Scripts',
      'Retargeting & Lookalike Audience Strategies',
      'Instant WhatsApp Lead Routing Automation',
    ],
  },
  {
    slug: 'business-automation',
    title: 'Business Automation & AI Workflows',
    cardTitle: 'Business Automation & AI Workflows',
    icon: 'workflow',
    summary:
      'Intelligent process automation and AI integrations that eliminate repetitive manual data entry and streamline operations.',
    intro:
      'Connect your disconnected business tools into unified, automated workflows. From AI-assisted document extraction and invoice reading to automated customer notifications, we build systems that save hundreds of staff hours every month.',
    capabilities: [
      'Automated multi-system data sync between ERP, CRM, and accounting',
      'AI document extraction for automated purchase invoice & receipt parsing',
      'Trigger-based automated customer notifications via SMS, WhatsApp, and Email',
      'Custom webhook bridges connecting web portals to legacy back-office software',
      'Executive performance dashboards and automated scheduled daily sales reports',
    ],
    fitFor: [
      'Teams spending hours manually copying data between spreadsheets and software',
      'Businesses losing track of invoice approvals and operational handoffs',
      'High-volume operations needing instant dispatch and inventory syncing',
      'Executives who need automated morning summary reports delivered to WhatsApp',
    ],
    deliverables: [
      'End-to-end workflow blueprint mapping current bottlenecks to automated flows',
      'Custom automation pipelines built with enterprise-grade reliability and retries',
      'AI extraction models configured for your vendor invoice formats',
      'Audit logging and instant failure notification alerts',
      'Comprehensive staff training and system maintenance SLA',
    ],
    faqs: [
      {
        question: 'What kind of business processes can be automated?',
        answer:
          'Almost any repetitive rule-based task: syncing orders from e-commerce to your billing ERP, sending automated payment reminder messages, parsing PDF purchase orders into entries, and generating daily sales summaries.',
      },
      {
        question: 'What happens if a third-party service goes down during an automation?',
        answer:
          'Our automation pipelines incorporate robust queueing, exponential backoff retries, and error alert webhooks. If an external service experiences downtime, the data is securely queued and retried automatically once service is restored.',
      },
    ],
    pending: [
      'AI Document & Invoice Data Extraction',
      'Automated WhatsApp & Email Alert Pipelines',
      'Cross-System ERP / CRM Database Synchronization',
      'Daily Executive Sales & Financial Summaries',
      'Automated Approval Workflows & Webhooks',
    ],
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX & Digital Product Design',
    cardTitle: 'UI/UX & Digital Product Design',
    icon: 'layers',
    summary:
      'User-centric digital interfaces designed for effortless usability, high conversion rates, and brand credibility.',
    intro:
      'Great software is useless if your team or customers find it confusing. We design intuitive user interfaces and user experiences grounded in behavioral research, clean typography, responsive layouts, and modern visual design.',
    capabilities: [
      'User journey mapping, wireframing, and interactive clickable prototypes',
      'Design systems and component libraries tailored to your brand identity',
      'Mobile app UX/UI for Android and iOS with native interaction patterns',
      'Enterprise dashboard and SaaS application interface architecture',
      'Heuristic evaluation and UX audits of existing legacy applications',
    ],
    fitFor: [
      'Startups and enterprises launching new digital software or apps',
      'Companies modernizing clunky, outdated legacy software interfaces',
      'E-commerce businesses suffering from high checkout drop-off rates',
    ],
    deliverables: [
      'High-fidelity interactive Figma prototypes with complete screen flows',
      'Comprehensive design system including typography, color palette, and icons',
      'Developer-ready asset export with responsive CSS specifications',
      'Usability testing reports and optimization recommendations',
    ],
    faqs: [
      {
        question: 'Can you redesign our existing software without breaking current workflows?',
        answer:
          'Yes. We analyze how your operators currently work, preserve familiar keyboard shortcuts and primary operational sequences, and remove visual clutter to increase speed and reduce errors.',
      },
      {
        question: 'Do you deliver assets ready for frontend developers to build?',
        answer:
          'Yes. We provide complete design files in Figma with responsive auto-layout, documented component states (hover, active, disabled), exact spacing tokens, and exportable vector assets.',
      },
    ],
    pending: [
      'Mobile & Web App Interface Design',
      'Interactive Figma Prototypes & Wireframes',
      'Enterprise Dashboard UI & Data Visualization',
      'Design Systems & Brand Style Guides',
      'UX Usability Audits & Redesign Strategy',
    ],
  },
]

export const getService = (slug?: string) => services.find((s) => s.slug === slug)

