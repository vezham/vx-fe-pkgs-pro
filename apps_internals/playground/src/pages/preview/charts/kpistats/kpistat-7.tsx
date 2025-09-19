'use client'

import { KPIStatCard, KpiStatProps } from '@vx-pro/charts-kpistat-7'

const kpistat_7 = () => {
  const formatWeekday = (weekday: string) => {
    const map: Record<string, number> = {
      Mo: 1,
      Tu: 2,
      We: 3,
      Th: 4,
      Fr: 5,
      Sa: 6,
      Su: 0
    }

    const day = map[weekday]
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      new Date(2024, 0, day)
    )
  }

  const formatValue = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value)

  const handleMouseEnter = (chartIndex: number, itemIndex: number) => {
    const bars = document.querySelectorAll(
      `#chart-${chartIndex} .recharts-bar-rectangle`
    )
    bars.forEach((bar, i) => {
      if (i !== itemIndex) {
        const path = bar.querySelector('path')
        if (path) path.setAttribute('fill', 'hsl(var(--heroui-default-300))')
      }
    })
  }

  const handleMouseLeave = (chartIndex: number) => {
    const bars = document.querySelectorAll(
      `#chart-${chartIndex} .recharts-bar-rectangle`
    )
    bars.forEach(bar => {
      const path = bar.querySelector('path')
      if (path) path.setAttribute('fill', 'hsl(var(--heroui-foreground))')
    })
  }

  const data: KpiStatProps[] = [
    {
      title: 'Total Revenue',
      value: '$228k',
      change: '3%',
      changeType: 'positive',
      trendChipPosition: 'bottom',
      chartData: [
        { weekday: 'Mo', value: 13200 },
        { weekday: 'Tu', value: 8800 },
        { weekday: 'We', value: 9441 },
        { weekday: 'Th', value: 12300 },
        { weekday: 'Fr', value: 16400 },
        { weekday: 'Sa', value: 14000 },
        { weekday: 'Su', value: 11300 }
      ],
      formatWeekday,
      formatValue,
      handleMouseEnter,
      handleMouseLeave
    },
    {
      title: 'Total Expenses',
      value: '$71.2k',
      change: '1%',
      changeType: 'neutral',
      trendChipPosition: 'bottom',
      chartData: [
        { weekday: 'Mo', value: 5000 },
        { weekday: 'Tu', value: 6200 },
        { weekday: 'We', value: 9800 },
        { weekday: 'Th', value: 5300 },
        { weekday: 'Fr', value: 5700 },
        { weekday: 'Sa', value: 6400 },
        { weekday: 'Su', value: 8187 }
      ],
      formatWeekday,
      formatValue,
      handleMouseEnter,
      handleMouseLeave
    },
    {
      title: 'Total Profit',
      value: '$156k',
      change: '8%',
      changeType: 'negative',
      trendChipPosition: 'bottom',
      chartData: [
        { weekday: 'Mo', value: 11500 },
        { weekday: 'Tu', value: 7000 },
        { weekday: 'We', value: 7641 },
        { weekday: 'Th', value: 12700 },
        { weekday: 'Fr', value: 13300 },
        { weekday: 'Sa', value: 15600 },
        { weekday: 'Su', value: 11813 }
      ],
      formatWeekday,
      formatValue,
      handleMouseEnter,
      handleMouseLeave
    }
  ]

  return (
    <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {data.map((props, index) => (
        <KPIStatCard key={index} {...props} index={index} />
      ))}
    </dl>
  )
}

export default kpistat_7
