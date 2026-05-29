type SectionHeaderProps = {
  title: string
  onViewAll?: () => void
}

export function SectionHeader({ title, onViewAll }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between px-5">
      <h3 className="text-lg font-bold text-slate-900">{title}</h3>
      <button
        type="button"
        onClick={onViewAll}
        className="flex size-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
        aria-label="전체 보기"
      >
        <span className="text-lg leading-none" aria-hidden>
          ›
        </span>
      </button>
    </div>
  )
}
