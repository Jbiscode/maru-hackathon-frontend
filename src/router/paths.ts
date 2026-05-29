export const paths = {
  home: '/',
  tour: '/tour',
  search: '/search',
  profile: '/profile',
} as const

export type AppPath = (typeof paths)[keyof typeof paths]
