import { useState } from 'react'
import { LikeIcon } from '@/components/icons/LikeIcon'
import type { StoryPlace } from '@/data/homeMock'

type StoryPlaceListItemProps = {
  place: StoryPlace
}

export function StoryPlaceListItem({ place }: StoryPlaceListItemProps) {
  const [liked, setLiked] = useState(false)

  return (
    <article className="flex gap-3.5 rounded-2xl bg-white p-3.5 shadow-[0_1px_4px_rgba(15,23,42,0.05)] ring-1 ring-slate-900/4">
      <img
        src={place.image}
        alt=""
        className="size-[92px] shrink-0 rounded-xl object-cover shadow-sm ring-1 ring-black/5"
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-start justify-between gap-2">
          <span className="rounded-full border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-semibold tracking-tight text-slate-600">
            {place.category}
          </span>
          <button
            type="button"
            onClick={() => setLiked((prev) => !prev)}
            className="shrink-0"
            aria-pressed={liked}
            aria-label={liked ? '좋아요 취소' : '좋아요'}
          >
            <LikeIcon liked={liked} variant="nude" className="h-7 w-7" />
          </button>
        </div>
        <h4 className="mt-2.5 line-clamp-2 text-[15px] leading-snug font-bold text-slate-900">
          {place.title}
        </h4>
        <p className="mt-2 text-xs leading-relaxed text-muted">{place.hashtags}</p>
      </div>
    </article>
  )
}
