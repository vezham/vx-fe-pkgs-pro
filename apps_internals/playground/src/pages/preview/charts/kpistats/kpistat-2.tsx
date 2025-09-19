import { Button } from '@vx-oss/react'
import { KpiStatProps, TrendCard } from '@vx-pro/charts-kpistat-2'

const kpistat_2 = () => {
  const data: KpiStatProps[] = [
    {
      title: 'Total Users',
      value: '5,400',
      change: '33%',
      changeType: 'positive',
      trendChipPosition: 'top',
      iconName: 'solar:users-group-rounded-linear',
      actions: (
        <Button
          fullWidth
          className="text-default-500 flex justify-start text-xs data-pressed:scale-100"
          radius="none"
          variant="light">
          View All
        </Button>
      )
    },
    {
      title: 'Total Sales',
      value: '$15,400',
      change: '0.0%',
      changeType: 'neutral',
      trendChipPosition: 'top',
      iconName: 'solar:wallet-money-outline',
      actions: (
        <Button
          fullWidth
          className="text-default-500 flex justify-start text-xs data-pressed:scale-100"
          radius="none"
          variant="light">
          View All
        </Button>
      )
    },
    {
      title: 'Net Profit',
      value: '$10,400',
      change: '3.3%',
      changeType: 'negative',
      trendChipPosition: 'top',
      iconName: 'solar:hand-money-linear',
      actions: (
        <Button
          fullWidth
          className="text-default-500 flex justify-start text-xs data-pressed:scale-100"
          radius="none"
          variant="light">
          View All
        </Button>
      )
    }
  ]

  return (
    <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {data.map((props, index) => (
        <TrendCard key={index} {...props} />
      ))}
    </dl>
  )
}

export default kpistat_2
