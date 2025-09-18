'use client'

import { Icon } from '@iconify/react'
import { Card, Progress, cn } from '@vx-oss/react'

const TrendCard = ({
  title,
  value,
  status,
  iconName,
  actions
}: KpiStatProps) => {
  return (
    <Card className="dark:border-default-100 flex flex-col border border-transparent p-4">
      {/* Icon */}
      <div
        className={cn(
          'flex h-8 w-8 items-center justify-center rounded-md border p-0.5',
          {
            'border-success-200 bg-success-50 dark:border-success-100':
              status === 'good',
            'border-warning-200 bg-warning-50 dark:border-warning-100':
              status === 'warn',
            'border-danger-200 bg-danger-50 dark:border-danger-100':
              status === 'danger'
          }
        )}>
        {status === 'good' ? (
          <Icon className="text-success-500" icon={iconName} width={20} />
        ) : status === 'warn' ? (
          <Icon className="text-warning-500" icon={iconName} width={20} />
        ) : (
          <Icon className="text-danger-500" icon={iconName} width={20} />
        )}
      </div>

      {/* Title + Value */}
      <div className="pt-1">
        <dt className="text-default-500 my-2 text-sm font-medium">{title}</dt>
        <dd className="text-default-700 text-2xl font-semibold">{value}%</dd>
      </div>

      {/* Progress Bar */}
      <Progress
        aria-label="status"
        className="mt-2"
        color={
          status === 'good'
            ? 'success'
            : status === 'warn'
              ? 'warning'
              : 'danger'
        }
        value={typeof value === 'number' ? value : 0}
      />

      {/* Actions */}
      {actions}
    </Card>
  )
}

export { TrendCard }

export type KpiStatProps = {
  title: string
  value: string | number | undefined
  status: 'good' | 'warn' | 'danger'
  iconName: string
  actions?: React.ReactNode
}
