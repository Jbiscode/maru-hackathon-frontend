import { useCallback, useRef, type RefObject } from 'react'

type DrawerSheetHandleProps = {
  scrollRef: RefObject<HTMLDivElement | null>
}

export function DrawerSheetHandle({ scrollRef }: DrawerSheetHandleProps) {
  const dragState = useRef<{ startY: number; startScrollTop: number } | null>(
    null,
  )

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const scroller = scrollRef.current
      if (!scroller) return

      dragState.current = {
        startY: event.clientY,
        startScrollTop: scroller.scrollTop,
      }
      event.currentTarget.setPointerCapture(event.pointerId)
    },
    [scrollRef],
  )

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const scroller = scrollRef.current
      const drag = dragState.current
      if (!scroller || !drag) return

      const deltaY = drag.startY - event.clientY
      scroller.scrollTop = drag.startScrollTop + deltaY
    },
    [scrollRef],
  )

  const onPointerUp = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    dragState.current = null
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }, [])

  return (
    <div
      role="separator"
      aria-label="콘텐츠 영역을 위아래로 조절"
      className="flex touch-none cursor-grab flex-col items-center pt-3 pb-2 active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <span
        className="h-1 w-10 rounded-full bg-slate-300"
        aria-hidden
      />
    </div>
  )
}
