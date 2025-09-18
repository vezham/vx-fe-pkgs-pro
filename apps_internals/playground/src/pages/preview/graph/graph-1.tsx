import { Icon } from '@iconify/react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@vx-oss/react'
import { Chart, GraphCard, TabData } from '@vx-pro/charts-graph-1'

const graph_1 = () => {
  const formatValue = (value: number, type: string | undefined) => {
    if (type === 'number') {
      if (value >= 1000000) {
        return (value / 1000000).toFixed(1) + 'M'
      } else if (value >= 1000) {
        return (value / 1000).toFixed(0) + 'k'
      }
      return value.toLocaleString()
    }
    if (type === 'percentage') return `${value}%`
    return value
  }

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

  const tabs: TabData[] = [
    { key: '6-months', title: '6 Months' },
    { key: '3-months', title: '3 Months' },
    { key: '30-days', title: '30 Days' },
    { key: '7-days', title: '7 Days' },
    { key: '24-hours', title: '24 Hours' }
  ]

  const data: Chart[] = [
    {
      key: 'unique-visitors',
      title: 'Unique Visitors',
      suffix: 'visitors',
      value: 147000,
      type: 'number',
      change: '12.8%',
      changeType: 'positive',
      chartData: [
        { month: 'Jan', value: 98000 },
        { month: 'Feb', value: 125000 },
        { month: 'Mar', value: 89000 },
        { month: 'Apr', value: 156000 },
        { month: 'May', value: 112000 },
        { month: 'Jun', value: 167000 },
        { month: 'Jul', value: 138000 },
        { month: 'Aug', value: 178000 },
        { month: 'Sep', value: 129000 },
        { month: 'Oct', value: 159000 },
        { month: 'Nov', value: 147000 },
        { month: 'Dec', value: 127000 }
      ],
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
      ),
      formatMonth,
      formatValue
    },
    {
      key: 'total-visits',
      title: 'Total Visits',
      suffix: 'visits',
      value: 623000,
      type: 'number',
      change: '-2.1%',
      changeType: 'neutral',
      chartData: [
        { month: 'Jan', value: 587000 },
        { month: 'Feb', value: 698000 },
        { month: 'Mar', value: 542000 },
        { month: 'Apr', value: 728000 },
        { month: 'May', value: 615000 },
        { month: 'Jun', value: 689000 },
        { month: 'Jul', value: 573000 },
        { month: 'Aug', value: 695000 },
        { month: 'Sep', value: 589000 },
        { month: 'Oct', value: 652000 },
        { month: 'Nov', value: 623000 },
        { month: 'Dec', value: 523000 }
      ],
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
      ),
      formatMonth,
      formatValue
    },
    {
      key: 'total-page-views',
      title: 'Total Page Views',
      suffix: 'views',
      value: 2312000,
      type: 'number',
      change: '-5.7%',
      changeType: 'negative',
      chartData: [
        { month: 'Jan', value: 2820000 },
        { month: 'Feb', value: 2380000 },
        { month: 'Mar', value: 2690000 },
        { month: 'Apr', value: 2145000 },
        { month: 'May', value: 2760000 },
        { month: 'Jun', value: 2280000 },
        { month: 'Jul', value: 2620000 },
        { month: 'Aug', value: 2145000 },
        { month: 'Sep', value: 2470000 },
        { month: 'Oct', value: 2230000 },
        { month: 'Nov', value: 2312000 },
        { month: 'Dec', value: 2230000 }
      ],
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
      ),
      formatMonth,
      formatValue
    },
    {
      key: 'bounce-rate',
      title: 'Bounce Rate',
      value: 36.78,
      suffix: 'bounce rate',
      type: 'percentage',
      change: '2.4%',
      changeType: 'positive',
      chartData: [
        { month: 'Jan', value: 42.82 },
        { month: 'Feb', value: 35.95 },
        { month: 'Mar', value: 39.25 },
        { month: 'Apr', value: 34.58 },
        { month: 'May', value: 40.92 },
        { month: 'Jun', value: 35.15 },
        { month: 'Jul', value: 38.75 },
        { month: 'Aug', value: 33.95 },
        { month: 'Sep', value: 39.65 },
        { month: 'Oct', value: 35.85 },
        { month: 'Nov', value: 36.78 },
        { month: 'Dec', value: 34.78 }
      ],
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
      ),
      formatMonth,
      formatValue
    }
  ]

  return (
    <div>
      <GraphCard data={data} tabs={tabs} />
    </div>
  )
}

export default graph_1
