import { useCallback, useRef, useState } from 'react'
import { DrawerSheetHandle } from '@/components/home/DrawerSheetHandle'
import { HeroCarousel } from '@/components/home/HeroCarousel'
import { NearbyHeritageSection } from '@/components/home/NearbyHeritageSection'
import { StoryPlacesCarouselSection } from '@/components/home/StoryPlacesCarouselSection'
import { StoryPlacesListSection } from '@/components/home/StoryPlacesListSection'
import {
  heroSlides,
  nearbyHeritageCards,
  storyPlaces,
} from '@/data/homeMock'

export function HomePage() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  const onScroll = useCallback(() => {
    setScrollY(scrollRef.current?.scrollTop ?? 0)
  }, [])

  const heroScrollRange =
    typeof window !== 'undefined' ? window.innerHeight * 0.52 : 400
  const coverProgress = Math.min(scrollY / heroScrollRange, 1)

  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      className="scrollbar-hide min-h-0 flex-1 overflow-y-auto overscroll-y-contain"
    >
      <div className="sticky top-0 z-0 h-[52dvh] shrink-0 overflow-hidden bg-black">
        <HeroCarousel slides={heroSlides} coverProgress={coverProgress} />
      </div>

      <div className="relative z-10 -mt-10 min-h-[calc(100dvh-8rem)] rounded-t-[28px] bg-slate-100 pb-24 shadow-[0_-12px_40px_rgba(15,23,42,0.14)]">
        <DrawerSheetHandle scrollRef={scrollRef} />
        <NearbyHeritageSection cards={nearbyHeritageCards} />
        <StoryPlacesListSection places={storyPlaces} />
        <StoryPlacesCarouselSection places={storyPlaces} />
      </div>
    </div>
  )
}
