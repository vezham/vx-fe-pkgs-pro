import { KpiStatProps, TrendCard } from '@vx-pro/charts-kpistat-6'

const kpistat_6 = () => {
  const data: KpiStatProps[] = [
    {
      title: 'New Subscriptions',
      value: 249,
      chartData: [
        {
          month: 'January',
          value: 309
        },
        {
          month: 'February',
          value: 269
        },
        {
          month: 'March',
          value: 286
        },
        {
          month: 'April',
          value: 312
        },
        {
          month: 'May',
          value: 187
        },
        {
          month: 'June',
          value: 249
        },
        {
          month: 'July',
          value: 275
        },
        {
          month: 'August',
          value: 293
        },
        {
          month: 'September',
          value: 305
        },
        {
          month: 'October',
          value: 289
        },
        {
          month: 'November',
          value: 326
        },
        {
          month: 'December',
          value: 341
        }
      ],
      change: '33%',
      changeType: 'positive',
      xaxis: 'month'
    },
    {
      title: 'New Sales',
      value: 1159,
      chartData: [
        {
          month: 'January',
          value: 40
        },
        {
          month: 'February',
          value: 1256
        },
        {
          month: 'March',
          value: 1123
        },
        {
          month: 'April',
          value: 1300
        },
        {
          month: 'May',
          value: 943
        },
        {
          month: 'June',
          value: 943
        },
        {
          month: 'July',
          value: 1089
        },
        {
          month: 'August',
          value: 1245
        },
        {
          month: 'September',
          value: 1190
        },
        {
          month: 'October',
          value: 1350
        },
        {
          month: 'November',
          value: 1159
        },
        {
          month: 'December',
          value: 1275
        }
      ],
      change: '0%',
      changeType: 'neutral',
      xaxis: 'month'
    },
    {
      title: 'Avg. Sale Revenue',
      value: '$328',
      chartData: [
        {
          month: 'January',
          value: 40
        },
        {
          month: 'February',
          value: 8000
        },
        {
          month: 'March',
          value: 7000
        },
        {
          month: 'April',
          value: 15000
        },
        {
          month: 'May',
          value: 20000
        },
        {
          month: 'June',
          value: 18000
        },
        {
          month: 'July',
          value: 25000
        },
        {
          month: 'August',
          value: 50000
        },
        {
          month: 'September',
          value: 35000
        },
        {
          month: 'October',
          value: 28441
        },
        {
          month: 'November',
          value: 32000
        },
        {
          month: 'December',
          value: 30500
        }
      ],
      change: '19%',
      changeType: 'negative',
      xaxis: 'month'
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

export default kpistat_6
