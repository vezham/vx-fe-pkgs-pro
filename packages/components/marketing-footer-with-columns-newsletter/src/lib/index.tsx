'use client'

import type { IconProps } from '@iconify/react'
import { Link } from '@vx-oss/react'
import React, { JSX } from 'react'

const FooterNewsletter = ({ data }: { data: FooterProps }) => {
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
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 md:pr-8">
            <div className="flex items-center gap-2">
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
            {data.social && (
              <div className="flex space-x-6">
                {data.social.map(item => (
                  <Link
                    key={item.name}
                    isExternal
                    className="text-default-400"
                    href={item.href}>
                    <span className="sr-only">{item.name}</span>
                    <item.icon aria-hidden="true" className="w-6" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            {data.navigation?.map(section => (
              <div key={section.title}>{renderList(section)}</div>
            ))}
          </div>
        </div>

        <div className="rounded-medium bg-default-200/20 my-10 p-4 sm:my-14 sm:p-8 lg:my-16 lg:flex lg:items-center lg:justify-between lg:gap-2">
          <div>
            <h3 className="text-small text-default-600 font-semibold">
              {data.footerTitle}
            </h3>
            <p className="text-small text-default-400 mt-2">
              {data.footerSubtitle}
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            {data.actions}
          </form>
        </div>

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

export { FooterNewsletter }

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
  footerTitle?: string
  footerSubtitle?: string
  actions?: React.ReactNode
}
