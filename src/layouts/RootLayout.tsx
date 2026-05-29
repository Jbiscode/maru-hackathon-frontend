import { Outlet, useMatches } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import type { RouteHandle } from '@/types/router'

function getPageTitle(matches: ReturnType<typeof useMatches>) {
  const matchWithTitle = [...matches]
    .reverse()
    .find((match) => (match.handle as RouteHandle | undefined)?.title)

  return (matchWithTitle?.handle as RouteHandle | undefined)?.title ?? '앱'
}

export function RootLayout() {
  const matches = useMatches()
  const title = getPageTitle(matches)

  return (
    <AppShell title={title}>
      <Outlet />
    </AppShell>
  )
}
