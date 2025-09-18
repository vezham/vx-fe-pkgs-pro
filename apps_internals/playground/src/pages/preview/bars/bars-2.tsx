import { Icon } from '@iconify/react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@vx-oss/react'
import { BarChartCard, BarChartProps } from '@vx-pro/charts-bars-2'

const bars_2 = () => {
  const formatWeekday = (weekday: string) => {
    const day =
      {
        Mon: 1,
        Tue: 2,
        Wed: 3,
        Thu: 4,
        Fri: 5,
        Sat: 6,
        Sun: 0
      }[weekday] ?? 0

    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(
      new Date(2024, 0, day)
    )
  }

  const data: BarChartProps[] = [
    {
      title: 'Avg. Energy Activity',
      value: '580/280',
      unit: 'kcal',
      categories: ['Low', 'Medium', 'High'],
      color: 'warning',
      chartData: [
        {
          weekday: 'Mon',
          Low: 120,
          Medium: 280,
          High: 180
        },
        {
          weekday: 'Tue',
          Low: 150,
          Medium: 320,
          High: 220
        },
        {
          weekday: 'Wed',
          Low: 180,
          Medium: 250,
          High: 150
        },
        {
          weekday: 'Thu',
          Low: 140,
          Medium: 290,
          High: 180
        },
        {
          weekday: 'Fri',
          Low: 160,
          Medium: 270,
          High: 190
        },
        {
          weekday: 'Sat',
          Low: 130,
          Medium: 240,
          High: 210
        },
        {
          weekday: 'Sun',
          Low: 170,
          Medium: 300,
          High: 240
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
      formatWeekday
    },
    {
      title: 'Avg. Heart Rate',
      value: '72/52',
      unit: 'bpm',
      categories: ['Low', 'High'],
      color: 'danger',
      chartData: [
        {
          weekday: 'Mon',
          Low: 65,
          High: 85
        },
        {
          weekday: 'Tue',
          Low: 62,
          High: 82
        },
        {
          weekday: 'Wed',
          Low: 68,
          High: 88
        },
        {
          weekday: 'Thu',
          Low: 64,
          High: 84
        },
        {
          weekday: 'Fri',
          Low: 66,
          High: 86
        },
        {
          weekday: 'Sat',
          Low: 63,
          High: 83
        },
        {
          weekday: 'Sun',
          Low: 67,
          High: 87
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
      formatWeekday
    },
    {
      title: 'Avg. Daily Steps',
      value: '8,432',
      unit: 'steps',
      categories: ['Low', 'Medium', 'High'],
      color: 'success',
      chartData: [
        {
          weekday: 'Mon',
          Low: 2500,
          Medium: 4000,
          High: 6500
        },
        {
          weekday: 'Tue',
          Low: 3000,
          Medium: 4500,
          High: 7000
        },
        {
          weekday: 'Wed',
          Low: 2800,
          Medium: 4200,
          High: 6800
        },
        {
          weekday: 'Thu',
          Low: 3200,
          Medium: 4800,
          High: 7200
        },
        {
          weekday: 'Fri',
          Low: 2700,
          Medium: 4100,
          High: 6400
        },
        {
          weekday: 'Sat',
          Low: 2000,
          Medium: 3500,
          High: 5500
        },
        {
          weekday: 'Sun',
          Low: 1800,
          Medium: 3200,
          High: 5000
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
      formatWeekday
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

export default bars_2
