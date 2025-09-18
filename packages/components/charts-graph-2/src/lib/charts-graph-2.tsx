'use client'

import { Icon } from '@iconify/react'
import { Card, Chip, cn, Spacer, Tab, Tabs } from '@vx-oss/react'
import React from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis
} from 'recharts'

export const GraphCard: React.FC<{ data: Chart[]; tabs: TabData[] }> = ({
  data,
  tabs
}) => {
  const [activeChart, setActiveChart] = React.useState(data[0].key)

  const activeChartData = React.useMemo(() => {
    const chart = data.find(d => d.key === activeChart)!

    return {
      chartData: chart.chartData,
      color:
        chart.changeType === 'positive'
          ? 'success'
          : chart.changeType === 'negative'
            ? 'danger'
            : 'default',
      suffix: chart?.suffix,
      type: chart?.type,
      formatValue: chart.formatValue,
      formatMonth: chart.formatMonth,
      actions: chart.actions
    }
  }, [activeChart, data])

  const { chartData, color, suffix, type, formatMonth, formatValue, actions } =
    activeChartData

  return (
    <Card as="dl" className="dark:border-default-100 border border-transparent">
      <section className="flex flex-col flex-nowrap">
        <div className="flex flex-col justify-between gap-y-2 p-6">
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-0">
              <dt className="text-medium text-foreground font-medium">
                Analytics
              </dt>
            </div>
            <Spacer y={2} />
            <Tabs size="sm">
              {tabs.map(tab => (
                <Tab key={tab.key} title={tab.title} />
              ))}
            </Tabs>
            <div className="mt-2 flex w-full items-center">
              <div className="-my-3 flex w-full max-w-[800px] items-center gap-x-3 overflow-x-auto py-3">
                {data.map((item, index) => (
                  <button
                    key={index}
                    className={cn(
                      'rounded-medium flex w-full flex-col gap-2 p-3 transition-colors',
                      {
                        'bg-default-100': activeChart === item.key
                      }
                    )}
                    onClick={() => setActiveChart(item.key)}>
                    <span
                      className={cn(
                        'text-small text-default-500 font-medium transition-colors',
                        {
                          'text-primary': activeChart === item.key
                        }
                      )}>
                      {item.title}
                    </span>
                    <div className="flex items-center gap-x-3">
                      <span className="text-foreground text-3xl font-bold">
                        {formatValue(item.value, item.type)}
                      </span>
                      <Chip
                        classNames={{
                          content: 'font-medium'
                        }}
                        color={
                          item.changeType === 'positive'
                            ? 'success'
                            : item.changeType === 'negative'
                              ? 'danger'
                              : 'default'
                        }
                        radius="sm"
                        size="sm"
                        startContent={
                          item.changeType === 'positive' ? (
                            <Icon
                              height={16}
                              icon={'solar:arrow-right-up-linear'}
                              width={16}
                            />
                          ) : item.changeType === 'negative' ? (
                            <Icon
                              height={16}
                              icon={'solar:arrow-right-down-linear'}
                              width={16}
                            />
                          ) : (
                            <Icon
                              height={16}
                              icon={'solar:arrow-right-linear'}
                              width={16}
                            />
                          )
                        }
                        variant="flat">
                        <span>{item.change}</span>
                      </Chip>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <ResponsiveContainer
          className="min-h-[300px] [&_.recharts-surface]:outline-hidden"
          height="100%"
          width="100%">
          <AreaChart
            accessibilityLayer
            data={chartData}
            height={300}
            margin={{
              left: 0,
              right: 0
            }}
            width={500}>
            <defs>
              <linearGradient id="colorGradient" x1="0" x2="0" y1="0" y2="1">
                <stop
                  offset="10%"
                  stopColor={`hsl(var(--heroui-${color}-500))`}
                  stopOpacity={0.3}
                />
                <stop
                  offset="100%"
                  stopColor={`hsl(var(--heroui-${color}-100))`}
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid
              horizontalCoordinatesGenerator={() => [200, 150, 100, 50]}
              stroke="hsl(var(--heroui-default-200))"
              strokeDasharray="3 3"
              vertical={false}
            />
            <XAxis
              axisLine={false}
              dataKey="month"
              style={{
                fontSize: 'var(--heroui-font-size-tiny)',
                transform: 'translateX(-40px)'
              }}
              tickLine={false}
            />
            <Tooltip
              content={({ label, payload }) => (
                <div className="rounded-medium bg-foreground text-tiny shadow-small flex h-auto min-w-[120px] items-center gap-x-2 p-2">
                  <div className="flex w-full flex-col gap-y-0">
                    {payload?.map((p, index) => {
                      const name = p.name
                      const value = p.value

                      return (
                        <div
                          key={`${index}-${name}`}
                          className="flex w-full items-center gap-x-2">
                          <div className="text-small text-background flex w-full items-center gap-x-1">
                            <span>{formatValue(value as number, type)}</span>
                            <span>{suffix}</span>
                          </div>
                        </div>
                      )
                    })}
                    <span className="text-small text-foreground-400 font-medium">
                      {label ? formatMonth(String(label)) : ''} 25, 2024
                    </span>
                  </div>
                </div>
              )}
              cursor={{
                strokeWidth: 0
              }}
            />
            <Area
              activeDot={{
                stroke: `hsl(var(--heroui-${color === 'default' ? 'foreground' : color}))`,
                strokeWidth: 2,
                fill: 'hsl(var(--heroui-background))',
                r: 5
              }}
              animationDuration={1000}
              animationEasing="ease"
              dataKey="value"
              fill="url(#colorGradient)"
              stroke={`hsl(var(--heroui-${color === 'default' ? 'foreground' : color}))`}
              strokeWidth={2}
              type="monotone"
            />
            <Area
              activeDot={{
                stroke: 'hsl(var(--heroui-default-400))',
                strokeWidth: 2,
                fill: 'hsl(var(--heroui-background))',
                r: 5
              }}
              animationDuration={1000}
              animationEasing="ease"
              dataKey="lastYearValue"
              fill="transparent"
              stroke="hsl(var(--heroui-default-400))"
              strokeWidth={2}
              type="monotone"
            />
          </AreaChart>
        </ResponsiveContainer>
        {actions}
      </section>
    </Card>
  )
}

export type ChartData = {
  month: string
  value: number
  lastYearValue: number
}

export type Chart = {
  key: string
  title: string
  value: number
  suffix: string
  type: string
  change: string
  changeType: 'positive' | 'negative' | 'neutral'
  chartData: ChartData[]
  actions?: React.ReactNode
  formatValue: (value: number, type: string | undefined) => string | number
  formatMonth: (month: string) => string
}

export type TabData = {
  key: string
  title: string
}
