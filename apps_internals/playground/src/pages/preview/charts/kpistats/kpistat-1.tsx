import { KpiStatProps, TrendCard } from '@vx-pro/charts-kpistat-1'

const kpistat_1 = () => {
  const data: KpiStatProps[] = [
    {
      title: 'Total Revenue',
      value: '$228,451',
      change: '33%',
      changeType: 'positive',
      trendType: 'up'
    },
    {
      title: 'Total Expenses',
      value: '$71,887',
      change: '13.0%',
      changeType: 'negative',
      trendType: 'up'
    },
    {
      title: 'Total Profit',
      value: '$156,540',
      change: '0.0%',
      changeType: 'neutral',
      trendType: 'neutral'
    },
    {
      title: 'New Customers',
      value: '1,234',
      change: '1.0%',
      changeType: 'positive',
      trendType: 'up'
    }
  ]

  const data2: KpiStatProps[] = [
    {
      title: 'Monthly Sales',
      value: '$345,892',
      change: '12.5%',
      changeType: 'positive',
      trendType: 'up',
      trendChipVariant: 'flat',
      trendChipPosition: 'bottom'
    },
    {
      title: 'Operating Costs',
      value: '$98,234',
      change: '18.3%',
      changeType: 'negative',
      trendType: 'up',
      trendChipVariant: 'flat',
      trendChipPosition: 'bottom'
    },
    {
      title: 'Net Income',
      value: '$247,658',
      change: '15.2%',
      changeType: 'neutral',
      trendType: 'neutral',
      trendChipVariant: 'flat',
      trendChipPosition: 'bottom'
    },
    {
      title: 'Active Users',
      value: '2,847',
      change: '4.7%',
      changeType: 'positive',
      trendType: 'up',
      trendChipVariant: 'flat',
      trendChipPosition: 'bottom'
    }
  ]

  return (
    <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((props, index) => (
        <TrendCard key={index} {...props} />
      ))}
      {data2.map((props, index) => (
        <TrendCard key={index} {...props} />
      ))}
    </dl>
  )
}

export default kpistat_1
