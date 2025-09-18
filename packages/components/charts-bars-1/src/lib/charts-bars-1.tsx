'use client'

import type { ButtonProps, CardProps, RadioProps } from '@vx-oss/react'

import { Icon } from '@iconify/react'
import {
  Button,
  Card,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  RadioGroup,
  VisuallyHidden,
  cn,
  useRadio
} from '@vx-oss/react'
import React from 'react'
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

// ------------------ Component ------------------
const BarChartCard = React.forwardRef<
  HTMLDivElement,
  Omit<CardProps, 'children'> & BarChartProps
>(
  (
    { className, title, categories, color, chartData, formatWeekday, ...props },
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
        <div className="flex flex-col gap-y-4 p-4">
          <dt>
            <h3 className="text-small text-default-500 font-medium">{title}</h3>
          </dt>
          <dd className="text-tiny text-default-500 flex w-full justify-end gap-4">
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
              top: 20,
              right: 14,
              left: -8,
              bottom: 5
            }}>
            <XAxis
              dataKey="weekday"
              strokeOpacity={0.25}
              style={{ fontSize: 'var(--heroui-font-size-tiny)', color: 'red' }}
              tickLine={false}
            />
            <YAxis
              axisLine={false}
              style={{ fontSize: 'var(--heroui-font-size-tiny)' }}
              tickLine={false}
            />
            <Tooltip
              content={({ label, payload }) => (
                <div className="rounded-medium bg-background text-tiny shadow-small flex h-auto min-w-[120px] items-center gap-x-2 p-2">
                  <div className="flex w-full flex-col gap-y-1">
                    <span className="text-foreground font-medium">
                      {typeof label === 'string' && formatWeekday
                        ? formatWeekday(label)
                        : (label ?? '')}
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
                              backgroundColor: `hsl(var(--heroui-${color}-${(index + 1) * 200}))`
                            }}
                          />
                          <div className="text-default-700 flex w-full items-center justify-between gap-x-2 pr-1 text-xs">
                            <span className="text-default-500">{category}</span>
                            <span className="text-default-700 font-mono font-medium">
                              {value}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
              cursor={false}
            />
            {categories.map((category, index) => (
              <Bar
                key={`${category}-${index}`}
                animationDuration={450}
                animationEasing="ease"
                barSize={24}
                dataKey={category.toLowerCase()}
                fill={`hsl(var(--heroui-${color}-${(index + 1) * 200}))`}
                radius={index === categories.length - 1 ? [4, 4, 0, 0] : 0}
                stackId="bars"
              />
            ))}
          </BarChart>
        </ResponsiveContainer>

        <Divider className="bg-default-100 mx-auto w-full max-w-[calc(100%-2rem)]" />

        <RadioGroup
          aria-label="Time Range"
          className="flex gap-x-2 p-4"
          defaultValue="7"
          orientation="horizontal">
          <ButtonRadioItem value="7">7 days</ButtonRadioItem>
          <ButtonRadioItem value="14">14 days</ButtonRadioItem>
          <ButtonRadioItem value="30">30 days</ButtonRadioItem>
        </RadioGroup>

        <Dropdown
          classNames={{
            content: 'min-w-[120px]'
          }}
          placement="bottom-end">
          <DropdownTrigger>
            <Button
              isIconOnly
              className="absolute top-2 right-2 w-auto rounded-full"
              size="sm"
              variant="light">
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
      </Card>
    )
  }
)

BarChartCard.displayName = 'BarChartCard'

export { BarChartCard }

const ButtonRadioItem = React.forwardRef<
  HTMLInputElement,
  Omit<RadioProps, 'color'> & {
    color?: ButtonProps['color']
    size?: ButtonProps['size']
    variant?: ButtonProps['variant']
  }
>(({ children, color, size = 'sm', variant, ...props }, ref) => {
  const { Component, isSelected, getBaseProps, getInputProps } = useRadio(props)

  return (
    <Component {...getBaseProps()} ref={ref}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Button
        disableRipple
        className={cn('text-default-500 pointer-events-none', {
          'text-foreground': isSelected
        })}
        color={color}
        size={size}
        variant={variant || isSelected ? 'solid' : 'flat'}>
        {children}
      </Button>
    </Component>
  )
})

ButtonRadioItem.displayName = 'ButtonRadioItem'

export { ButtonRadioItem }

// ------------------ Types ------------------
export type ChartData = {
  weekday: string
  [key: string]: string | number
}

export type BarChartProps = {
  title: string
  color: ButtonProps['color']
  categories: string[]
  chartData: ChartData[]
  formatWeekday?: (weekday: string) => string
}
