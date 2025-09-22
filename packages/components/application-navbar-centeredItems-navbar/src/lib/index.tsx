'use client'

import type { NavbarProps } from '@vx-oss/react'

import {
  cn,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle
} from '@vx-oss/react'

import { SVGProps } from 'react'

const NavbarCenteredItems = ({
  data,
  ...props
}: NavbarProps & { data: navProps }) => {
  return (
    <Navbar
      {...props}
      classNames={{
        base: 'py-4 backdrop-filter-none bg-transparent',
        wrapper: 'px-0 w-full justify-center bg-transparent',
        item: 'hidden md:flex'
      }}
      height="54px">
      <NavbarContent
        className="border-small border-default-200/20 bg-background/60 shadow-medium dark:bg-default-100/50 gap-4 rounded-full px-2 backdrop-blur-md backdrop-saturate-150"
        justify="center">
        {/* Toggle */}
        <NavbarMenuToggle className="text-default-400 ml-2 md:hidden" />

        {/* Logo */}
        <NavbarBrand className="mr-2 w-[40vw] md:w-auto md:max-w-fit">
          <div className="bg-foreground text-background rounded-full">
            {data.logo}
          </div>
          <span className="ml-2 font-medium md:hidden">{data.brand}</span>
        </NavbarBrand>

        {data.navItems.map((item, index) => {
          const isActive = index === 2
          return (
            <NavbarItem
              key={index}
              isActive={isActive}
              className={index === 0 ? 'hidden md:flex' : ''}>
              <Link
                className={cn(
                  isActive ? 'text-foreground' : 'text-default-500',
                  'cursor-pointer'
                )}
                href="#"
                size="sm"
                aria-current={isActive ? 'page' : undefined}>
                {item}
              </Link>
            </NavbarItem>
          )
        })}
      </NavbarContent>

      {data.actions}
      <NavbarMenu
        className="rounded-large border-small border-default-200/20 bg-background/60 shadow-medium dark:bg-default-100/50 top-[calc(var(--navbar-height)/2)] mx-auto mt-16 max-h-[40vh] max-w-[80vw] py-6 backdrop-blur-md backdrop-saturate-150"
        motionProps={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -20 },
          transition: {
            ease: 'easeInOut',
            duration: 0.2
          }
        }}>
        {data.menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="text-default-500 w-full" href="#" size="md">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export { NavbarCenteredItems }

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type navProps = {
  brand: string
  logo?: React.ReactNode
  actions?: React.ReactNode
  navMenuactions?: React.ReactNode
  menuItems: string[]
  navItems: string[]
}
