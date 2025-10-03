'use client'

import { Icon } from '@iconify/react'
import { Card, Chip, cn } from '@vx-oss/react'
import React from 'react'

const TrendCard = ({
  title,
  value,
  change,
  changeType,
  iconName,
  trendChipPosition = 'top',
  actions
}: KpiStatProps) => {
  return (
    <Card className="dark:border-default-100 relative border border-transparent">
      <div className="flex p-4">
        <div
          className={cn(
            'mt-1 flex h-8 w-8 items-center justify-center rounded-md',
            {
              'bg-success-50': changeType === 'positive',
              'bg-warning-50': changeType === 'neutral',
              'bg-danger-50': changeType === 'negative'
            }
          )}>
          {changeType === 'positive' ? (
            <Icon className="text-success" icon={iconName} width={20} />
          ) : changeType === 'neutral' ? (
            <Icon className="text-warning" icon={iconName} width={20} />
          ) : (
            <Icon className="text-danger" icon={iconName} width={20} />
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <dt className="text-small text-default-500 mx-4 font-medium">
            {title}
          </dt>
          <dd className="text-default-700 px-4 text-2xl font-semibold">
            {value}
          </dd>
        </div>

        <Chip
          className={cn('absolute right-4', {
            'top-4': trendChipPosition === 'top',
            'bottom-4': trendChipPosition === 'bottom'
          })}
          classNames={{
            content: 'font-semibold text-[0.65rem]'
          }}
          color={
            changeType === 'positive'
              ? 'success'
              : changeType === 'neutral'
                ? 'warning'
                : 'danger'
          }
          radius="sm"
          size="sm"
          startContent={
            changeType === 'positive' ? (
              <Icon height={12} width={12} icon="solar:arrow-right-up-linear" />
            ) : changeType === 'neutral' ? (
              <Icon height={12} width={12} icon="solar:arrow-right-linear" />
            ) : (
              <Icon
                height={12}
                width={12}
                icon="solar:arrow-right-down-linear"
              />
            )
          }
          variant="flat">
          {change}
        </Chip>
      </div>

      {actions && <div className="bg-default-100">{actions}</div>}
    </Card>
  )
}

export { TrendCard }

export type KpiStatProps = {
  title: string
  value: string
  change: string
  iconName: string
  changeType: 'positive' | 'neutral' | 'negative'
  trendChipPosition?: 'top' | 'bottom'
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
