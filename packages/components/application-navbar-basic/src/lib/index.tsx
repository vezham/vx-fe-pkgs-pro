'use client'

import {
  cn,
  Divider,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  type NavbarProps
} from '@vx-oss/react'
import React, { SVGProps } from 'react'

const BasicNavbar = ({ data, ...props }: NavbarProps & { data: navProps }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <Navbar
      {...props}
      classNames={{
        base: cn('border-default-100', {
          'bg-default-200/50 dark:bg-default-100/50': isMenuOpen
        }),
        wrapper: 'w-full justify-center',
        item: 'hidden md:flex'
      }}
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}>
      {/* Left Content */}
      <NavbarBrand>
        <div className="bg-foreground text-background rounded-full">
          {data.logo}
        </div>
        <span className="text-small ml-2 font-medium">{data.brand}</span>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent justify="center">
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

      {/* Right Content */}
      <NavbarContent className="hidden md:flex" justify="end">
        {data.actions}
      </NavbarContent>

      {/* Mobile Menu Toggle */}
      <NavbarMenuToggle className="text-default-400 md:hidden" />

      {/* Mobile Menu */}
      <NavbarMenu className="bg-default-200/50 shadow-medium dark:bg-default-100/50 top-[calc(var(--navbar-height)-1px)] max-h-fit pt-6 pb-6 backdrop-blur-md backdrop-saturate-150">
        {data.navMenuactions}
        {data.menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="text-default-500 mb-2 w-full" href="#" size="md">
              {item}
            </Link>
            {index < data.menuItems.length - 1 && (
              <Divider className="opacity-50" />
            )}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

export { BasicNavbar }

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
