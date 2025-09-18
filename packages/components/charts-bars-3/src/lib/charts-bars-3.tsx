'use client'

import type { ButtonProps, CardProps } from '@vx-oss/react'

import { Card, Select, SelectItem, cn } from '@vx-oss/react'
import React from 'react'
import {
  Bar,
  BarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

const BarChartCard = React.forwardRef<
  HTMLDivElement,
  Omit<CardProps, 'children'> & BarChartProps
>(
  (
    {
      className,
      title,
      value,
      unit,
      categories,
      color,
      actions,
      getPeriodProps,
      formatMonth,
      chartData,
      ...props
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(
          'dark:border-default-100 h-[300px] border border-transparent',
          className
        )}
        {...props}>
        <div className="flex flex-col gap-y-2 px-4 pt-4 pb-2">
          <div className="flex items-center justify-between gap-x-2">
            <dt>
              <h3 className="text-small text-default-500 font-medium">
                {title}
              </h3>
            </dt>
            <div className="flex items-center justify-end gap-x-2">
              {getPeriodProps && (
                <Select
                  aria-label="Time Range"
                  classNames={{
                    trigger: 'min-w-[100px] min-h-7 h-7',
                    value: 'text-tiny text-default-500!',
                    selectorIcon: 'text-default-500',
                    popoverContent: 'min-w-[120px]'
                  }}
                  defaultSelectedKeys={['per-day']}
                  listboxProps={{
                    itemClasses: { title: 'text-tiny' }
                  }}
                  placeholder="Select Period"
                  size="sm">
                  {Object.entries(getPeriodProps).map(([key, { label }]) => (
                    <SelectItem key={key}>{label}</SelectItem>
                  ))}
                </Select>
              )}
              {actions}
            </div>
          </div>
          <dd className="flex items-baseline gap-x-1">
            <span className="text-default-900 text-3xl font-semibold">
              {value}
            </span>
            <span className="text-medium text-default-500 font-medium">
              {unit}
            </span>
          </dd>
        </div>
        <ResponsiveContainer
          className="[&_.recharts-surface]:outline-hidden"
          height="100%"
          width="100%">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 10,
              right: 24,
              left: 20,
              bottom: 24
            }}
            /**
             * Determines how values are stacked:
             *
             * - `none` is the default, it adds values on top of each other. No smarts. Negative values will overlap.
             * - `expand` make it so that the values always add up to 1 - so the chart will look like a rectangle.
             * - `wiggle` and `silhouette` tries to keep the chart centered.
             * - `sign` stacks positive values above zero and negative values below zero. Similar to `none` but handles negatives.
             * - `positive` ignores all negative values, and then behaves like \`none\`.
             *
             * Also see https://d3js.org/d3-shape/stack#stack-offsets
             * (note that the `diverging` offset in d3 is named `sign` in recharts)
             */
            stackOffset="sign">
            <Tooltip
              content={({ payload }) => {
                const month = payload?.[0]?.payload?.month

                return (
                  <div className="rounded-medium bg-background text-tiny shadow-small flex h-auto min-w-[120px] items-center gap-x-2 p-2">
                    <div className="flex w-full flex-col gap-y-1">
                      <span className="text-foreground font-medium">
                        {month && formatMonth ? formatMonth(month) : month}
                      </span>
                      {payload?.map((p, index) => {
                        const name = p.name
                        const value = p.value
                        const category =
                          categories.find(c => c.toLowerCase() === name) ?? name

                        return (
                          <div
                            key={`${index}-${name}`}
                            className="flex w-full items-center gap-x-2">
                            <div
                              className="h-2 w-2 flex-none rounded-full"
                              style={{
                                backgroundColor:
                                  index === 0
                                    ? color === 'default'
                                      ? 'hsl(var(--heroui-foreground))'
                                      : `hsl(var(--heroui-${color}))`
                                    : 'hsl(var(--heroui-default-200))'
                              }}
                            />
                            <div className="text-default-700 flex w-full items-center justify-between gap-x-2 pr-1 text-xs">
                              <span className="text-default-500">
                                {category}
                              </span>
                              <span className="text-default-700 font-mono font-medium">
                                {value}
                              </span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                )
              }}
              cursor={false}
            />
            {[-1000, 0, 1000].map(value => (
              <ReferenceLine
                key={value}
                stroke="hsl(var(--heroui-default-200))"
                strokeDasharray="3 3"
                y={value}
              />
            ))}
            {categories.map((category, index) => (
              <Bar
                key={category}
                animationDuration={450}
                animationEasing="ease"
                barSize={8}
                dataKey={category}
                fill={
                  index === 0
                    ? cn({
                        'hsl(var(--heroui-foreground))': color === 'default',
                        'hsl(var(--heroui-success))': color === 'success',
                        'hsl(var(--heroui-warning))': color === 'warning',
                        'hsl(var(--heroui-danger))': color === 'danger',
                        'hsl(var(--heroui-primary))': color === 'primary',
                        'hsl(var(--heroui-secondary))': color === 'secondary'
                      })
                    : 'hsl(var(--heroui-default-200))'
                }
                radius={[8, 8, 0, 0]}
                stackId="stack"
              />
            ))}
          </BarChart>
        </ResponsiveContainer>

        <div className="text-tiny text-default-500 flex w-full justify-center gap-4 pb-4">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: `hsl(var(--heroui-${
                    index === 0
                      ? color === 'default'
                        ? 'foreground'
                        : color
                      : 'default-200'
                  }))`
                }}
              />
              <span className="capitalize">{category}</span>
            </div>
          ))}
        </div>
      </Card>
    )
  }
)

BarChartCard.displayName = 'BarChartCard'

export { BarChartCard }

export type ChartData = {
  month: string
  [key: string]: string | number
}

export type BarChartProps = {
  title: string
  value: string
  unit?: string
  color: ButtonProps['color']
  categories: string[]
  chartData: ChartData[]
  period?: Period
  getPeriodProps?: Record<Period, periodProps>
  actions?: React.ReactNode
  formatMonth?: (month: string) => string
}

export type Period = 'per-day' | 'per-week' | 'per-month'
export type periodProps = { label: string }
