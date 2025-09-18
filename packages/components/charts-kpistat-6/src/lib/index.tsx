'use client'

import { Icon } from '@iconify/react'
import { cn } from '@vx-oss/react'
import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts'

const TrendCard = ({
  title,
  value,
  change,
  changeType,
  xaxis,
  chartData
}: KpiStatProps) => {
  return (
    <div className="rounded-medium bg-content1 shadow-small dark:border-default-100 max-h-[140px] border border-transparent p-2">
      <section className="flex flex-wrap justify-between">
        <div className="flex flex-col justify-between gap-y-2 p-4">
          <div>
            <div className="text-default-600 text-sm font-medium">{title}</div>
            <div className="mt-4">
              <span className="text-default-700 text-3xl font-semibold">
                {value}
              </span>
            </div>
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
              <Icon height={16} icon="solar:arrow-right-up-linear" width={16} />
            ) : changeType === 'neutral' ? (
              <Icon height={16} icon="solar:arrow-right-linear" width={16} />
            ) : (
              <Icon
                height={16}
                icon="solar:arrow-right-down-linear"
                width={16}
              />
            )}
            <span>{change}</span>
            <span className="text-default-400 dark:text-default-500">
              {' '}
              vs {xaxis === 'day' ? 'yesterday' : 'last ' + xaxis}
            </span>
          </div>
        </div>

        <div className="mt-10 hidden min-h-24 w-36 shrink-0 lg:block">
          <ResponsiveContainer
            className="[&_.recharts-surface]:outline-hidden"
            width="100%">
            <AreaChart accessibilityLayer data={chartData}>
              <defs>
                <linearGradient
                  id={`colorUv${title}`}
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
                domain={[
                  Math.min(...chartData.map(d => Number(d.value))),
                  'auto'
                ]}
                hide={true}
              />
              <Area
                dataKey="value"
                fill={`url(#colorUv${title})`}
                stroke={cn({
                  'hsl(var(--heroui-success))': changeType === 'positive',
                  'hsl(var(--heroui-danger))': changeType === 'negative',
                  'hsl(var(--heroui-warning))': changeType === 'neutral'
                })}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  )
}

export { TrendCard }

// ------------------ Types ------------------
export type ChartData = {
  month: string
  value: number | string | undefined
}

export type KpiStatProps = {
  title: string
  value: number | string | undefined
  chartData: ChartData[]
  xaxis: string
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
}
