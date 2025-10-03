'use client'

import type { IconProps } from '@iconify/react'

import { Link, Spacer } from '@vx-oss/react'
import { SVGProps } from 'react'

const CenteredFooter = ({ data }: { data: FooterProps }) => {
  const { logo, companyName, navData, socialData, copyright } = data

  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="flex items-center justify-center gap-2">
          {logo}
          {companyName && (
            <span className="text-medium font-medium">{companyName}</span>
          )}
        </div>

        <Spacer y={4} />

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
          {navData.map(item => (
            <Link
              key={item.name}
              isExternal
              className="text-default-500"
              href={item.href}
              size="sm">
              {item.name}
            </Link>
          ))}
        </div>

        <Spacer y={6} />

        <div className="flex justify-center gap-x-4">
          {socialData.map(item => (
            <Link
              key={item.name}
              isExternal
              className="text-default-400"
              href={item.href}>
              <span className="sr-only">{item.name}</span>
              {item.icon({ className: 'w-5 h-5' })}
            </Link>
          ))}
        </div>

        <Spacer y={4} />

        {copyright && (
          <p className="text-small text-default-400 mt-1 text-center">
            {copyright}
          </p>
        )}
      </div>
    </footer>
  )
}

export { CenteredFooter }

export type SocialIconProps = Omit<IconProps, 'icon'>

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type NavItem = {
  name: string
  href: string
}

export type SocialItem = {
  name: string
  href: string
  icon: (props: SocialIconProps) => React.ReactNode
}

export type FooterProps = {
  logo: React.ReactNode
  companyName?: string
  showDivider?: boolean
  navData: NavItem[]
  socialData: SocialItem[]
  copyright?: string
  className?: string
  children?: React.ReactNode
}
