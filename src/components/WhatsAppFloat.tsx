import { MessageCircle } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { company } from '../data/company'
import { whatsappLink } from '../data/site'

export function WhatsAppFloat() {
  const location = useLocation()

  // Generate page-specific inquiry message
  const getContextMessage = () => {
    const path = location.pathname
    if (path.includes('garment-footwear-erp')) {
      return `Hello ${company.shortName}, I am interested in a live demo and pricing for your Garment & Footwear ERP Software.`
    }
    if (path.includes('business-erp14')) {
      return `Hello ${company.shortName}, I would like to enquire about Business ERP-14 Accounting & Touch POS software.`
    }
    if (path.includes('school-erp')) {
      return `Hello ${company.shortName}, I would like to discuss implementing your School ERP Software & Parent Mobile App.`
    }
    if (path.includes('institute-management')) {
      return `Hello ${company.shortName}, I want a demonstration of your Institute Management Software.`
    }
    if (path.includes('electronic-store-erp')) {
      return `Hello ${company.shortName}, I am interested in your Electronic Store ERP Software with IMEI tracking.`
    }
    if (path.startsWith('/services/')) {
      const serviceName = path.replace('/services/', '').replace(/-/g, ' ')
      return `Hello ${company.shortName}, I am looking for software solutions regarding ${serviceName}.`
    }
    return `Hello ${company.shortName}, I would like to schedule a software consultation for my business.`
  }

  return (
    <a
      href={whatsappLink(getContextMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MAXUS IT Services on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-(--shadow-lift) transition-transform hover:scale-110 sm:right-6 sm:bottom-6 focus-visible:outline-none"
    >
      <MessageCircle className="size-7" aria-hidden="true" strokeWidth={2} />
    </a>
  )
}
