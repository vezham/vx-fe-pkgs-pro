import { Charts, CircleChartProps } from '@vx-pro/charts-circle-1'

const circle_1 = () => {
  const data: CircleChartProps[] = [
    {
      title: 'Personal Expenses',
      value: 5420,
      unit: 'avg.',
      changePercentage: 24.8,
      changeType: 'positive',
      categories: ['Delivery', 'Social', 'Shopping', 'Food'],
      color: 'default',
      formatStyle: 'currency',
      chartData: [
        { name: 'Delivery', value: 400 },
        { name: 'Social', value: 300 },
        { name: 'Shopping', value: 300 },
        { name: 'Food', value: 200 }
      ]
    },
    {
      title: 'Summary Expenses',
      value: 12345,
      unit: 'total',
      changePercentage: 15.2,
      changeType: 'positive',
      categories: ['Sales', 'Marketing', 'Support', 'Dev'],
      color: 'primary',
      formatStyle: 'currency',
      chartData: [
        { name: 'Sales', value: 450 },
        { name: 'Marketing', value: 300 },
        { name: 'Support', value: 250 },
        { name: 'Dev', value: 200 }
      ]
    },
    {
      title: 'Cost Distribution',
      value: 8790,
      unit: 'total',
      changePercentage: -5.4,
      changeType: 'negative',
      categories: ['Operations', 'Personnel', 'Tools', 'Office'],
      color: 'secondary',
      formatStyle: 'currency',
      chartData: [
        { name: 'Operations', value: 350 },
        { name: 'Personnel', value: 280 },
        { name: 'Tools', value: 220 },
        { name: 'Office', value: 150 }
      ]
    }
  ]
  return (
    <div>
      <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item, index) => (
          <Charts key={index} {...item} />
        ))}
      </dl>
    </div>
  )
}

export default circle_1
