'use client'

import { Card, CardBody, CardHeader } from '@vx-oss/react'

import type { SwitchProps } from '@vx-oss/react'

import { cn, extendVariants, Switch } from '@vx-oss/react'
import React from 'react'

const SwitchCell = React.forwardRef<HTMLInputElement, SwitchCellProps>(
  ({ label, description, classNames, ...props }) => (
    <CustomSwitch
      classNames={{
        ...classNames,
        base: cn(
          'bg-content2 inline-flex w-full max-w-full flex-row-reverse items-center',
          'rounded-medium cursor-pointer justify-between gap-2 p-4',
          classNames?.base
        )
      }}
      {...props}>
      <div className="flex flex-col">
        <p className={cn('text-medium', classNames?.label)}>{label}</p>
        <p
          className={cn(
            'text-small text-default-500',
            classNames?.description
          )}>
          {description}
        </p>
      </div>
    </CustomSwitch>
  )
)

const CardNotificationSettings = ({ data }: { data: cardProps }) => {
  return (
    <Card className="w-full max-w-lg p-2">
      <CardHeader className="flex flex-col items-start px-4 pt-4 pb-0">
        <p className="text-large">{data.title}</p>
        <p className="text-small text-default-500">{data.subtitle}</p>
      </CardHeader>
      <CardBody>
        <form
          className="flex flex-col gap-2"
          onSubmit={e => e.preventDefault()}>
          {data.toggle.map((item, index) => (
            <SwitchCell
              key={index}
              label={item.label}
              description={item.description}
              defaultSelected={item.defaultselected}
            />
          ))}
          <div className="flex w-full justify-end gap-2 pt-4">
            {data.actions}
          </div>
        </form>
      </CardBody>
    </Card>
  )
}

export { CardNotificationSettings }

const CustomSwitch = extendVariants(Switch, {
  variants: {
    color: {
      foreground: {
        wrapper: [
          'group-data-[selected=true]:bg-foreground',
          'group-data-[selected=true]:text-background'
        ]
      }
    }
  }
})

export type SwitchCellProps = Omit<SwitchProps, 'color'> & {
  label: string
  description: string
  color?: SwitchProps['color'] | 'foreground'
  classNames?: SwitchProps['classNames'] & {
    description?: string | string[]
  }
}

export type switchtoggleProps = {
  label: string
  description: string
  defaultselected?: boolean
}

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  toggle: switchtoggleProps[]
  description?: string
  footerText?: string
  actions?: React.ReactNode
  footerActions?: React.ReactNode
}
