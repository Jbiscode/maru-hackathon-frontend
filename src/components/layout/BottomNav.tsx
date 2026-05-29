import { NavLink } from 'react-router-dom'
import homeIcon from '@/assets/icons/home-icon.svg?raw'
import mypageIcon from '@/assets/icons/mypage-icon.svg?raw'
import searchIcon from '@/assets/icons/search-icon.svg?raw'
import tourIcon from '@/assets/icons/tour-icon.svg?raw'
import { NavIcon } from '@/components/icons/NavIcon'
import { paths } from '@/router/paths'

const navItems = [
  { to: paths.home, label: '홈', icon: homeIcon, end: true },
  { to: paths.tour, label: '전시관', icon: tourIcon, end: false },
  { to: paths.search, label: '검색', icon: searchIcon, end: false },
  { to: paths.profile, label: '마이페이지', icon: mypageIcon, end: false },
] as const

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-1/2 z-20 w-full max-w-md -translate-x-1/2 border-t border-border bg-surface/95 px-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur">
      <ul className="grid grid-cols-4 gap-1">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex w-full flex-col items-center gap-1 rounded-xl px-1 py-2 text-xs transition-colors ${
                  isActive
                    ? 'font-semibold text-primary'
                    : 'font-medium text-muted'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <NavIcon svg={item.icon} active={isActive} />
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
