import { Icon } from '@iconify/react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@vx-oss/react'
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
      ],
      actions: (
        <Dropdown
          classNames={{ content: 'min-w-[120px]' }}
          placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly radius="full" size="sm" variant="light">
              <Icon height={16} icon="solar:menu-dots-bold" width={16} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu itemClasses={{ title: 'text-tiny' }} variant="flat">
            <DropdownItem key="view-details">View Details</DropdownItem>
            <DropdownItem key="export-data">Export Data</DropdownItem>
            <DropdownItem key="set-alert">Set Alert</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ),
      getPeriodProps: {
        'per-day': { label: 'Per Day' },
        'per-week': { label: 'Per Week' },
        'per-month': { label: 'Per Month' }
      },
      getStyleValueProps: {
        unit: { style: 'unit' },
        currency: { style: 'currency', currency: 'INR' },
        decimal: { style: 'decimal' },
        percent: { style: 'percent' }
      },
      formatValue: (value, props) =>
        value == null ? '' : value.toLocaleString('en-IN', props)
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
      ],
      actions: (
        <Dropdown
          classNames={{ content: 'min-w-[120px]' }}
          placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly radius="full" size="sm" variant="light">
              <Icon height={16} icon="solar:menu-dots-bold" width={16} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu itemClasses={{ title: 'text-tiny' }} variant="flat">
            <DropdownItem key="view-details">View Details</DropdownItem>
            <DropdownItem key="export-data">Export Data</DropdownItem>
            <DropdownItem key="set-alert">Set Alert</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ),
      getPeriodProps: {
        'per-day': { label: 'Per Day' },
        'per-week': { label: 'Per Week' },
        'per-month': { label: 'Per Month' }
      },
      getStyleValueProps: {
        unit: { style: 'unit' },
        currency: { style: 'currency', currency: 'INR' },
        decimal: { style: 'decimal' },
        percent: { style: 'percent' }
      },
      formatValue: (value, props) =>
        value == null ? '' : value.toLocaleString('en-IN', props)
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
      ],
      actions: (
        <Dropdown
          classNames={{ content: 'min-w-[120px]' }}
          placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly radius="full" size="sm" variant="light">
              <Icon height={16} icon="solar:menu-dots-bold" width={16} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu itemClasses={{ title: 'text-tiny' }} variant="flat">
            <DropdownItem key="view-details">View Details</DropdownItem>
            <DropdownItem key="export-data">Export Data</DropdownItem>
            <DropdownItem key="set-alert">Set Alert</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      ),
      getPeriodProps: {
        'per-day': { label: 'Per Day' },
        'per-week': { label: 'Per Week' },
        'per-month': { label: 'Per Month' }
      },
      getStyleValueProps: {
        unit: { style: 'unit' },
        currency: { style: 'currency', currency: 'INR' },
        decimal: { style: 'decimal' },
        percent: { style: 'percent' }
      },
      formatValue: (value, props) =>
        value == null ? '' : value.toLocaleString('en-IN', props)
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
