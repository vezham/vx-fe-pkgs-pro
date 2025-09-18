import { Icon } from '@iconify/react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@vx-oss/react'
import { BarChartCard, BarChartProps } from '@vx-pro/charts-bars-3'

const bars_3 = () => {
  const formatMonth = (month: string) => {
    const monthNumber =
      {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11
      }[month] ?? 0

    return new Intl.DateTimeFormat('en-US', { month: 'long' }).format(
      new Date(2024, monthNumber, 1)
    )
  }

  const data: BarChartProps[] = [
    {
      title: 'Monthly Expenses',
      value: '$5,420',
      unit: 'avg',
      categories: ['Expenses', 'Savings'],
      color: 'default',
      chartData: [
        {
          month: 'Jan',
          Expenses: 1340,
          Savings: -1340
        },
        {
          month: 'Feb',
          Expenses: 450,
          Savings: -750
        },
        {
          month: 'Mar',
          Expenses: 1044,
          Savings: -1044
        },
        {
          month: 'Apr',
          Expenses: 450,
          Savings: -450
        },
        {
          month: 'May',
          Expenses: 900,
          Savings: -700
        },
        {
          month: 'Jun',
          Expenses: 1250,
          Savings: -1250
        },
        {
          month: 'Jul',
          Expenses: 400,
          Savings: -600
        },
        {
          month: 'Aug',
          Expenses: 600,
          Savings: -800
        },
        {
          month: 'Sep',
          Expenses: 1200,
          Savings: -1200
        },
        {
          month: 'Oct',
          Expenses: 500,
          Savings: -500
        },
        {
          month: 'Nov',
          Expenses: 800,
          Savings: -800
        }
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
      formatMonth
    },
    {
      title: 'Annual Revenue',
      value: '$12,780',
      unit: 'avg',
      categories: ['Revenue', 'Costs'],
      color: 'secondary',
      chartData: [
        {
          month: 'Jan',
          Revenue: 1340,
          Costs: -1340
        },
        {
          month: 'Feb',
          Revenue: 450,
          Costs: -750
        },
        {
          month: 'Mar',
          Revenue: 1044,
          Costs: -1044
        },
        {
          month: 'Apr',
          Revenue: 450,
          Costs: -450
        },
        {
          month: 'May',
          Revenue: 900,
          Costs: -700
        },
        {
          month: 'Jun',
          Revenue: 1250,
          Costs: -1250
        },
        {
          month: 'Jul',
          Revenue: 400,
          Costs: -600
        },
        {
          month: 'Aug',
          Revenue: 600,
          Costs: -800
        },
        {
          month: 'Sep',
          Revenue: 1200,
          Costs: -1200
        },
        {
          month: 'Oct',
          Revenue: 500,
          Costs: -500
        },
        {
          month: 'Nov',
          Revenue: 800,
          Costs: -800
        }
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
      formatMonth
    },
    {
      title: 'Project Budget',
      value: '$8,350',
      unit: 'total',
      categories: ['Budget', 'Spent'],
      color: 'warning',
      chartData: [
        {
          month: 'Jan',
          Budget: 1340,
          Spent: -1340
        },
        {
          month: 'Feb',
          Budget: 450,
          Spent: -750
        },
        {
          month: 'Mar',
          Budget: 1044,
          Spent: -1044
        },
        {
          month: 'Apr',
          Budget: 450,
          Spent: -450
        },
        {
          month: 'May',
          Budget: 900,
          Spent: -700
        },
        {
          month: 'Jun',
          Budget: 1250,
          Spent: -1250
        },
        {
          month: 'Jul',
          Budget: 400,
          Spent: -600
        },
        {
          month: 'Aug',
          Budget: 600,
          Spent: -800
        },
        {
          month: 'Sep',
          Budget: 1200,
          Spent: -1200
        },
        {
          month: 'Oct',
          Budget: 500,
          Spent: -500
        },
        {
          month: 'Nov',
          Budget: 800,
          Spent: -800
        }
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
      formatMonth
    }
  ]

  return (
    <div>
      <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item, index) => (
          <BarChartCard key={index} {...item} />
        ))}
      </dl>
    </div>
  )
}

export default bars_3
