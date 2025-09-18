'use client'

import type { IconifyIcon } from '@iconify/react'
import type { CardProps, VariantProps } from '@vx-oss/react'

import { Icon } from '@iconify/react'
import { Card, cn } from '@vx-oss/react'
import React from 'react'
import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts'
import { chart } from './variant'

const ChartCard = React.forwardRef<HTMLDivElement, ChartCardProps>(
  (
    {
      title,
      value,
      change,
      color,
      icon,
      xaxis,
      chartData,
      index,
      actions,
      className,
      ...props
    },
    ref
  ) => {
    const classes = React.useMemo(() => chart({ color }), [color])

    console.log({ index })

    return (
      <Card
        ref={ref}
        className={classes.card({
          className
        })}
        {...props}>
        <section className="flex flex-nowrap justify-between">
          <div className="flex flex-col justify-between gap-y-2 p-4">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center gap-x-3">
                {icon && (
                  <div className={classes.iconWrapper()}>
                    <Icon
                      className="text-inherit"
                      height={16}
                      icon={icon}
                      width={16}
                    />
                  </div>
                )}
                <dt className="text-default-600 text-sm font-medium">
                  {title}
                </dt>
              </div>
              <dd className="text-default-700 text-3xl font-semibold">
                {value}
              </dd>
            </div>
            <div className={classes.trendIconWrapper()}>
              {color === 'success' ? (
                <Icon
                  height={16}
                  icon={'solar:arrow-right-up-linear'}
                  width={16}
                />
              ) : color === 'warning' ? (
                <Icon
                  height={16}
                  icon={'solar:arrow-right-linear'}
                  width={16}
                />
              ) : (
                <Icon
                  height={16}
                  icon={'solar:arrow-right-down-linear'}
                  width={16}
                />
              )}
              <span>{change}</span>
              <span className="text-default-500">
                {' '}
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
                    id={'colorUv' + index}
                    x1="0"
                    x2="0"
                    y1="0"
                    y2="1">
                    <stop
                      offset="5%"
                      stopColor={cn({
                        'hsl(var(--heroui-foreground))': color === 'default',
                        'hsl(var(--heroui-success))': color === 'success',
                        'hsl(var(--heroui-danger))': color === 'danger',
                        'hsl(var(--heroui-warning))': color === 'warning',
                        'hsl(var(--heroui-secondary))': color === 'secondary',
                        'hsl(var(--heroui-primary))': color === 'primary'
                      })}
                      stopOpacity={0.2}
                    />
                    <stop
                      offset="10%"
                      stopColor={cn({
                        'hsl(var(--heroui-foreground))': color === 'default',
                        'hsl(var(--heroui-success))': color === 'success',
                        'hsl(var(--heroui-danger))': color === 'danger',
                        'hsl(var(--heroui-warning))': color === 'warning',
                        'hsl(var(--heroui-secondary))': color === 'secondary',
                        'hsl(var(--heroui-primary))': color === 'primary'
                      })}
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <YAxis
                  domain={[Math.min(...chartData.map(d => d.value)), 'auto']}
                  hide={true}
                />
                <Area
                  dataKey="value"
                  fill={`url(#colorUv${index})`}
                  stroke={cn({
                    'hsl(var(--heroui-foreground))': color === 'default',
                    'hsl(var(--heroui-success))': color === 'success',
                    'hsl(var(--heroui-danger))': color === 'danger',
                    'hsl(var(--heroui-warning))': color === 'warning',
                    'hsl(var(--heroui-secondary))': color === 'secondary',
                    'hsl(var(--heroui-primary))': color === 'primary'
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
)

ChartCard.displayName = 'ChartCard'

export { ChartCard }

export type ChartProps = Omit<ChartCardProps, 'index'>

export type ChartData = {
  month: string
  value: number
}

export type ChartCardProps = {
  title: string
  value: number | string
  change: string
  index: number
  xaxis: 'month' | 'day'
  chartData: ChartData[]
  actions?: React.ReactNode
  icon?: IconifyIcon | string
} & Omit<CardProps, 'children' | 'classNames'> &
  VariantProps<typeof chart>
