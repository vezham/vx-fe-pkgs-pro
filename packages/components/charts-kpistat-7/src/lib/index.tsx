'use client'

import { Icon } from '@iconify/react'
import { Card, Chip } from '@vx-oss/react'
import React from 'react'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'

import { cn } from './types'

const KPIStatCard: React.FC<KpiStatProps & { index: number }> = ({
  title,
  value,
  changeType,
  change,
  chartData,
  trendChipPosition = 'bottom',
  formatValue,
  formatWeekday,
  handleMouseEnter,
  handleMouseLeave,
  index
}) => {
  const trendChipContent = React.useCallback(
    ({
      changeType,
      change,
      trendChipPosition
    }: Pick<KpiStatProps, 'changeType' | 'change' | 'trendChipPosition'>) => (
      <div
        className={cn({
          'self-start': trendChipPosition === 'top',
          'self-end': trendChipPosition === 'bottom'
        })}>
        <Chip
          classNames={{ content: 'font-medium' }}
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
              <Icon height={16} icon="solar:arrow-right-up-linear" width={16} />
            ) : changeType === 'neutral' ? (
              <Icon height={16} icon="solar:arrow-right-linear" width={16} />
            ) : (
              <Icon
                height={16}
                icon="solar:arrow-right-down-linear"
                width={16}
              />
            )
          }
          variant="flat">
          <span>{change}</span>
        </Chip>
      </div>
    ),
    []
  )

  return (
    <Card
      key={index}
      className="dark:border-default-100 min-h-[120px] border border-transparent px-4">
      <section className="flex h-full flex-nowrap items-center justify-between">
        <div className="flex h-full flex-col gap-y-3 py-4 md:flex-row md:justify-between md:gap-x-2">
          <div className="flex h-full w-full flex-col justify-between gap-y-3">
            <dt className="text-default-500 flex items-center gap-x-2 text-base font-medium">
              {title}
              <div className="md:hidden">
                {trendChipContent({
                  changeType,
                  change,
                  trendChipPosition
                })}
              </div>
            </dt>
            <div className="flex gap-x-2">
              <dd className="text-default-700 text-3xl font-semibold">
                {value}
              </dd>
              <div
                className={cn('hidden md:block', {
                  'self-start': trendChipPosition === 'top',
                  'self-end': trendChipPosition === 'bottom'
                })}>
                {trendChipContent({
                  changeType,
                  change,
                  trendChipPosition
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[120px] w-[180px] shrink-0 items-center">
          <ResponsiveContainer
            className="[&_.recharts-surface]:outline-hidden"
            height="100%"
            width="100%">
            <BarChart
              accessibilityLayer
              barSize={12}
              data={chartData}
              id={`chart-${index}`}
              margin={{ top: 24, bottom: 4 }}>
              <XAxis
                axisLine={false}
                dataKey="weekday"
                style={{ fontSize: 'var(--heroui-font-size-tiny)' }}
                tickLine={false}
              />
              <Tooltip
                content={({ label, payload }) =>
                  label && payload && payload[0] ? (
                    <div className="rounded-medium bg-background text-tiny shadow-small flex h-8 min-w-[80px] items-center gap-x-2 p-2">
                      <div className="bg-foreground h-2 w-2 rounded-xs" />
                      <span className="text-default-500">
                        {formatWeekday(label as string)}
                      </span>
                      <span className="text-default-700 font-medium">
                        {formatValue(payload[0].value as number)}
                      </span>
                    </div>
                  ) : null
                }
                cursor={false}
              />
              <Bar
                background={{
                  fill: 'hsl(var(--heroui-default-200))',
                  radius: 8
                }}
                className="transition-colors"
                dataKey="value"
                fill="hsl(var(--heroui-foreground))"
                radius={8}
                onMouseEnter={(_, itemIndex) =>
                  handleMouseEnter(index, itemIndex)
                }
                onMouseLeave={() => handleMouseLeave(index)}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
    </Card>
  )
}

export { KPIStatCard }

// ------------------ Types ------------------

export type ChartData = {
  weekday: string
  value: number
}

export type KpiStatProps = {
  title: string
  value: string | number
  changeType: 'positive' | 'neutral' | 'negative'
  change: string
  chartData: ChartData[]
  trendChipPosition?: 'top' | 'bottom'
  formatWeekday: (weekday: string) => string
  formatValue: (value: number) => string | number
  handleMouseEnter: (chartIndex: number, itemIndex: number) => void
  handleMouseLeave: (chartIndex: number) => void
}
