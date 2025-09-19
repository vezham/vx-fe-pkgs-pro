import { Icon } from '@iconify/react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@vx-oss/react'
import { ChartCard, ChartProps } from '@vx-pro/charts-kpistat-8'

const kpistat_8 = () => {
  const data: ChartProps[] = [
    {
      title: 'Bounce Rate',
      value: '42.3%',
      chartData: [
        { month: 'January', value: 18.2 },
        { month: 'February', value: 22.1 },
        { month: 'March', value: 37.8 },
        { month: 'April', value: 53.5 },
        { month: 'May', value: 65.8 },
        { month: 'June', value: 71.2 },
        { month: 'July', value: 62.8 },
        { month: 'August', value: 52.3 },
        { month: 'September', value: 51.8 },
        { month: 'October', value: 50.3 },
        { month: 'November', value: 51.1 },
        { month: 'December', value: 40.5 }
      ],
      icon: 'solar:spedometer-max-linear',
      change: '-5.9%',
      color: 'default',
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
      title: 'Avg. Session Duration',
      value: '4:32',
      chartData: [
        { month: 'January', value: 205 },
        { month: 'February', value: 185 },
        { month: 'March', value: 242 },
        { month: 'April', value: 228 },
        { month: 'May', value: 265 },
        { month: 'June', value: 245 },
        { month: 'July', value: 262 },
        { month: 'August', value: 272 },
        { month: 'September', value: 268 },
        { month: 'October', value: 255 },
        { month: 'November', value: 260 },
        { month: 'December', value: 258 }
      ],
      icon: 'solar:clock-circle-linear',
      change: '+12.4%',
      color: 'success',
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
      title: 'Conversion Rate',
      value: '3.8%',
      chartData: [
        { month: 'January', value: 2.1 },
        { month: 'February', value: 2.4 },
        { month: 'March', value: 3.2 },
        { month: 'April', value: 2.8 },
        { month: 'May', value: 3.5 },
        { month: 'June', value: 3.2 },
        { month: 'July', value: 3.6 },
        { month: 'August', value: 3.8 }
      ],
      change: '+1.7%',
      color: 'warning',
      icon: 'solar:colour-tuneing-linear',
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
      title: 'Pages per Session',
      value: 4.2,
      chartData: [
        { month: 'Monday', value: 3.8 },
        { month: 'Tuesday', value: 4.5 },
        { month: 'Wednesday', value: 4.1 },
        { month: 'Thursday', value: 3.9 },
        { month: 'Friday', value: 4.3 },
        { month: 'Saturday', value: 4.0 },
        { month: 'Sunday', value: 4.2 }
      ],
      change: '+4.20',
      color: 'primary',
      icon: 'solar:global-linear',
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
    },
    {
      title: 'New vs Returning',
      value: '48.5%',
      chartData: [
        { month: 'January', value: 72.4 },
        { month: 'February', value: 74.2 },
        { month: 'March', value: 71.5 },
        { month: 'April', value: 69.8 },
        { month: 'May', value: 70.1 },
        { month: 'June', value: 68.9 },
        { month: 'July', value: 67.8 },
        { month: 'August', value: 68.5 }
      ],
      change: '-12.9%',
      color: 'secondary',
      icon: 'solar:cursor-linear',
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
      title: 'Load Time (ms)',
      value: '856ms',
      chartData: [
        { month: 'January', value: 200 },
        { month: 'February', value: 380 },
        { month: 'March', value: 250 },
        { month: 'April', value: 390 },
        { month: 'May', value: 420 },
        { month: 'June', value: 485 },
        { month: 'July', value: 520 },
        { month: 'August', value: 516 }
      ],
      change: '-28.7%',
      color: 'danger',
      icon: 'solar:server-square-update-linear',
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
    }
  ]

  return (
    <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {data.map((props, index) => (
        <ChartCard index={0} key={index} {...props} />
      ))}
    </dl>
  )
}

export default kpistat_8
