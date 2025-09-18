import { Icon } from '@iconify/react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@vx-oss/react'
import { KpiStatProps, TrendCard } from '@vx-pro/charts-kpistat-5'

const kpistat_5 = () => {
  const data: KpiStatProps[] = [
    {
      title: 'House Saving',
      value: 45300,
      maxValue: 150000,
      color: 'warning',
      iconName: 'solar:home-2-bold',
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
      title: 'Laptop',
      value: 300,
      maxValue: 1150,
      color: 'secondary',
      iconName: 'solar:laptop-bold',
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
      title: 'Trip Saving',
      value: 5300,
      maxValue: 15000,
      color: 'default',
      iconName: 'solar:water-sun-bold',
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
      title: 'Scooter Saving',
      value: 150,
      maxValue: 350,
      color: 'primary',
      iconName: 'solar:kick-scooter-bold',
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
    <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((props, index) => (
        <TrendCard key={index} {...props} />
      ))}
    </dl>
  )
}

export default kpistat_5
