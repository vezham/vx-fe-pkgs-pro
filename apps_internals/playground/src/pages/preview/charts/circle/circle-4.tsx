import { Icon } from '@iconify/react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@vx-oss/react'
import { CircleChartCard, CircleChartProps } from '@vx-pro/charts-circle-4'

const circle_4 = () => {
  const formatTotal = (value: number | undefined) => {
    return value?.toLocaleString() ?? '0'
  }

  const colorIndexMap = (index: number) => {
    const mapIndex: Record<number, number> = {
      0: 300,
      1: 500,
      2: 700,
      3: 900
    }

    return mapIndex[index] ?? 200
  }

  const data: CircleChartProps[] = [
    {
      title: 'Energy Activity',
      categories: ['Calories', 'Steps', 'Exercise'],
      color: 'default',
      unit: 'kcal',
      unitTitle: 'Calories',
      total: 700,
      chartData: [
        { name: 'Calories', value: 200, valueText: '1,623/2,000 kcal' },
        { name: 'Steps', value: 350, valueText: '8,328/10,000 steps' },
        { name: 'Exercise', value: 250, valueText: '25/120 min' }
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
      formatTotal,
      colorIndexMap
    },
    {
      title: 'Energy Activity',
      categories: ['Calories', 'Steps', 'Exercise'],
      color: 'primary',
      unit: 'kcal',
      unitTitle: 'Calories',
      total: 700,
      chartData: [
        { name: 'Calories', value: 200, valueText: '1,623/2,000 kcal' },
        { name: 'Steps', value: 350, valueText: '8,328/10,000 steps' },
        { name: 'Exercise', value: 250, valueText: '25/120 min' }
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
      formatTotal,
      colorIndexMap
    },
    {
      title: 'Energy Activity',
      categories: ['Calories', 'Steps', 'Exercise'],
      color: 'secondary',
      unit: 'kcal',
      unitTitle: 'Calories',
      total: 700,
      chartData: [
        { name: 'Calories', value: 200, valueText: '1,623/2,000 kcal' },
        { name: 'Steps', value: 350, valueText: '8,328/10,000 steps' },
        { name: 'Exercise', value: 250, valueText: '25/120 min' }
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
      formatTotal,
      colorIndexMap
    },
    {
      title: 'Energy Activity',
      categories: ['Calories', 'Steps', 'Exercise'],
      color: 'success',
      unit: 'kcal',
      unitTitle: 'Calories',
      total: 700,
      chartData: [
        { name: 'Calories', value: 200, valueText: '1,623/2,000 kcal' },
        { name: 'Steps', value: 350, valueText: '8,328/10,000 steps' },
        { name: 'Exercise', value: 250, valueText: '25/120 min' }
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
      formatTotal,
      colorIndexMap
    },
    {
      title: 'Energy Activity',
      categories: ['Calories', 'Steps', 'Exercise'],
      color: 'warning',
      unit: 'kcal',
      unitTitle: 'Calories',
      total: 700,
      chartData: [
        { name: 'Calories', value: 200, valueText: '1,623/2,000 kcal' },
        { name: 'Steps', value: 350, valueText: '8,328/10,000 steps' },
        { name: 'Exercise', value: 250, valueText: '25/120 min' }
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
      formatTotal,
      colorIndexMap
    },
    {
      title: 'Energy Activity',
      categories: ['Calories', 'Steps', 'Exercise'],
      color: 'danger',
      unit: 'kcal',
      unitTitle: 'Calories',
      total: 700,
      chartData: [
        { name: 'Calories', value: 200, valueText: '1,623/2,000 kcal' },
        { name: 'Steps', value: 350, valueText: '8,328/10,000 steps' },
        { name: 'Exercise', value: 250, valueText: '25/120 min' }
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
      formatTotal,
      colorIndexMap
    }
  ]

  return (
    <dl className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <CircleChartCard key={index} {...item} />
      ))}
    </dl>
  )
}

export default circle_4
