'use client'

import type { IconProps } from '@iconify/react'

import { Divider, Link } from '@vx-oss/react'
import React, { JSX } from 'react'

export const FooterColumn = ({ data }: { data: FooterProps }) => {
  const renderList = React.useCallback(
    ({ title, items }: NavigationProps) => (
      <div>
        <h3 className="text-small text-default-600 font-semibold">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map(item => (
            <li key={item.name}>
              <Link className="text-default-400" href={item.href} size="sm">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    []
  )

  return (
    <footer className="flex w-full flex-col">
      <div className="max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 md:pr-8">
            <div className="flex items-center justify-start gap-2">
              {data.logo}
              {data.companyName && (
                <span className="text-medium font-medium">
                  {data.companyName}
                </span>
              )}
            </div>

            {data.description && (
              <p className="text-small text-default-500">{data.description}</p>
            )}

            <div className="flex space-x-6">
              {data.social?.map(item => (
                <Link
                  key={item.name}
                  isExternal
                  className="text-default-400"
                  href={item.href}>
                  <span className="sr-only">{item.name}</span>
                  <span aria-hidden="true" className="inline-block w-6">
                    {item.icon({ className: 'w-6 h-6' })}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {data.navigation?.map(section => (
              <div key={section.title}>{renderList(section)}</div>
            ))}
          </div>
        </div>

        <Divider className="mt-16 sm:mt-20 lg:mt-24" />

        <div className="flex flex-wrap justify-between gap-2 pt-8">
          {data.copyright && (
            <p className="text-small text-default-400">{data.copyright}</p>
          )}

          {data.themeSwitch}
        </div>
      </div>
    </footer>
  )
}

/* ---------------- Types ---------------- */

export type IconSvgProps = React.SVGProps<SVGSVGElement> & {
  size?: number
}

export type SocialIconProps = Omit<IconProps, 'icon'>

export type ThemeSwitchItem = {
  icon: string
  value: 'dark' | 'light' | 'system'
}

export type SocialItem = {
  name: string
  href: string
  icon: (props: SocialIconProps) => JSX.Element
}

export type NavigationProps = {
  title: string
  items: { name: string; href: string }[]
}

export type FooterProps = {
  logo: React.ReactNode
  companyName?: string
  description?: string
  social?: SocialItem[]
  navigation?: NavigationProps[]
  themeItems?: ThemeSwitchItem[]
  themeSwitch?: React.ReactNode
  copyright?: string
  className?: string
  children?: React.ReactNode
}
