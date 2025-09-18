'use client'

import { Icon } from '@iconify/react'
import { Card, Progress, cn } from '@vx-oss/react'
import React from 'react'

const TrendCard = ({
  title,
  value,
  maxValue,
  color,
  iconName,
  actions
}: KpiStatProps) => {
  return (
    <Card className="dark:border-default-100 relative flex flex-col border border-transparent p-4">
      <div
        className={cn(
          'flex h-10 w-10 items-center justify-center rounded-full border',
          {
            'border-primary-200 bg-primary-50 text-primary':
              color === 'primary',
            'border-secondary-200 bg-secondary-50 text-secondary':
              color === 'secondary',
            'border-success-200 bg-success-50 text-success':
              color === 'success',
            'border-warning-200 bg-warning-50 text-warning':
              color === 'warning',
            'border-danger-200 bg-danger-50 text-danger': color === 'danger',
            'border-default-200 bg-default-50 text-default-500':
              color === 'default'
          }
        )}>
        <Icon icon={iconName} width={18} />
      </div>

      <div className="mt-2 flex flex-col gap-y-0.5 px-0.5">
        <dt className="text-medium text-default-700 font-medium">{title}</dt>
        <dd className="text-default-500 text-xs font-medium">
          ${value} of ${maxValue}
        </dd>
      </div>

      <Progress
        aria-label="status"
        className="mt-2"
        classNames={{
          track: cn('bg-default-200', {
            'bg-primary-100': color === 'primary',
            'bg-secondary-100': color === 'secondary',
            'bg-success-100': color === 'success',
            'bg-warning-100': color === 'warning',
            'bg-danger-100': color === 'danger',
            'bg-default-100': color === 'default'
          })
        }}
        color={color}
        value={(value / maxValue) * 100}
      />

      {actions}
    </Card>
  )
}

export { TrendCard }

// ------------------ Types ------------------
export type KpiStatProps = {
  title: string
  value: number
  maxValue: number
  color: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default'
  iconName: string
  actions?: React.ReactNode
}
