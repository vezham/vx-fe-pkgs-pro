import type { ButtonProps, CardProps } from '@vx-oss/react'

import { Icon } from '@iconify/react'
import {
  Button,
  Card,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Select,
  SelectItem,
  cn
} from '@vx-oss/react'
import React from 'react'
import {
  Cell,
  Label,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip
} from 'recharts'

const Charts = React.forwardRef<
  HTMLDivElement,
  Omit<CardProps, 'children'> & CircleChartProps
>(
  (
    {
      className,
      title,
      value,
      unit,
      categories,
      changePercentage,
      color,
      chartData,
      changeType,
      formatStyle = 'decimal',
      ...props
    },
    ref
  ) => {
    return (
      <Card
        ref={ref}
        className={cn(
          'dark:border-default-100 min-h-[340px] border border-transparent',
          className
        )}
        {...props}>
        <div className="flex flex-col gap-y-2 p-4 pb-0">
          <div className="flex items-center justify-between gap-x-2">
            <dt>
              <h3 className="text-small text-default-500 font-medium">
                {title}
              </h3>
            </dt>
            <div className="flex items-center justify-end gap-x-2">
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
                  itemClasses: {
                    title: 'text-tiny'
                  }
                }}
                placeholder="Select Period"
                size="sm">
                {Object.entries(getPeriodProps).map(([key, { label }]) => (
                  <SelectItem key={key}>{label}</SelectItem>
                ))}
              </Select>
              <Dropdown
                classNames={{
                  content: 'min-w-[120px]'
                }}
                placement="bottom-end">
                <DropdownTrigger>
                  <Button isIconOnly radius="full" size="sm" variant="light">
                    <Icon height={16} icon="solar:menu-dots-bold" width={16} />
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  itemClasses={{
                    title: 'text-tiny'
                  }}
                  variant="flat">
                  <DropdownItem key="view-details">View Details</DropdownItem>
                  <DropdownItem key="export-data">Export Data</DropdownItem>
                  <DropdownItem key="set-alert">Set Alert</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          </div>
          <dd className="flex items-baseline gap-x-1">
            <span className="text-default-900 text-3xl font-semibold">
              {formatValue(value, getStyleValueProps[formatStyle])}
            </span>
            <span className="text-medium text-default-500 font-medium">
              {unit}
            </span>
          </dd>
        </div>

        <ResponsiveContainer
          className="[&_.reChartsCircle1-surface]:outline-hidden"
          height={200}
          width="100%">
          <PieChart
            accessibilityLayer
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <Tooltip
              content={({ label, payload }) => (
                <div className="rounded-medium bg-background text-tiny shadow-small flex h-8 min-w-[120px] items-center gap-x-2 px-1">
                  <span className="text-foreground font-medium">{label}</span>
                  {payload?.map((p, index) => {
                    const name = p.name
                    const value = p.value as number
                    const category =
                      categories.find(c => c.toLowerCase() === name) ?? name

                    return (
                      <div
                        key={`${index}-${name}`}
                        className="flex w-full items-center gap-x-2">
                        <div
                          className="h-2 w-2 flex-none rounded-full"
                          style={{
                            backgroundColor: `hsl(var(--heroui-${color}-${(index + 1) * 200}))`
                          }}
                        />
                        <div className="text-default-700 flex w-full items-center justify-between gap-x-2 pr-1 text-xs">
                          <span className="text-default-500">{category}</span>
                          <span className="text-default-700 font-mono font-medium">
                            {formatValue(
                              value,
                              getStyleValueProps[formatStyle]
                            )}
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
              cursor={false}
            />
            <Pie
              animationDuration={1000}
              animationEasing="ease"
              cornerRadius={12}
              data={chartData}
              dataKey="value"
              innerRadius="68%"
              nameKey="name"
              paddingAngle={-20}
              strokeWidth={0}>
              {chartData.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={`hsl(var(--heroui-${color}-${(index + 1) * 200}))`}
                />
              ))}
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <>
                        <Icon
                          className="text-default-400 [&>path]:stroke-2"
                          height={16}
                          icon={
                            changeType === 'positive'
                              ? 'solar:arrow-right-up-linear'
                              : changeType === 'neutral'
                                ? 'solar:arrow-right-linear'
                                : 'solar:arrow-right-down-linear'
                          }
                          width={16}
                          x={viewBox.cx! - 40}
                          y={
                            viewBox.cy! -
                            (changeType === 'positive'
                              ? 8
                              : changeType === 'negative'
                                ? 6
                                : 0)
                          }
                        />
                        <text
                          dominantBaseline="central"
                          textAnchor="middle"
                          x={viewBox.cx! + 10}
                          y={viewBox.cy!}>
                          <tspan
                            dy={
                              changeType === 'positive'
                                ? -1.5
                                : changeType === 'negative'
                                  ? 1.5
                                  : 0
                            }
                            fill="hsl(var(--heroui-default-700))"
                            fontSize={20}
                            fontWeight={600}>
                            {changePercentage}%
                          </tspan>
                        </text>
                      </>
                    )
                  }
                  return null
                }}
                position="center"
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="text-tiny text-default-500 flex w-full flex-wrap justify-center gap-4 px-4 pb-4">
          {categories.map((category, index) => (
            <div key={index} className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  backgroundColor: `hsl(var(--heroui-${color}-${(index + 1) * 200}))`
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

Charts.displayName = 'Charts'
export { Charts }

// ---------------------- Types ----------------------

export type ChartData = {
  name: string
  [key: string]: string | number
}

export type CircleChartProps = {
  title: string
  value: number
  changeType?: 'positive' | 'neutral' | 'negative'
  changePercentage?: number
  unit?: string
  color: ButtonProps['color']
  categories: string[]
  chartData: ChartData[]
  period?: Period
  formatStyle?: StyleValues
}

export type Period = 'per-day' | 'per-week' | 'per-month'

export type periodProps = {
  label: string
}

export const getPeriodProps: Record<Period, periodProps> = {
  'per-day': {
    label: 'Per Day'
  },
  'per-week': {
    label: 'Per Week'
  },
  'per-month': {
    label: 'Per Month'
  }
}

export type StyleValues = 'currency' | 'decimal' | 'percent' | 'unit'

export type StyleValueProps =
  | { style: 'currency'; currency: string }
  | { style: 'decimal' | 'percent' | 'unit'; currency?: undefined }

export const getStyleValueProps: Record<StyleValues, StyleValueProps> = {
  unit: {
    style: 'unit'
  },
  currency: {
    style: 'currency',
    currency: 'INR'
  },
  decimal: {
    style: 'decimal'
  },
  percent: {
    style: 'percent'
  }
}

export const formatValue = (
  value: number | undefined,
  props: StyleValueProps
) => {
  if (value == null) return ''
  return value.toLocaleString('en-US', props)
}
