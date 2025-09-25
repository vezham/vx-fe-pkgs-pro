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
import { SVGProps } from 'react'

import React from 'react'

const NavigationHeaderBrandcolors = ({
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
          base: 'bg-primary',
          wrapper: 'px-4 sm:px-6',
          item: 'data-[active=true]:text-primary'
        }}
        height="64px">
        <NavbarBrand>
          <NavbarMenuToggle className="mr-2 h-6 sm:hidden" />
          {data.logo}
          <p className="font-bold text-inherit">{data.title}</p>
        </NavbarBrand>
        <Breadcrumbs className="hidden sm:flex" radius="full">
          <BreadcrumbItem
            classNames={{
              separator: 'text-primary-foreground/50',
              item: 'text-primary-foreground/50'
            }}>
            Apps
          </BreadcrumbItem>
          <BreadcrumbItem
            classNames={{
              separator: 'text-primary-foreground/50',
              item: 'text-primary-foreground/50'
            }}>
            iOS App
          </BreadcrumbItem>
          <BreadcrumbItem
            classNames={{
              separator: 'text-primary-foreground/50',
              item: 'text-primary-foreground'
            }}>
            TestFlight
          </BreadcrumbItem>
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

      <main className="mt-6 flex w-full flex-col items-center">
        <div className="w-full max-w-[1024px] px-4 lg:px-8">
          <header className="mb-6 flex w-full items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-default-900 text-xl font-bold lg:text-3xl">
                {tabs.title}
              </h1>
              <p className="text-small text-default-400 lg:text-medium">
                {tabs.subtitle}
              </p>
            </div>
            {tabs.actions}
          </header>
          <ScrollShadow
            hideScrollBar
            className="-mx-2 flex w-full justify-between gap-8"
            orientation="horizontal">
            <Tabs
              aria-label="Navigation Tabs"
              classNames={{
                cursor: 'bg-default-200 shadow-none'
              }}
              radius="full"
              variant="light">
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
            <div className="flex items-center gap-4">{tabs.tabActions}</div>
          </ScrollShadow>
        </div>
      </main>
    </div>
  )
}

export { NavigationHeaderBrandcolors }

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

export type NotificationItemProps = React.HTMLAttributes<HTMLDivElement> &
  NotificationItem

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type navigationHeaderProps = {
  title?: string
  logo?: React.ReactNode
  navItems: string[]
  actions?: React.ReactNode
}

export type tabItemProps = {
  key?: string
  title?: string | React.ReactNode
  actions?: React.ReactNode
}

export type TabProps = {
  title: string
  subtitle: string
  actions?: React.ReactNode
  tabs: tabItemProps[]
  tabActions?: React.ReactNode
}
