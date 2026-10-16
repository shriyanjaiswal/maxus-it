/**
 * Structured content sourced from maxus_website_package/02_content_data/company.json.
 * `unverified` marks facts the client still has to confirm before launch.
 */
export const company = {
  name: 'MAXUS IT SERVICES PVT. LTD.',
  shortName: 'Maxus IT',
  tagline: 'Smart Technology. Practical Solutions. Business Growth.',
  heroHeadline: 'Technology That Moves Your Business Forward.',
  heroEyebrow: 'Smart Technology. Practical Solutions. Business Growth.',
  heroDescription:
    'From professional websites and custom software to ERP, billing and inventory solutions, MAXUS IT SERVICES helps businesses simplify operations and build for the future.',
  vision:
    'To help businesses unlock their potential through innovative technology and effective digital solutions.',
  approach:
    'We listen to business requirements, understand challenges, and work toward identifying suitable technology solutions.',
  established: {
    label: 'Since June 2011',
    note: 'Our journey began in Mumbai',
    unverified: true,
  },
  founders: [
    { name: 'Mr. Ram Jaiswal', unverified: true },
    { name: 'Mr. Krishna Murty Iyer', unverified: true },
  ],
  contact: {
    person: 'Ram Jaiswal',
    title: 'Business Head',
    phoneDisplay: '9559335909',
    phoneDial: '+919559335909',
    whatsapp: '919559335909',
    whatsappUnverified: true,
    email: 'maxusit11@gail.com',
    emailUnverified: true,
  },
  locations: [
    { city: 'Mumbai', state: 'Maharashtra', unverified: true },
    { city: 'Varanasi', state: 'Uttar Pradesh', unverified: true },
  ],
  social: [
    { label: 'LinkedIn', key: 'linkedin' },
    { label: 'Facebook', key: 'facebook' },
    { label: 'Twitter', key: 'twitter' },
    { label: 'YouTube', key: 'youtube' },
  ],
} as const

export const locationsLabel = company.locations
  .map((location) => `${location.city}, ${location.state}`)
  .join(' · ')
