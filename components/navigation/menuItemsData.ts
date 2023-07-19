import type { MenuItemProps } from './MenuItem'
import { signOut } from 'next-auth/react'

export const menuItemsData: MenuItemProps[] = [
  {
    id: 'menu-first',
    label: 'charts',
    route: '/#',
    childrenElements: [
      {
        label: 'charts workflow',
        route: '/',
      },
      {
        label: 'charts issues',
        route: '/issues',
      },
      {
        label: 'charts formats',
        route: '/formats',
      },
    ],
  },
  {
    id: 'menu-second',
    label: 'research',
    route: '/#',
    childrenElements: [
      {
        label: 'research workflow',
        route: '/research-workflow',
      },
      {
        label: 'xxx',
        route: '/xxx',
      },
    ],
  },
  {
    id: 'menu-third',
    label: 'recap',
    route: '/recap',
  },
  {
    id: 'menu-fourth',
    label: 'export',
    route: '/#',
    childrenElements: [
      {
        label: 'xxx',
        route: '/xxx',
      },
    ],
  },
  {
    id: 'menu-fifth',
    label: 'boxscore',
    route: '/boxscore',
  },
  {
    id: 'menu-sixth',
    label: 'year end',
    route: '/year-end',
  },
]

export const menuAdminItemsData: MenuItemProps[] = [
  {
    id: 'menu-admin',
    label: 'admin',
    route: '/admin',
  },
  {
    id: 'menu-logout',
    label: 'logout',
    onClick: () => signOut(),
  },
]
