'use client'

import { Icon } from '@iconify/react'
import { Card, Chip, cn } from '@vx-oss/react'
import { Area, AreaChart, ResponsiveContainer, YAxis } from 'recharts'

const KpiChartCard: React.FC<KpiStatProps> = ({
  title,
  subtitle,
  value,
  change,
  color,
  xaxis,
  chartData,
  actions
}) => {
  return (
    <Card className="dark:border-default-100 relative border border-transparent">
      <section className="flex flex-col flex-nowrap">
        <div className="flex flex-col justify-between gap-y-2 px-4 pt-4">
          <div className="flex flex-col gap-y-2">
            <div className="flex flex-col gap-y-0">
              <span className="text-default-600 text-sm font-medium">
                {title}
              </span>
              <span className="text-tiny text-default-400 font-normal">
                {subtitle}
              </span>
            </div>
            <div className="flex items-baseline gap-x-2">
              <span className="text-default-700 text-xl font-semibold">
                {value}
              </span>
              <Chip
                classNames={{
                  content: 'font-medium'
                }}
                color={color}
                radius="sm"
                size="sm"
                startContent={
                  color === 'success' ? (
                    <Icon
                      height={16}
                      icon={'solar:arrow-right-up-linear'}
                      width={16}
                    />
                  ) : color === 'danger' ? (
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
                <span>{change}</span>
              </Chip>
            </div>
          </div>
        </div>
        <div className="min-h-24 w-full">
          <ResponsiveContainer className="[&_.recharts-surface]:outline-hidden">
            <AreaChart
              accessibilityLayer
              className="translate-y-1 scale-105"
              data={chartData}>
              <defs>
                <linearGradient
                  id={`colorUv-${title}`}
                  x1="0"
                  x2="0"
                  y1="0"
                  y2="1">
                  <stop
                    offset="10%"
                    stopColor={cn({
                      'hsl(var(--heroui-success))': color === 'success',
                      'hsl(var(--heroui-primary))': color === 'primary',
                      'hsl(var(--heroui-secondary))': color === 'secondary',
                      'hsl(var(--heroui-warning))': color === 'warning',
                      'hsl(var(--heroui-danger))': color === 'danger',
                      'hsl(var(--heroui-foreground))': color === 'default'
                    })}
                    stopOpacity={0.3}
                  />
                  <stop
                    offset="100%"
                    stopColor={cn({
                      'hsl(var(--heroui-success))': color === 'success',
                      'hsl(var(--heroui-primary))': color === 'primary',
                      'hsl(var(--heroui-secondary))': color === 'secondary',
                      'hsl(var(--heroui-warning))': color === 'warning',
                      'hsl(var(--heroui-danger))': color === 'danger',
                      'hsl(var(--heroui-foreground))': color === 'default'
                    })}
                    stopOpacity={0.1}
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
                  'hsl(var(--heroui-success))': color === 'success',
                  'hsl(var(--heroui-primary))': color === 'primary',
                  'hsl(var(--heroui-secondary))': color === 'secondary',
                  'hsl(var(--heroui-warning))': color === 'warning',
                  'hsl(var(--heroui-danger))': color === 'danger',
                  'hsl(var(--heroui-foreground))': color === 'default'
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

export { KpiChartCard }

export type ChartData = {
  month: string
  value: number
}

export type KpiStatProps = {
  title: string
  subtitle: string
  value: string | number | undefined
  change: string
  xaxis: string
  color: 'default' | 'primary' | 'secondary' | 'danger' | 'success' | 'warning'
  chartData: ChartData[]
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
