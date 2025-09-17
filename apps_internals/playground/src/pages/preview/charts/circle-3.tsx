import { Icon } from '@iconify/react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@vx-oss/react'
import { CircleChartCard, CircleChartProps } from '@vx-pro/charts-circle-3'

const circle_3 = () => {
  const formatTotal = (total: number | undefined) =>
    total == null
      ? ''
      : total >= 1000
        ? `${(total / 1000).toFixed(1)}K`
        : total.toString()

  const data: CircleChartProps[] = [
    {
      title: 'Traffic Sources',
      categories: ['Search', 'Direct', 'Social', 'Referral'],
      color: 'warning',
      chartData: [
        { name: 'Search', value: 400 },
        { name: 'Direct', value: 300 },
        { name: 'Social', value: 300 },
        { name: 'Referral', value: 200 }
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
      formatTotal
    },
    {
      title: 'Device Usage',
      categories: ['Mobile', 'Desktop', 'Tablet', 'Smart TV'],
      color: 'success',
      chartData: [
        { name: 'Mobile', value: 450 },
        { name: 'Desktop', value: 300 },
        { name: 'Tablet', value: 250 },
        { name: 'Smart TV', value: 200 }
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
      formatTotal
    },
    {
      title: 'Browser Usage',
      categories: ['Chrome', 'Safari', 'Firefox', 'Edge'],
      color: 'danger',
      chartData: [
        { name: 'Chrome', value: 350 },
        { name: 'Safari', value: 280 },
        { name: 'Firefox', value: 220 },
        { name: 'Edge', value: 150 }
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
      formatTotal
    }
  ]

  return (
    <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {data.map((item, index) => (
        <CircleChartCard key={index} {...item} />
      ))}
    </dl>
  )
}

export default circle_3
