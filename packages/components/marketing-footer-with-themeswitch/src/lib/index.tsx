'use client'

import { Divider } from '@vx-oss/react'
import React, { ReactNode, SVGProps } from 'react'

const FooterThemeSwitch = ({ data }: { data: FooterProps }) => {
  const {
    logo,
    companyName,
    showDivider = true,
    actions = [],
    themeSwitch,
    copyright
  } = data

  return (
    <footer className="flex w-full flex-col">
      <div className="mx-auto w-full max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col items-center justify-center gap-2 md:order-2 md:items-end">
          {themeSwitch}
        </div>
        <div className="mt-4 md:order-1 md:mt-0">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex items-center">
              {logo}
              {companyName && (
                <span className="text-small font-medium">{companyName}</span>
              )}
            </div>

            {showDivider && <Divider className="h-4" orientation="vertical" />}

            {actions.map(action => (
              <React.Fragment key={action.id}>{action.content}</React.Fragment>
            ))}
          </div>

          {copyright && (
            <p className="text-tiny text-default-400 text-center md:text-start">
              {copyright}
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}

export { FooterThemeSwitch }

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type FooterAction = {
  id: string
  content: ReactNode
}

export type FooterProps = {
  logo: React.ReactNode
  companyName?: string
  showDivider?: boolean
  actions?: FooterAction[]
  themeSwitch?: React.ReactNode
  copyright?: string
  className?: string
  children?: React.ReactNode
}

export type ThemeSwitchProps = {
  icon: string
  value: 'dark' | 'light' | 'system'
}
