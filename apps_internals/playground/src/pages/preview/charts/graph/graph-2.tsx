import { Icon } from '@iconify/react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@vx-oss/react'
import { Chart, GraphCard, TabData } from '@vx-pro/charts-graph-2'

const graph_2 = () => {
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
        { month: 'Jan', value: 98000, lastYearValue: 43500 },
        { month: 'Feb', value: 125000, lastYearValue: 38500 },
        { month: 'Mar', value: 89000, lastYearValue: 58300 },
        { month: 'Apr', value: 156000, lastYearValue: 35300 },
        { month: 'May', value: 112000, lastYearValue: 89600 },
        { month: 'Jun', value: 167000, lastYearValue: 56400 },
        { month: 'Jul', value: 138000, lastYearValue: 45200 },
        { month: 'Aug', value: 178000, lastYearValue: 84600 },
        { month: 'Sep', value: 129000, lastYearValue: 73500 },
        { month: 'Oct', value: 159000, lastYearValue: 65900 },
        { month: 'Nov', value: 147000, lastYearValue: 82300 },
        { month: 'Dec', value: 127000, lastYearValue: 95000 }
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
      formatValue,
      formatMonth
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
        { month: 'Jan', value: 587000, lastYearValue: 243500 },
        { month: 'Feb', value: 698000, lastYearValue: 318500 },
        { month: 'Mar', value: 542000, lastYearValue: 258300 },
        { month: 'Apr', value: 728000, lastYearValue: 335300 },
        { month: 'May', value: 615000, lastYearValue: 289600 },
        { month: 'Jun', value: 689000, lastYearValue: 256400 },
        { month: 'Jul', value: 573000, lastYearValue: 245200 },
        { month: 'Aug', value: 695000, lastYearValue: 384600 },
        { month: 'Sep', value: 589000, lastYearValue: 273500 },
        { month: 'Oct', value: 652000, lastYearValue: 365900 },
        { month: 'Nov', value: 623000, lastYearValue: 282300 },
        { month: 'Dec', value: 523000, lastYearValue: 295000 }
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
      formatValue,
      formatMonth
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
        { month: 'Jan', value: 2820000, lastYearValue: 1435000 },
        { month: 'Feb', value: 2380000, lastYearValue: 1285000 },
        { month: 'Mar', value: 2690000, lastYearValue: 1583000 },
        { month: 'Apr', value: 2145000, lastYearValue: 1235000 },
        { month: 'May', value: 2760000, lastYearValue: 1896000 },
        { month: 'Jun', value: 2280000, lastYearValue: 1564000 },
        { month: 'Jul', value: 2620000, lastYearValue: 1452000 },
        { month: 'Aug', value: 2145000, lastYearValue: 1846000 },
        { month: 'Sep', value: 2470000, lastYearValue: 1735000 },
        { month: 'Oct', value: 2230000, lastYearValue: 1659000 },
        { month: 'Nov', value: 2312000, lastYearValue: 1823000 },
        { month: 'Dec', value: 2230000, lastYearValue: 1950000 }
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
      formatValue,
      formatMonth
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
        { month: 'Jan', value: 42.82, lastYearValue: 25.12 },
        { month: 'Feb', value: 35.95, lastYearValue: 18.45 },
        { month: 'Mar', value: 39.25, lastYearValue: 22.85 },
        { month: 'Apr', value: 34.58, lastYearValue: 15.92 },
        { month: 'May', value: 40.92, lastYearValue: 24.38 },
        { month: 'Jun', value: 35.15, lastYearValue: 16.75 },
        { month: 'Jul', value: 38.75, lastYearValue: 21.45 },
        { month: 'Aug', value: 33.95, lastYearValue: 17.82 },
        { month: 'Sep', value: 39.65, lastYearValue: 23.15 },
        { month: 'Oct', value: 35.85, lastYearValue: 19.95 },
        { month: 'Nov', value: 36.78, lastYearValue: 20.45 },
        { month: 'Dec', value: 34.78, lastYearValue: 18.25 }
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
      formatValue,
      formatMonth
    }
  ]

  return (
    <div>
      <GraphCard data={data} tabs={tabs} />
    </div>
  )
}

export default graph_2
