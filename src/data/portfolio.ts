export type Project = {
  slug: string
  title: string
  category: string
  summary: string
  /** Key into the local SVG artwork set or custom image path. */
  artwork?: 'corporate' | 'erp' | 'mobile'
  image?: string
  services: string[]
  challenge: string
  solution: string
  approach: string[]
  keyFeatures?: string[]
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
  {
    slug: 'school-erp-software',
    title: 'School ERP Software',
    category: 'Education Solution',
    summary:
      'Complete school management solution to streamline academic, administrative, and parent communication processes in one platform.',
    image: '/assets/products/school-erp-software.jpg',
    services: ['erp-business-management', 'custom-software'],
    challenge:
      'Schools juggle paper registers, delayed fee tracking, disconnected student databases, and manual timetable scheduling, leading to administrative overhead and poor parent communication.',
    solution:
      'Engineered an all-in-one School ERP and mobile app solution encompassing student information systems, fee collection gateways, automated timetable scheduling, and instant parent broadcast notices.',
    keyFeatures: [
      'Student Management (Complete student profiles & academic history)',
      'Admission Management (Online & offline admission workflows)',
      'Attendance Management (Daily biometric and digital attendance)',
      'Examination Management (Exam creation, marks entry & report cards)',
      'Fee Management (Online fee payments, receipts & automated dues tracking)',
      'Timetable Management (Automated class, room & subject scheduling)',
      'Transport Management (School bus vehicle tracking & route planning)',
      'Library Management (Book inventory, catalog search & return tracking)',
      'Parent Communication (SMS alerts, WhatsApp notices & digital noticeboard)',
      'Reports & Analytics (Detailed administrative & academic reporting)',
    ],
    approach: [
      'Academic workflow discovery with school administrators and faculty',
      'Configuring grade tiers, fee structures, and multi-user privilege levels',
      'Deploying secure cloud web portal and native Android/iOS parent-teacher mobile apps',
      'Staff training, historic data migration, and dedicated 24/7 technical support',
    ],
    publicationApproved: true,
  },
  {
    slug: 'institute-management-software',
    title: 'Institute Management Software',
    category: 'Education Solution',
    summary:
      'Smart and simple software solution for coaching institutes, colleges, and training academies to manage admissions, courses, exams, and certifications.',
    image: '/assets/products/institute-management-software.jpg',
    services: ['erp-business-management', 'custom-software'],
    challenge:
      'Training institutes and coaching centers struggle with lead leakage, messy batch schedules, uncollected installment dues, and manual certificate creation.',
    solution:
      'Developed a modern digital campus platform with lead inquiry management, batch scheduling, automated student ID printing, exam marks processing, and instant digital certificate generation.',
    keyFeatures: [
      'Student Enquiry Management (Lead capture, inquiry source & follow-up tracking)',
      'Admission Management (Simplified paperless admission and student onboarding)',
      'Attendance Management (Precise biometric & mobile app attendance logging)',
      'Examination Management (Conduct online/offline exams & publish scores)',
      'Manage Course & Batches (Organize curriculum, course durations & time slots)',
      'Subject Setting (Configure multi-stream curriculum and syllabus)',
      'Certification Issue (Automated design, verification & issuance of certificates)',
      'Print Student ID Card (Custom branded ID card template generation & printing)',
      'Pending Reports & Analysis (Real-time financial dues and batch performance)',
      'Multi-User Roles (Admin, instructors, receptionists and student portal)',
    ],
    approach: [
      'Batch scheduling and course architecture setup for coaching/institutes',
      'Payment installment rules, receipt generation, and SMS reminder triggers',
      'Secure portal rollout with student verification & certificate validation lookup',
      'Onboarding reception and teaching staff with comprehensive support',
    ],
    publicationApproved: true,
  },
  {
    slug: 'electronic-store-erp-software',
    title: 'Electronic Store ERP Software',
    category: 'Retail & ERP Solution',
    summary:
      'Powerful ERP software for electronics, home appliances, mobile, and IT retail stores to handle multi-branch inventory, serial tracking, warranty, and GST billing.',
    image: '/assets/products/electronic-store-erp-software.jpg',
    services: ['erp-business-management', 'inventory-management', 'billing-accounting'],
    challenge:
      'Electronics and gadget retailers manage complex serial number tracking, brand/model variants, IMEI logs, manufacturer warranty claims, and multi-branch inventory.',
    solution:
      'Delivered a specialized retail ERP system featuring barcode/serial-number tracking, instant GST point-of-sale checkout, customer warranty status lookup, and multi-store warehouse coordination.',
    keyFeatures: [
      'Product Management (Manage stock, brand, model, specs & category hierarchy)',
      'Inventory Management (Real-time stock tracking with low-stock reorder alerts)',
      'Sales & Purchase (Order management, vendor invoicing, dispatch & rapid POS)',
      'Customer Management (Customer purchase history, loyalty rewards & service log)',
      'Warranty & Service (Track manufacturer warranty & manage repair service requests)',
      'Reports & Business Analytics (Daily gross margins, best-sellers & revenue metrics)',
      'Financial Accounting (Comprehensive GST filing, multi-branch ledgers & TDS reports)',
      'Mobile Apps (Mobile inventory scanning, store audits & on-the-floor sales)',
      'Cloud & On-Premise (Flexible access across browser, desktop, or mobile)',
      'Multi-Store & Multi-Vendor (Unified control across retail outlets & distributor orders)',
    ],
    approach: [
      'Store audit across high-value electronics, IMEI barcodes and accessory stock',
      'Point-of-sale configuration with thermal receipt printers and barcode guns',
      'Integration of warranty claims lifecycle and GST invoice tax engines',
      'Multi-branch cloud synchronization with automated nightly data backups',
    ],
    publicationApproved: true,
  },
  {
    slug: 'garment-footwear-erp-software',
    title: 'Garment & Footwear ERP Software',
    category: 'Industry ERP Solution',
    summary:
      'Most advanced Garment & Footwear ERP software solution for retailers, wholesalers, manufacturers, and distributors to manage entire operations from design to delivery.',
    image: '/assets/products/garment-footwear-erp-software.jpg',
    services: ['erp-business-management', 'inventory-management', 'billing-accounting', 'industry-solutions'],
    challenge:
      'Garment and footwear businesses deal with matrix attributes (style, size, color), complex cut-to-finish production lifecycles, fabric wastage, seasonal inventory turnover, and multi-channel wholesale and retail POS billing.',
    solution:
      'Engineered an end-to-end industry ERP software suite covering product BOM styling, multi-stage production tracking (planning, cutting, stitching, finishing), batch stock control, mobile field sales apps, and automated WhatsApp billing.',
    keyFeatures: [
      'Product Management (Style, Size, Color matrix & Bill of Materials BOM)',
      'Inventory Management (Stock, Batch, Serial & Fabric Wastage monitoring)',
      'Production Management (Planning, Cutting, Stitching, Finishing & QC tracking)',
      'Sales & Distribution (Order booking, Invoicing, Dispatch & Retail POS)',
      'Purchase Management (Suppliers, Purchase Orders, GRN & Vendor Payments)',
      'Reports & Analytics (Real-time business insights, sales trends & profit margins)',
      'Financial Accounting (Comprehensive GST, Multi-company, TDS & Bank reconciliation)',
      'Mobile Apps (Field staff ordering, collection, catalog showcase & live stock lookup)',
      'Cloud & On-Premise (Flexible access anytime, anywhere across desktop and mobile)',
      'Auto Backup & Security (Automated cloud backup ensuring complete data protection)',
      'GST Reports & Compliance (GSTR-1, GSTR-3B, E-Way Bill & statutory compliance)',
      'Send Bill on WhatsApp (Instant digital receipts and invoices sent to customers)',
    ],
    approach: [
      'Detailed requirement analysis across garment manufacturing, wholesale, and retail POS counters',
      'Configuring size-color matrix, fabric BOM, and multi-tier distributor pricing structures',
      'Deploying centralized cloud database with offline-ready counter billing and barcode scanning',
      'Integrating automated WhatsApp invoice dispatch and mobile agent order booking app',
    ],
    publicationApproved: true,
  },
  {
    slug: 'business-erp14-accounting-software',
    title: 'Business ERP-14 Software Accounting',
    category: 'Accounting & ERP Solution',
    summary:
      'All-in-one Business ERP-14 software for smart accounting, touch POS billing, inventory tracking, and seamless operations across Retail, Manufacturing, Healthcare, Hospitality, and Agriculture.',
    image: '/assets/products/business-erp14-accounting-software.jpg',
    services: ['billing-accounting', 'inventory-management', 'erp-business-management'],
    challenge:
      'Small and mid-sized enterprises across diverse trades struggle with disjointed spreadsheets, complicated accounting tools, manual Excel data entry errors, and poor offline reliability during network outages.',
    solution:
      'Delivered Business ERP-14 — an intuitive, robust accounting and ERP platform equipped with Touch POS billing, seamless Excel import/export, automated cloud backup, offline/online synchronization, and WhatsApp bill delivery.',
    keyFeatures: [
      'Touch POS Billing (Fast, modern touch billing counter for high-volume retail)',
      'Financial Accounting (Accurate, reliable ledgers, balance sheets & profit & loss)',
      'Purchase & Inventory (Track purchase orders, supplier dues, stock levels & reorders)',
      'Sale & Purchase Management (Complete transaction lifecycle from quotation to invoice)',
      'Import / Export in Excel (Effortless two-way data migration and bulk product handling)',
      'Auto Backup (Automated safety safeguards to protect your business data round the clock)',
      'Product Replacement & Returns (Fast, hassle-free customer return & replacement logging)',
      'Online & Offline Hybrid Mode (Uninterrupted billing even when internet is unavailable)',
      'Send Bill on WhatsApp (Convenient, paperless instant invoice messaging directly to clients)',
      'Industry-Agnostic Architecture (Pre-configured for Retail Trade, Manufacturing, Distribution, Healthcare, Hospitality & Agriculture)',
    ],
    approach: [
      'Analyzing business trade workflows across retail, distribution, and manufacturing sectors',
      'Configuring fast Touch POS billing screens, barcode thermal receipt printers, and GST tax slabs',
      'Implementing seamless Excel import/export pipelines for instant existing ledger migration',
      'Setting up automated cloud backups, multi-user privilege controls, and staff training',
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
