import { NearbyHeritageCard } from '@/components/home/NearbyHeritageCard'
import type { HeritageCard } from '@/data/homeMock'

type NearbyHeritageSectionProps = {
  cards: HeritageCard[]
}

export function NearbyHeritageSection({ cards }: NearbyHeritageSectionProps) {
  return (
    <section className="mt-2">
      <h3 className="px-5 text-lg font-bold text-slate-900">내 주변 문화유산</h3>
      <div className="scrollbar-hide mt-4 flex gap-3 overflow-x-auto px-5 pb-1">
        {cards.map((card) => (
          <NearbyHeritageCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  )
}
