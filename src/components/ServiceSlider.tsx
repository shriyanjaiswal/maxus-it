import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Icon } from './Icon'
import type { Service } from '../data/services'

export function ServiceSlider({ services }: { services: Service[] }) {
  const sliderRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const checkScroll = () => {
    if (!sliderRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)

    // Calculate approximate active slide based on scroll position
    const cardWidth = clientWidth >= 1024 ? clientWidth / 3.2 : clientWidth >= 640 ? clientWidth / 2.2 : clientWidth * 0.85
    const index = Math.round(scrollLeft / cardWidth)
    setActiveIndex(Math.min(Math.max(index, 0), services.length - 1))
  }

  useEffect(() => {
    checkScroll()
    const el = sliderRef.current
    if (el) {
      el.addEventListener('scroll', checkScroll, { passive: true })
      window.addEventListener('resize', checkScroll)
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [services])

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return
    const container = sliderRef.current
    const scrollAmount = container.clientWidth * 0.8
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative group">
      {/* Top Slider Navigation Controls Bar */}
      <div className="mb-4 sm:mb-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-[11px] sm:text-xs font-bold text-muted uppercase tracking-wider">
            Showing {services.length} Specialized Services
          </span>
          <span className="hidden sm:inline-block size-1 rounded-full bg-line" />
          <span className="hidden sm:inline-block text-xs text-muted font-medium">
            Swipe or use arrows to explore
          </span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-line bg-surface text-navy shadow-xs transition-all hover:border-blue hover:text-blue disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-sm active:scale-95"
            aria-label="Scroll services left"
          >
            <ChevronLeft className="size-4.5 sm:size-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="flex size-9 sm:size-10 items-center justify-center rounded-full border border-line bg-surface text-navy shadow-xs transition-all hover:border-blue hover:text-blue disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-sm active:scale-95"
            aria-label="Scroll services right"
          >
            <ChevronRight className="size-4.5 sm:size-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={sliderRef}
        className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 sm:pb-6 pt-1 sm:pt-2 scroll-smooth snap-x snap-mandatory hide-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service, idx) => (
          <div
            key={service.slug}
            className="w-[82vw] sm:w-[320px] lg:w-[360px] shrink-0 snap-start"
          >
            <Link
              to={`/services/${service.slug}`}
              className="group flex h-full min-h-[280px] sm:min-h-[300px] flex-col justify-between rounded-2xl border border-line bg-surface p-4.5 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-blue/50 hover:shadow-lg active:scale-[0.98]"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex size-11 sm:size-12 items-center justify-center rounded-xl bg-blue-soft text-blue transition-colors group-hover:bg-navy group-hover:text-lime">
                    <Icon name={service.icon} className="size-5 sm:size-6" strokeWidth={1.8} />
                  </span>
                  <span className="font-mono text-xs font-bold text-muted/70 group-hover:text-blue transition-colors">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                <h3 className="mt-4 sm:mt-5 text-[17px] sm:text-lg font-bold text-navy font-heading group-hover:text-blue transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="mt-2 text-[13px] sm:text-sm text-muted leading-relaxed line-clamp-3">
                  {service.summary}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-line/60 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[13px] sm:text-xs font-bold text-blue group-hover:text-navy transition-colors">
                  <span>Explore Service</span>
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </span>
                <span className="text-[11px] font-semibold text-lime-dark bg-lime-dark/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Details
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Progress Dots Indicator */}
      <div className="mt-2 flex items-center justify-center gap-1.5">
        {services.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              if (!sliderRef.current) return
              const container = sliderRef.current
              const cardWidth = container.clientWidth >= 1024 ? container.clientWidth / 3.2 : container.clientWidth >= 640 ? container.clientWidth / 2.2 : container.clientWidth * 0.85
              container.scrollTo({ left: i * cardWidth, behavior: 'smooth' })
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIndex ? 'w-6 bg-blue' : 'w-1.5 bg-line hover:bg-muted'
            }`}
            aria-label={`Jump to service slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
