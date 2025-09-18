'use client'

import type { ButtonProps, CardProps } from '@vx-oss/react'

import { Card, Select, SelectItem, cn } from '@vx-oss/react'
import React from 'react'
import {
  Cell,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

const CircleChartCard = React.forwardRef<
  HTMLDivElement,
  Omit<CardProps, 'children'> & CircleChartProps
>((props, ref) => {
  const {
    className,
    title,
    categories,
    color,
    unit,
    total,
    unitTitle,
    chartData,
    getPeriodProps,
    formatTotal,
    colorIndexMap,
    actions,
    ...rest
  } = props

  return (
    <Card
      ref={ref}
      className={cn(
        'dark:border-default-100 min-h-[250px] border border-transparent',
        className
      )}
      {...rest}>
      <div className="flex flex-col gap-y-2 p-4 pb-0">
        <div className="flex items-center justify-between gap-x-2">
          <dt>
            <h3 className="text-small text-default-500 font-medium">{title}</h3>
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
      </div>
      <div className="flex h-full flex-col flex-col-reverse flex-wrap gap-3 sm:flex-row sm:flex-nowrap">
        <div className="text-tiny text-default-500 flex flex-col justify-center gap-y-2 pb-4 pl-5 lg:pb-0">
          {categories.map((category, index) => {
            const title = category
            const valueText = chartData.find(c => c.name === title)?.valueText

            return (
              <div key={index} className="flex flex-col items-start gap-y-0">
                <span className="text-small text-default-500 font-medium capitalize">
                  {category}
                </span>
                <span className="text-small text-foreground font-semibold">
                  {valueText}
                </span>
              </div>
            )
          })}
        </div>
        <ResponsiveContainer
          className="[&_.recharts-surface]:outline-hidden"
          height={200}
          width="100%">
          <RadialBarChart
            barSize={10}
            cx="50%"
            cy="50%"
            data={chartData}
            endAngle={-270}
            innerRadius={90}
            outerRadius={54}
            startAngle={90}>
            <Tooltip
              content={({ payload }) => (
                <div className="rounded-medium bg-background text-tiny shadow-small flex h-8 min-w-[120px] items-center gap-x-2 px-1">
                  {payload?.map(p => {
                    const name = p.payload.name
                    const value = p.value
                    const index = chartData.findIndex(c => c.name === name)

                    return (
                      <div
                        key={`${index}-${name}`}
                        className="flex w-full items-center gap-x-2">
                        <div
                          className="h-2 w-2 flex-none rounded-full"
                          style={{
                            backgroundColor: `hsl(var(--heroui-${color}-${colorIndexMap?.(index)}))`
                          }}
                        />
                        <div className="text-default-700 flex w-full items-center justify-between gap-x-2 pr-1 text-xs">
                          <span className="text-default-500">{name}</span>
                          <span className="text-default-700 font-mono font-medium">
                            {formatTotal ? formatTotal(value) : value}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
              cursor={false}
            />
            <RadialBar
              animationDuration={1000}
              animationEasing="ease"
              background={{ fill: 'hsl(var(--heroui-default-100))' }}
              cornerRadius={12}
              dataKey="value"
              strokeWidth={0}>
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`hsl(var(--heroui-${color}-${colorIndexMap?.(index)}))`}
                />
              ))}
            </RadialBar>
            <g>
              <text textAnchor="middle" x="50%" y="48%">
                <tspan
                  className="fill-default-500 text-[0.6rem]"
                  dy="-0.5em"
                  x="50%">
                  {unitTitle}
                </tspan>
                <tspan
                  className="fill-foreground text-tiny font-semibold"
                  dy="1.5em"
                  x="50%">
                  {formatTotal ? formatTotal(total) : total} {unit}
                </tspan>
              </text>
            </g>
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
})

CircleChartCard.displayName = 'CircleChartCard'

export { CircleChartCard }

export type ChartData = {
  name: string
  value: number
  valueText: string
  [key: string]: string | number
}

export type Period = 'per-day' | 'per-week' | 'per-month'
export type periodProps = { label: string }

export type CircleChartProps = {
  title: string
  color: ButtonProps['color']
  categories: string[]
  chartData: ChartData[]
  unit?: string
  unitTitle?: string
  total?: number
  period?: Period
  actions?: React.ReactNode
  getPeriodProps?: Record<Period, periodProps>
  formatTotal?: (total: number | undefined) => string
  colorIndexMap?: (index: number) => number
}
