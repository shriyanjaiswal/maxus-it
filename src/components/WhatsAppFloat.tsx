import { MessageCircle } from 'lucide-react'
import { company } from '../data/company'
import { whatsappLink } from '../data/site'

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(`Hello ${company.shortName}, I would like to discuss a project.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MAXUS IT Services on WhatsApp"
      className="fixed right-4 bottom-4 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-(--shadow-lift) transition-transform hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-7" aria-hidden="true" strokeWidth={2} />
    </a>
  )
}
