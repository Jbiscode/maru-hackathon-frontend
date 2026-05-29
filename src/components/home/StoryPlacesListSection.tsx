import { SectionHeader } from '@/components/home/SectionHeader'
import { StoryPlaceListItem } from '@/components/home/StoryPlaceListItem'
import type { StoryPlace } from '@/data/homeMock'

type StoryPlacesListSectionProps = {
  places: StoryPlace[]
}

export function StoryPlacesListSection({ places }: StoryPlacesListSectionProps) {
  const listItems = places.slice(0, 3)

  return (
    <section className="mt-10">
      <SectionHeader
        title="이야기가 깃든 곳"
        onViewAll={() => {
          // TODO: 전체 목록 페이지로 이동
        }}
      />
      <ul className="mt-4 flex flex-col gap-3 px-5">
        {listItems.map((place) => (
          <li key={place.id}>
            <StoryPlaceListItem place={place} />
          </li>
        ))}
      </ul>
    </section>
  )
}
