'use client'

import {
  BreadcrumbItem,
  Breadcrumbs,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  ScrollShadow,
  Tab,
  Tabs
} from '@vx-oss/react'
import React, { SVGProps } from 'react'

const NavigationHeaderTabs = ({
  data,
  tabs
}: {
  data: navigationHeaderProps
  tabs: TabProps
}) => {
  const [active, setActive] = React.useState(data.navItems[1])

  return (
    <div className="w-full">
      <Navbar
        classNames={{
          base: 'pt-2 lg:pt-4 lg:bg-transparent lg:backdrop-filter-none',
          wrapper: 'px-4 sm:px-6',
          item: 'data-[active=true]:text-primary'
        }}
        height="60px">
        <NavbarBrand>
          <NavbarMenuToggle className="mr-2 h-6 sm:hidden" />
          {data.logo}
          <p className="font-bold text-inherit">{data.title}</p>
        </NavbarBrand>

        <Breadcrumbs className="hidden lg:flex" radius="full">
          <BreadcrumbItem>Apps</BreadcrumbItem>
          <BreadcrumbItem>iOS App</BreadcrumbItem>
          <BreadcrumbItem>TestFlight</BreadcrumbItem>
        </Breadcrumbs>

        {/* Right Menu */}
        <NavbarContent
          className="ml-auto h-12 max-w-fit items-center gap-0"
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
                href={`#${item.toLowerCase()}`}
                className="w-full"
                color={active === item ? 'primary' : 'foreground'}
                aria-current={active === item ? 'page' : undefined}>
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>

      {/* Tabs Section */}
      <main className="flex w-full justify-center lg:mt-6">
        <ScrollShadow
          hideScrollBar
          className="border-divider flex w-full max-w-[1024px] justify-between gap-8 border-b px-4 sm:px-8"
          orientation="horizontal">
          <Tabs
            aria-label="Navigation Tabs"
            classNames={{
              tabList: 'w-full relative rounded-none p-0 gap-4 lg:gap-6',
              tab: 'max-w-fit px-0 h-12',
              cursor: 'w-full',
              tabContent: 'text-default-400'
            }}
            radius="full"
            variant="underlined">
            {tabs.tabs.map(tab => (
              <Tab
                key={tab.key}
                title={
                  <div className="flex items-center gap-2">
                    <p>{tab.title}</p>
                    {tab.actions}
                  </div>
                }
              />
            ))}
          </Tabs>

          {/* Right side actions beside tabs */}
          <div className="flex items-center gap-4">{tabs.actions}</div>
        </ScrollShadow>
      </main>
    </div>
  )
}

export { NavigationHeaderTabs }

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
  className?: string
  children?: React.ReactNode
}

export type tabItemProps = {
  key?: string
  title?: string | React.ReactNode
  actions?: React.ReactNode
}

export type TabProps = {
  tabs: tabItemProps[]
  actions?: React.ReactNode
}
