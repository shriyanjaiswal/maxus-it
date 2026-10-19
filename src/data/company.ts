/**
 * Structured content sourced from maxus_website_package/02_content_data/company.json.
 * `unverified` marks facts the client still has to confirm before launch.
 */
export const company = {
  name: 'MAXUS IT SERVICES PVT. LTD.',
  shortName: 'Maxus IT',
  tagline: 'Smart Technology. Practical Solutions. Business Growth.',
  slogan: 'THE BEST TECH, BEST FUTURE',
  website: 'www.maxusitservices.com',
  websiteUrl: 'https://www.maxusitservices.com',
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
    unverified: false,
  },
  founders: [
    { name: 'Mr. Ram Jaiswal', role: 'Co-Founder & Business Head', unverified: false },
    { name: 'Mr. Krishna Murty Iyer', role: 'Co-Founder & Director', unverified: false },
  ],
  leadership: [
    { name: 'Mr. Ram Jaiswal', role: 'Co-Founder & Business Head', badge: 'Leadership' },
    { name: 'Mr. Krishna Murty Iyer', role: 'Co-Founder & Director', badge: 'Leadership' },
    { name: 'Shriyan Jaiswal', role: 'Technical Head', badge: 'Engineering & Tech' },
    { name: 'Dr. Usha Gupta', role: 'HR & Talent Recruiter', badge: 'People & Culture' },
  ],
  contact: {
    person: 'Ram Jaiswal',
    title: 'Business Head',
    phoneDisplay: '9559335909',
    phoneDial: '+919559335909',
    whatsapp: '919559335909',
    whatsappUnverified: false,
    email: 'maxusit11@gmail.com',
    emailUnverified: false,
  },
  offices: {
    primary: {
      tag: 'Primary Headquarters (Mumbai Branch)',
      city: 'Mumbai',
      state: 'Maharashtra',
      address:
        'Office No. 32 1st Floor, Sona Udyog Industrial Estate, Parsi Panchayat Rd, Jijamata Colony, Andheri East, Parasi, Mumbai, Maharashtra 400069',
      pincode: '400069',
      shortArea: 'Andheri East, Mumbai',
    },
    varanasi: {
      tag: 'Varanasi Branch Delivery Center',
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      address:
        'D 65/269-A-R-1, Mashala Wali Gali, Lahartara, Bazardiha, Maheshpur, Bauliya, Varanasi, Uttar Pradesh 221002',
      pincode: '221002',
      shortArea: 'Lahartara, Varanasi',
    },
  },
  locations: [
    {
      city: 'Mumbai',
      state: 'Maharashtra',
      area: 'Andheri East',
      pincode: '400069',
      address:
        'Office No. 32 1st Floor, Sona Udyog Industrial Estate, Parsi Panchayat Rd, Jijamata Colony, Andheri East, Parasi, Mumbai, Maharashtra 400069',
      isPrimary: true,
      unverified: false,
    },
    {
      city: 'Varanasi',
      state: 'Uttar Pradesh',
      area: 'Lahartara',
      pincode: '221002',
      address:
        'D 65/269-A-R-1, Mashala Wali Gali, Lahartara, Bazardiha, Maheshpur, Bauliya, Varanasi, Uttar Pradesh 221002',
      isPrimary: false,
      unverified: false,
    },
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
