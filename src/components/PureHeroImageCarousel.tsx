import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

const bannerImages = [
  {
    src: '/assets/hero-banner-1.png',
    alt: 'Maxus IT Services - Smart Digital Solutions for Growing Businesses',
  },
  {
    src: '/assets/hero-banner-2.png',
    alt: 'Maxus IT Services - Smart IT Solutions for Tomorrow',
  },
  {
    src: '/assets/hero-banner-3.png',
    alt: 'Maxus IT Services - Global Enterprise Technology & Cloud Architectures',
  },
  {
    src: '/assets/hero-banner-4.png',
    alt: 'Maxus IT Services - From Ideas to a Brighter Future',
  },
  {
    src: '/assets/hero-banner-5.png',
    alt: 'Maxus IT Services - Technology That Moves Business Forward',
  },
]

export function PureHeroImageCarousel() {
  const [current, setCurrent] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [isPlaying])

  const nextSlide = () => setCurrent((prev) => (prev + 1) % bannerImages.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + bannerImages.length) % bannerImages.length)

  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) {
      nextSlide()
    } else if (distance < -minSwipeDistance) {
      prevSlide()
    }
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-navy-deep select-none"
      aria-label="Maxus IT Services Hero Banners"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* 16:9 on mobile for proper presence, 21:9 on tablet, 2.5:1 on desktop */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.5/1] max-h-[640px] overflow-hidden bg-navy-deep">
        {bannerImages.map((banner, idx) => (
          <div
            key={banner.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
            aria-hidden={idx !== current}
          >
            <img
              src={banner.src}
              alt={banner.alt}
              width={2400}
              height={960}
              className="h-full w-full object-cover object-center"
              loading={idx === 0 ? 'eager' : 'lazy'}
              fetchPriority={idx === 0 ? 'high' : 'auto'}
            />
          </div>
        ))}

        {/* Sleek Mobile Slide Indicator Dots */}
        <div className="flex md:hidden absolute bottom-2.5 inset-x-0 z-20 items-center justify-center gap-1.5 pointer-events-none">
          {bannerImages.map((_, idx) => (
            <span
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === current ? 'w-5 bg-lime' : 'w-1.5 bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Minimal Glass Slide Controller Overlay - Desktop Only */}
        <div className="hidden md:flex absolute bottom-5 inset-x-0 z-20 items-center justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-navy-deep/80 px-3.5 py-1.5 backdrop-blur-md shadow-xl">
            {/* Dots */}
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Hero Banners">
              {bannerImages.map((banner, idx) => (
                <button
                  key={banner.src}
                  type="button"
                  role="tab"
                  aria-selected={idx === current}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current ? 'w-7 bg-lime' : 'w-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>

            {/* Divider */}
            <span className="h-3 w-px bg-white/20 ml-1" />

            {/* Play/Pause */}
            <button
              type="button"
              onClick={() => setIsPlaying((p) => !p)}
              className="p-1 rounded-full text-white/80 hover:text-white transition-colors"
              aria-label={isPlaying ? 'Pause banner slideshow' : 'Play banner slideshow'}
            >
              {isPlaying ? <Pause className="size-3.5 text-lime" /> : <Play className="size-3.5 text-lime" />}
            </button>

            {/* Prev / Next Arrows */}
            <button
              type="button"
              onClick={prevSlide}
              className="p-1 rounded-full text-white/80 hover:text-white transition-colors"
              aria-label="Previous banner"
            >
              <ChevronLeft className="size-4" />
            </button>
            <button
              type="button"
              onClick={nextSlide}
              className="p-1 rounded-full text-white/80 hover:text-white transition-colors"
              aria-label="Next banner"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
