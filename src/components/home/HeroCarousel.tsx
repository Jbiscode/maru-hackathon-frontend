import { useCallback, useRef, useState } from 'react'
import type { HeroSlide } from '@/data/homeMock'

type HeroCarouselProps = {
  slides: HeroSlide[]
  coverProgress?: number
}

export function HeroCarousel({
  slides,
  coverProgress = 0,
}: HeroCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = useCallback(() => {
    const el = scrollRef.current
    if (!el || el.clientWidth === 0) return

    const index = Math.round(el.scrollLeft / el.clientWidth)
    setActiveIndex(Math.min(index, slides.length - 1))
  }, [slides.length])

  const textOpacity = 1 - coverProgress * 0.85
  const imageScale = 1 + coverProgress * 0.08
  const imageBlurPx = coverProgress * 14
  const imageOpacity = 1 - coverProgress * 0.75

  return (
    <div className="relative h-full w-full">
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="scrollbar-hide flex h-full snap-x snap-mandatory overflow-x-auto"
      >
        {slides.map((slide) => (
          <article
            key={slide.id}
            className="relative h-full w-full shrink-0 snap-center overflow-hidden"
          >
            <img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover will-change-[filter,opacity,transform]"
              style={{
                transform: `scale(${imageScale})`,
                transformOrigin: 'center center',
                filter: `blur(${imageBlurPx}px)`,
                opacity: imageOpacity,
              }}
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-black/10"
              style={{ opacity: 1 - coverProgress * 0.4 }}
            />
            <div
              className="pointer-events-none absolute inset-0 bg-slate-100"
              style={{ opacity: coverProgress * 0.45 }}
              aria-hidden
            />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center text-white"
              style={{ opacity: textOpacity }}
            >
              <h2 className="text-xl leading-snug font-bold drop-shadow-md">
                {slide.title}
              </h2>
              <p className="mt-3 text-sm font-medium text-white/90 drop-shadow">
                {slide.hashtags}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div
        className="absolute right-5 bottom-16 flex gap-1.5 transition-opacity duration-150"
        style={{ opacity: 1 - coverProgress }}
        aria-label={`슬라이드 ${activeIndex + 1} / ${slides.length}`}
      >
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`h-1.5 w-1.5 rounded-full transition-colors ${
              index === activeIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
