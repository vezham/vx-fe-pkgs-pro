import { Icon } from '@iconify/react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@vx-oss/react'
import { KpiStatProps, TrendCard } from '@vx-pro/charts-kpistat-3'

const kpistat_3 = () => {
  const data: KpiStatProps[] = [
    {
      title: 'New Subscriptions',
      value: 249,
      chartData: [
        {
          month: 'January',
          value: 159
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
          value: 287
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
          value: 266
        },
        {
          month: 'December',
          value: 278
        }
      ],
      change: '33%',
      changeType: 'positive',
      xaxis: 'month',
      actions: (
        <Dropdown
          classNames={{
            content: 'min-w-[120px]'
          }}
          placement="bottom-end">
          <DropdownTrigger>
            <Button
              isIconOnly
              className="absolute top-2 right-2 w-auto rounded-full"
              size="sm"
              variant="light">
              <Icon height={16} icon="solar:menu-dots-bold" width={16} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            itemClasses={{
              title: 'text-tiny'
            }}
            variant="flat">
            <DropdownItem key="view-details">View Details</DropdownItem>
            <DropdownItem key="export-data">Export Data</DropdownItem>
            <DropdownItem key="set-alert">Set Alert</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )
    },
    {
      title: 'New Customers',
      value: 1159,
      chartData: [
        {
          month: 'January',
          value: 940
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
          value: 1243
        },
        {
          month: 'June',
          value: 1113
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
          value: 1159
        },
        {
          month: 'November',
          value: 1067
        },
        {
          month: 'December',
          value: 1198
        }
      ],
      change: '0%',
      changeType: 'neutral',
      xaxis: 'month',
      actions: (
        <Dropdown
          classNames={{
            content: 'min-w-[120px]'
          }}
          placement="bottom-end">
          <DropdownTrigger>
            <Button
              isIconOnly
              className="absolute top-2 right-2 w-auto rounded-full"
              size="sm"
              variant="light">
              <Icon height={16} icon="solar:menu-dots-bold" width={16} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            itemClasses={{
              title: 'text-tiny'
            }}
            variant="flat">
            <DropdownItem key="view-details">View Details</DropdownItem>
            <DropdownItem key="export-data">Export Data</DropdownItem>
            <DropdownItem key="set-alert">Set Alert</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )
    },
    {
      title: "Month's Revenue",
      value: '$228,441',
      chartData: [
        {
          month: 'January',
          value: 40000
        },
        {
          month: 'February',
          value: 48000
        },
        {
          month: 'March',
          value: 57000
        },
        {
          month: 'April',
          value: 65000
        },
        {
          month: 'May',
          value: 72000
        },
        {
          month: 'June',
          value: 88000
        },
        {
          month: 'July',
          value: 79000
        },
        {
          month: 'August',
          value: 95000
        },
        {
          month: 'September',
          value: 85000
        },
        {
          month: 'October',
          value: 84441
        },
        {
          month: 'November',
          value: 98000
        },
        {
          month: 'December',
          value: 79500
        }
      ],
      change: '19%',
      changeType: 'negative',
      xaxis: 'month',
      actions: (
        <Dropdown
          classNames={{
            content: 'min-w-[120px]'
          }}
          placement="bottom-end">
          <DropdownTrigger>
            <Button
              isIconOnly
              className="absolute top-2 right-2 w-auto rounded-full"
              size="sm"
              variant="light">
              <Icon height={16} icon="solar:menu-dots-bold" width={16} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            itemClasses={{
              title: 'text-tiny'
            }}
            variant="flat">
            <DropdownItem key="view-details">View Details</DropdownItem>
            <DropdownItem key="export-data">Export Data</DropdownItem>
            <DropdownItem key="set-alert">Set Alert</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      )
    },
    {
      title: "Todays' Sales",
      value: 54,
      chartData: [
        {
          month: 'Monday',
          value: 38
        },
        {
          month: 'Tuesday',
          value: 40
        },
        {
          month: 'Wednesday',
          value: 37
        },
        {
          month: 'Thursday',
          value: 49
        },
        {
          month: 'Friday',
          value: 52
        },
        {
          month: 'June',
          value: 54
        }
      ],
      change: '3.3%',
      changeType: 'positive',
      xaxis: 'day',
      actions: (
        <Dropdown
          classNames={{
            content: 'min-w-[120px]'
          }}
          placement="bottom-end">
          <DropdownTrigger>
            <Button
              isIconOnly
              className="absolute top-2 right-2 w-auto rounded-full"
              size="sm"
              variant="light">
              <Icon height={16} icon="solar:menu-dots-bold" width={16} />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            itemClasses={{
              title: 'text-tiny'
            }}
            variant="flat">
            <DropdownItem key="view-details">View Details</DropdownItem>
            <DropdownItem key="export-data">Export Data</DropdownItem>
            <DropdownItem key="set-alert">Set Alert</DropdownItem>
          </DropdownMenu>
        </Dropdown>
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

export default kpistat_3
