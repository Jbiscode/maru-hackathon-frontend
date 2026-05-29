import { useState } from 'react'
import { LikeIcon } from '@/components/icons/LikeIcon'
import type { StoryPlace } from '@/data/homeMock'

type StoryPlaceHorizontalCardProps = {
  place: StoryPlace
}

export function StoryPlaceHorizontalCard({
  place,
}: StoryPlaceHorizontalCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="flex w-[300px] shrink-0 gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-[0_1px_4px_rgba(15,23,42,0.05)]">
      <img
        src={place.image}
        alt=""
        className="size-20 shrink-0 rounded-xl object-cover"
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-1">
          <span className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-0.5 text-xs font-medium text-slate-600">
            {place.category}
          </span>
          <button
            type="button"
            onClick={() => setLiked((prev) => !prev)}
            className="shrink-0"
            aria-pressed={liked}
            aria-label={liked ? '좋아요 취소' : '좋아요'}
          >
            <LikeIcon liked={liked} variant="nude" className="h-6 w-6" />
          </button>
        </div>
        <h4 className="mt-2 line-clamp-2 text-sm leading-snug font-bold text-slate-900">
          {place.title}
        </h4>
        <p className="mt-1 text-xs text-muted">{place.hashtags}</p>
      </div>
    </article>
  )
}
