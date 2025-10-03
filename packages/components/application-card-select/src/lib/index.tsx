'use client'

import { Badge, Card, CardBody, CardHeader, RadioGroup } from '@vx-oss/react'

import type { RadioProps } from '@vx-oss/react'

import { cn, Radio } from '@vx-oss/react'
import React from 'react'

const PlanRadio = React.forwardRef<HTMLInputElement, PlanRadioProps>(
  (
    {
      icon,
      monthlyPrice,
      label,
      description,
      className,
      classNames = {},
      ...props
    },
    ref
  ) => (
    <Radio
      {...props}
      ref={ref}
      classNames={{
        ...classNames,
        base: cn(
          'm-0 inline-flex max-w-full items-center justify-between px-3 py-4',
          '3 border-medium border-default-100 w-full cursor-pointer flex-row-reverse rounded-lg',
          'data-[selected=true]:border-secondary data-[selected=true]:bg-secondary-50',
          classNames?.base,
          className
        ),
        wrapper: cn(
          'group-data-[focus-visible=true]:ring-secondary',
          classNames?.wrapper
        ),
        labelWrapper: cn('ml-0', classNames?.labelWrapper)
      }}
      color="secondary">
      <div className="flex w-full items-center gap-3">
        <div className="item-center bg-secondary-50 group-data-[selected=true]:bg-secondary-100 flex rounded-full p-2">
          {icon}
        </div>
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center gap-1">
            <p className="text-small">{label}</p>
            <span className="text-tiny text-default-500 mt-0.5">
              {monthlyPrice !== undefined && ` $${monthlyPrice} per month`}
            </span>
          </div>
          <p className="text-tiny text-default-400">{description}</p>
        </div>
      </div>
    </Radio>
  )
)

const CardSelect = ({ data }: { data: cardProps }) => {
  return (
    <Card className="w-[400px]">
      <CardHeader className="flex flex-col items-start px-6 pt-5 pb-0">
        <h4 className="text-large font-medium">{data.title}</h4>
        <p className="text-tiny text-default-400">{data.subtitle}</p>
      </CardHeader>
      <CardBody>
        <RadioGroup aria-label="Plans" classNames={{ wrapper: 'gap-3' }}>
          {data.radio.map((plan, index) =>
            plan.label === 'Pro plan' ? (
              <Badge
                key={plan.value}
                showOutline
                classNames={{
                  badge:
                    'z-10 bg-secondary-50 border-small text-secondary border-secondary-200 right-5 px-2 py-1'
                }}
                content="Popular"
                size="sm"
                variant="flat">
                <PlanRadio
                  description={plan.description}
                  icon={plan.icon}
                  label={plan.label}
                  monthlyPrice={plan.monthlyPrice as number}
                  value={plan.value}
                />
              </Badge>
            ) : (
              <PlanRadio
                key={plan.value}
                description={plan.description}
                icon={plan.icon}
                label={plan.label}
                monthlyPrice={plan.monthlyPrice as number}
                value={plan.value}
              />
            )
          )}
        </RadioGroup>
        <p className="text-tiny text-default-400 pt-4 pl-1">
          {data.description}
        </p>
      </CardBody>
    </Card>
  )
}

export { CardSelect }

export type PlanRadioProps = RadioProps & {
  icon?: React.ReactNode
  monthlyPrice?: number
  label?: string
}

export type radioProps = {
  description?: string
  icon?: React.ReactNode
  label?: string
  monthlyPrice?: number | string
  value: string
}

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  radio: radioProps[]
  description?: string
  footerText?: string
  actions?: React.ReactNode
  footerActions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
