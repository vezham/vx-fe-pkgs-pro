import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@vx-oss/react'

import React, { SVGProps } from 'react'

const NavigationHeaderBasic = ({ data }: { data: navigationHeaderProps }) => {
  const [active, setActive] = React.useState(data.navItems[1])

  return (
    <Navbar
      classNames={{
        base: 'lg:bg-transparent lg:backdrop-filter-none',
        item: 'data-[active=true]:text-primary',
        wrapper: 'px-4 sm:px-6'
      }}
      height="60px">
      <NavbarBrand>
        <NavbarMenuToggle className="mr-2 h-6 sm:hidden" />
        {data.logo}
        <p className="font-bold text-inherit">{data.title}</p>
      </NavbarBrand>

      {/* Desktop Nav Items */}
      <NavbarContent
        className="bg-content2 dark:bg-content1 ml-4 hidden h-12 w-full max-w-fit gap-4 rounded-full px-4 sm:flex"
        justify="start">
        {data.navItems.map(item => (
          <NavbarItem
            key={item}
            isActive={active === item}
            onClick={() => setActive(item)}>
            <Link
              aria-current={active === item ? 'page' : undefined}
              className="flex gap-2 text-inherit"
              href="#">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Actions */}
      <NavbarContent
        className="lg:bg-content2 lg:dark:bg-content1 ml-auto flex h-12 max-w-fit items-center gap-0 rounded-full p-0 lg:px-1"
        justify="end">
        {data.actions}
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarMenu>
        {data.navItems.map(item => (
          <NavbarMenuItem
            key={item}
            isActive={active === item}
            onClick={() => setActive(item)}>
            <Link
              aria-current={active === item ? 'page' : undefined}
              className="w-full"
              color={active === item ? 'primary' : 'foreground'}
              href="#">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export { NavigationHeaderBasic }

export type NotificationItemProps = React.HTMLAttributes<HTMLDivElement> &
  NotificationItem

export enum NotificationTabs {
  All = 'all',
  Unread = 'unread',
  Archive = 'archive'
}

export type NotificationType = 'default' | 'request' | 'file'

export type NotificationItem = {
  id: string
  isRead?: boolean
  avatar: string
  description: string
  name: string
  time: string
  type?: NotificationType
}

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type navigationHeaderProps = {
  title?: string
  logo?: React.ReactNode
  navItems: string[]
  actions?: React.ReactNode
}
