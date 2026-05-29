import { Outlet, useMatches } from 'react-router-dom'
import { AppShell } from '@/components/layout/AppShell'
import type { RouteHandle } from '@/types/router'

function getRouteHandle(matches: ReturnType<typeof useMatches>) {
  const matchWithHandle = [...matches]
    .reverse()
    .find((match) => (match.handle as RouteHandle | undefined)?.title)

  return matchWithHandle?.handle as RouteHandle | undefined
}

export function RootLayout() {
  const matches = useMatches()
  const handle = getRouteHandle(matches)

  return (
    <AppShell title={handle?.title ?? '앱'} immersive={handle?.immersive}>
      <Outlet />
    </AppShell>
  )
}
