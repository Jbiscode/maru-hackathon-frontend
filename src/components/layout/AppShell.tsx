import type { ReactNode } from 'react'
import { BottomNav } from '@/components/layout/BottomNav'

type AppShellProps = {
  children: ReactNode
  title?: string
}

export function AppShell({ children, title = '앱' }: AppShellProps) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col bg-app-bg shadow-xl shadow-slate-200/60">
      <header className="sticky top-0 z-10 border-b border-border bg-surface/90 px-4 py-3 backdrop-blur">
        <h1 className="text-center text-lg font-semibold tracking-tight text-slate-900">
          {title}
        </h1>
      </header>

      <main className="flex-1 overflow-y-auto px-4 py-5 pb-24">{children}</main>

      <BottomNav />
    </div>
  )
}
