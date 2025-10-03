'use client'

import { Tab, Tabs } from '@vx-oss/react'

import { Card } from '@vx-oss/react'
import React from 'react'

import type { SwitchProps } from '@vx-oss/react'

const CardSettingsTabs = ({ data }: { data: cardProps[] }) => {
  return (
    <Card>
      <Tabs
        classNames={{
          tabList: 'mx-4 mt-6 text-medium',
          tabContent: 'text-small'
        }}
        size="lg">
        {data.map(tab => (
          <Tab key={tab.key} textValue={tab.textValue} title={tab.title}>
            {tab.children}
          </Tab>
        ))}
      </Tabs>
    </Card>
  )
}

export { CardSettingsTabs }

export type SwitchCellProps = Omit<SwitchProps, 'color'> & {
  label: string
  description: string
  color?: SwitchProps['color'] | 'foreground'
  classNames?: SwitchProps['classNames'] & {
    description?: string | string[]
  }
}

export type countryProp = {
  name: string
  code: string
}

export type switchtoggleProps = {
  label: string
  description: string
  defaultselected?: boolean
}

export type CellProps = {
  heading?: string
  subheading?: string
  description?: string
  text?: string
  action?: React.ReactNode
}

export type cardProps = {
  key?: string
  textValue?: string
  title?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export type cardAccountProps = {
  title?: string
  subtitle?: string
  name?: string
  role?: string
  description?: string
  countries?: countryProp[]
  actions?: React.ReactNode
  footerActions?: React.ReactNode
}
export type cardNotificationProps = {
  title?: string
  subtitle?: string
  toggle: switchtoggleProps[]
  actions?: React.ReactNode
}
export type cardSecurityProps = {
  title?: string
  subtitle?: string
  toggle: switchtoggleProps[]
  header: CellProps[]
  footer: CellProps[]
  actions?: React.ReactNode
}
