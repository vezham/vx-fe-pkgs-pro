'use client'

import { Card, CardBody, CardHeader } from '@vx-oss/react'

import type { SwitchProps } from '@vx-oss/react'

import { cn, extendVariants, Switch } from '@vx-oss/react'
import React from 'react'

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

const CellWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-medium bg-content2 flex items-center justify-between gap-2 p-4',
      className
    )}
    {...props}>
    {children}
  </div>
))

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

const CardSecuritySettings = ({ data }: { data: cardProps }) => {
  return (
    <Card className="w-full max-w-lg p-2">
      <CardHeader className="flex flex-col items-start px-4 pt-4 pb-0">
        <p className="text-large">{data.title}</p>
        <p className="text-small text-default-500">{data.subtitle}</p>
      </CardHeader>
      <CardBody className="space-y-2">
        {data.header?.map((cell, idx) => (
          <CellWrapper key={idx}>
            <div>
              <p>{cell.heading}</p>
              {cell.subheading && (
                <p className="text-small text-default-500">{cell.subheading}</p>
              )}
              {cell.description && (
                <p className="text-small">{cell.description}</p>
              )}
              {cell.text && (
                <p className="text-small text-success">{cell.text}</p>
              )}
            </div>
            {cell.action && <div>{cell.action}</div>}
          </CellWrapper>
        ))}
        {data.toggle?.map((t, idx) => (
          <SwitchCell
            key={idx}
            defaultSelected={t.defaultselected}
            description={t.description}
            label={t.label}
          />
        ))}
        {data.footer?.map((cell, idx) => (
          <CellWrapper key={idx}>
            <div>
              <p>{cell.heading}</p>
              {cell.subheading && (
                <p className="text-small text-default-500">{cell.subheading}</p>
              )}
              {cell.description && (
                <p className="text-small">{cell.description}</p>
              )}
              {cell.text && (
                <p className="text-small text-success">{cell.text}</p>
              )}
            </div>
            {cell.action && <div>{cell.action}</div>}
          </CellWrapper>
        ))}
      </CardBody>
    </Card>
  )
}

export { CardSecuritySettings }

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

export type CellProps = {
  heading?: string
  subheading?: string
  description?: string
  text?: string
  action?: React.ReactNode
}

export type cardProps = {
  title?: string
  subtitle?: string
  toggle: switchtoggleProps[]
  header: CellProps[]
  footer: CellProps[]
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
