type NavIconProps = {
  svg: string
  active?: boolean
}

export function NavIcon({ svg, active }: NavIconProps) {
  return (
    <span
      className={`inline-flex h-6 w-6 shrink-0 transition-[transform,stroke-width] [&>svg]:h-full [&>svg]:w-full ${
        active
          ? 'scale-105 [&_circle]:stroke-[2.25] [&_path]:stroke-[2.25]'
          : ''
      }`}
      aria-hidden
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  )
}
