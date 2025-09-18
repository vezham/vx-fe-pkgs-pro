'use client'

import { Icon } from '@iconify/react'
import { Card, cn } from '@vx-oss/react'
import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts'

const TrendCard = ({
  title,
  value,
  change,
  changeType,
  actions,
  xaxis,
  chartData
}: KpiStatProps) => {
  return (
    <Card className="dark:border-default-100 border border-transparent">
      <section className="flex flex-nowrap justify-between">
        <div className="flex flex-col justify-between gap-y-2 p-4">
          <div className="flex flex-col gap-y-4">
            <dt className="text-default-600 text-sm font-medium">{title}</dt>
            <dd className="text-default-700 text-3xl font-semibold">{value}</dd>
          </div>
          <div
            className={cn(
              'mt-2 flex items-center gap-x-1 text-xs font-medium',
              {
                'text-success-500': changeType === 'positive',
                'text-warning-500': changeType === 'neutral',
                'text-danger-500': changeType === 'negative'
              }
            )}>
            {changeType === 'positive' ? (
              <Icon
                height={16}
                icon={'solar:arrow-right-up-linear'}
                width={16}
              />
            ) : changeType === 'neutral' ? (
              <Icon height={16} icon={'solar:arrow-right-linear'} width={16} />
            ) : (
              <Icon
                height={16}
                icon={'solar:arrow-right-down-linear'}
                width={16}
              />
            )}
            <span>{change}</span>
            <span className="text-default-400 dark:text-default-500">
              vs {xaxis === 'day' ? 'yesterday' : 'last ' + xaxis}
            </span>
          </div>
        </div>

        <div className="mt-10 min-h-24 w-36 min-w-[140px] shrink-0">
          <ResponsiveContainer
            className="[&_.recharts-surface]:outline-hidden"
            width="100%">
            <AreaChart accessibilityLayer data={chartData}>
              <defs>
                <linearGradient
                  id={`colorUv-${title}`}
                  x1="0"
                  x2="0"
                  y1="0"
                  y2="1">
                  <stop
                    offset="5%"
                    stopColor={cn({
                      'hsl(var(--heroui-success))': changeType === 'positive',
                      'hsl(var(--heroui-danger))': changeType === 'negative',
                      'hsl(var(--heroui-warning))': changeType === 'neutral'
                    })}
                    stopOpacity={0.2}
                  />
                  <stop
                    offset="60%"
                    stopColor={cn({
                      'hsl(var(--heroui-success))': changeType === 'positive',
                      'hsl(var(--heroui-danger))': changeType === 'negative',
                      'hsl(var(--heroui-warning))': changeType === 'neutral'
                    })}
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>
              <YAxis
                domain={[Math.min(...chartData.map(d => d.value)), 'auto']}
                hide
              />
              <Area
                dataKey="value"
                fill={`url(#colorUv-${title})`}
                stroke={cn({
                  'hsl(var(--heroui-success))': changeType === 'positive',
                  'hsl(var(--heroui-danger))': changeType === 'negative',
                  'hsl(var(--heroui-warning))': changeType === 'neutral'
                })}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {actions}
      </section>
    </Card>
  )
}

export { TrendCard }

export type ChartData = {
  month: string
  value: number
}

export type KpiStatProps = {
  title: string
  value: number | string | undefined
  change: string
  chartData: ChartData[]
  changeType: 'positive' | 'neutral' | 'negative'
  actions?: React.ReactNode
  xaxis: string
}
