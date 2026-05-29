import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '@/layouts/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { ProfilePage } from '@/pages/ProfilePage'
import { SearchPage } from '@/pages/SearchPage'
import { TourPage } from '@/pages/TourPage'
import type { RouteHandle } from '@/types/router'
import { paths } from '@/router/paths'

export const router = createBrowserRouter([
  {
    path: paths.home,
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        handle: { title: '홈' } satisfies RouteHandle,
      },
      {
        path: 'tour',
        Component: TourPage,
        handle: { title: '전시관' } satisfies RouteHandle,
      },
      {
        path: 'search',
        Component: SearchPage,
        handle: { title: '검색' } satisfies RouteHandle,
      },
      {
        path: 'profile',
        Component: ProfilePage,
        handle: { title: '마이페이지' } satisfies RouteHandle,
      },
      {
        path: '*',
        Component: NotFoundPage,
        handle: { title: '페이지 없음' } satisfies RouteHandle,
      },
    ],
  },
])
