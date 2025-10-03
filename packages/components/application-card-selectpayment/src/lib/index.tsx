'use client'

import type { RadioProps } from '@vx-oss/react'

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  cn,
  Radio,
  RadioGroup
} from '@vx-oss/react'

import type { SVGProps } from 'react'
import React from 'react'

const CardSelectPayment = ({ data }: { data: cardProps }) => {
  return (
    <Card className="w-[420px]">
      <CardHeader className="flex flex-col items-start px-6 pt-5 pb-0">
        <h4 className="text-large font-medium">{data.title}</h4>
        <p className="text-tiny text-default-400">{data.subtitle}</p>
      </CardHeader>
      <CardBody>
        <RadioGroup aria-label="Plans" classNames={{ wrapper: 'gap-3' }}>
          {data.payments.map(payment => (
            <PaymentMethodRadio
              key={payment.value}
              description={payment.description}
              icon={payment.icon}
              label={payment.label}
              value={payment.value}
              isExpired={payment.isExpired}
              isRecommended={payment.isRecommended}
            />
          ))}
        </RadioGroup>
        <p className="text-tiny text-default-400 pt-4 pl-1">
          {data.description}
        </p>
      </CardBody>
      <CardFooter className="justify-end gap-2 px-4">{data.actions}</CardFooter>
    </Card>
  )
}

export { CardSelectPayment }

const PaymentMethodRadio = React.forwardRef<
  HTMLInputElement,
  PaymentMethodRadioProps
>(
  (
    {
      label,
      children,
      description,
      icon,
      isExpired,
      isRecommended,
      classNames = {},
      className,
      ...props
    },
    ref
  ) => (
    <Radio
      ref={ref}
      {...props}
      classNames={{
        ...classNames,
        base: cn(
          'm-0 inline-flex max-w-full items-center justify-between px-3 py-4',
          '3 border-medium! border-default-100 w-full cursor-pointer flex-row-reverse rounded-lg',
          'data-[selected=true]:border-primary',
          classNames?.base,
          className
        ),
        labelWrapper: cn('ml-0', classNames?.labelWrapper)
      }}
      color="primary">
      <div className="flex w-full items-center gap-3">
        <div className="item-center rounded-small flex p-2">{icon}</div>
        <div className="flex w-full flex-col gap-1">
          <div className="flex items-center gap-3">
            <p className="text-small">{label}</p>
            {isExpired && (
              <Chip className="text-tiny h-6 p-0" color="danger">
                Expired
              </Chip>
            )}
            {isRecommended && (
              <Chip
                className="text-tiny h-6 p-0"
                color="success"
                variant="flat">
                Recommended
              </Chip>
            )}
          </div>
          <p className="text-tiny text-default-400">
            {description || children}
          </p>
        </div>
      </div>
    </Radio>
  )
)

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type paymentProps = {
  description: string
  icon: React.ReactNode
  label: string
  value: string
  isExpired?: boolean
  isRecommended?: boolean
}

export type PaymentMethodRadioProps = RadioProps & {
  icon?: React.ReactNode
  label?: string
  isExpired?: boolean
  isRecommended?: boolean
}

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  payments: paymentProps[]
  subtitle?: string
  description?: string
  footerText?: string
  actions?: React.ReactNode
  footerActions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
