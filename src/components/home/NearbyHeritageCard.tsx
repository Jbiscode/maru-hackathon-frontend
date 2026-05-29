import { useState } from 'react'
import { LikeIcon } from '@/components/icons/LikeIcon'
import type { HeritageCard } from '@/data/homeMock'

type NearbyHeritageCardProps = {
  card: HeritageCard
}

export function NearbyHeritageCard({ card }: NearbyHeritageCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="relative h-[320px] w-[280px] shrink-0 overflow-hidden rounded-2xl">
      <img
        src={card.image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

      <span className="absolute top-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
        {card.distance}
      </span>

      <button
        type="button"
        onClick={() => setLiked((prev) => !prev)}
        className="absolute top-3 right-3 flex items-center justify-center transition-transform active:scale-95"
        aria-pressed={liked}
        aria-label={liked ? '좋아요 취소' : '좋아요'}
      >
        <LikeIcon liked={liked} variant="black" className="h-8 w-8" />
      </button>

      <div className="absolute right-4 bottom-4 left-4 text-white">
        <p className="text-xs text-white/80">{card.location}</p>
        <h4 className="mt-1 text-lg leading-snug font-bold">{card.title}</h4>
        <p className="mt-2 flex items-center gap-1 text-sm font-medium">
          <span aria-hidden>🏛️</span>
          {card.siteName}
        </p>
      </div>
    </article>
  )
}
