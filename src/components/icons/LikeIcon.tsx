import likeBlackN from '@/assets/icons/like-black-N.svg?raw'
import likeBlackY from '@/assets/icons/like-black-Y.svg?raw'
import likeNudeN from '@/assets/icons/like-nude-N.svg?raw'
import likeNudeY from '@/assets/icons/like-nude-Y.svg?raw'

export type LikeIconVariant = 'black' | 'nude'

const likeIcons = {
  black: { n: likeBlackN, y: likeBlackY },
  nude: { n: likeNudeN, y: likeNudeY },
} as const satisfies Record<
  LikeIconVariant,
  { n: string; y: string }
>

type LikeIconProps = {
  liked?: boolean
  variant?: LikeIconVariant
  className?: string
}

export function LikeIcon({
  liked = false,
  variant = 'black',
  className = 'h-8 w-8',
}: LikeIconProps) {
  const svg = liked ? likeIcons[variant].y : likeIcons[variant].n

  return (
    <span
      className={`inline-flex shrink-0 transition-transform active:scale-95 ${className} [&>svg]:h-full [&>svg]:w-full`}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
