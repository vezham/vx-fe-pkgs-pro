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
import React, { SVGProps } from 'react'

const NavbarCentered = ({
  data,
  ...props
}: NavbarProps & { data: navProps }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Navbar
      {...props}
      isBordered
      classNames={{
        base: cn('border-default-100', {
          'bg-default-200/50 dark:bg-default-100/50': isMenuOpen
        }),
        wrapper: 'w-full justify-center bg-transparent',
        item: 'hidden md:flex'
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      <NavbarMenuToggle className="text-default-400 md:hidden" />

      <NavbarBrand>
        <div className="bg-foreground text-background rounded-full">
          {data.logo}
        </div>
        <span className="ml-2 font-medium">{data.brand}</span>
      </NavbarBrand>
      <NavbarContent
        className="border-small border-default-200/20 bg-background/60 shadow-medium dark:bg-default-100/50 hidden h-11 gap-4 rounded-full px-4 backdrop-blur-md backdrop-saturate-150 md:flex"
        justify="center">
        {data.navItems.map((item, index) => {
          const isActive = index === 2
          return (
            <NavbarItem key={index} isActive={isActive}>
              <Link
                className={cn(
                  'text-default-500',
                  isActive && 'text-foreground font-medium'
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
      <NavbarContent justify="end">{data.actions}</NavbarContent>
      <NavbarMenu
        className="bg-default-200/50 shadow-medium dark:bg-default-100/50 top-[calc(var(--navbar-height)-1px)] max-h-[70vh] pt-6 backdrop-blur-md backdrop-saturate-150"
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

export { NavbarCentered }

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
  className?: string
  children?: React.ReactNode
}
