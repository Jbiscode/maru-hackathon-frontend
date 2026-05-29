import { SectionHeader } from '@/components/home/SectionHeader'
import { StoryPlaceHorizontalCard } from '@/components/home/StoryPlaceHorizontalCard'
import type { StoryPlace } from '@/data/homeMock'

type StoryPlacesCarouselSectionProps = {
  places: StoryPlace[]
}

export function StoryPlacesCarouselSection({
  places,
}: StoryPlacesCarouselSectionProps) {
  return (
    <section className="mt-10 pb-8">
      <SectionHeader
        title="이야기가 깃든 곳"
        onViewAll={() => {
          // TODO: 전체 목록 페이지로 이동
        }}
      />
      <div className="scrollbar-hide mt-4 flex gap-3 overflow-x-auto px-5 pb-1">
        {places.map((place) => (
          <StoryPlaceHorizontalCard key={place.id} place={place} />
        ))}
      </div>
    </section>
  )
}
