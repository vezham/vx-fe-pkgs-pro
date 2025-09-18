import { Icon } from '@iconify/react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  RadioGroup
} from '@vx-oss/react'
import {
  BarChartCard,
  BarChartProps,
  ButtonRadioItem
} from '@vx-pro/charts-bars-1'

const bars_1 = () => {
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
      title: 'Operating Systems',
      categories: ['Android', 'iOS', 'Web', 'Windows'],
      color: 'default',
      chartData: [
        {
          weekday: 'Mon',
          android: 20,
          ios: 30,
          web: 20,
          windows: 10
        },
        {
          weekday: 'Tue',
          android: 35,
          ios: 35,
          web: 20,
          windows: 10
        },
        {
          weekday: 'Wed',
          android: 15,
          ios: 25,
          web: 20,
          windows: 10
        },
        {
          weekday: 'Thu',
          android: 12,
          ios: 35,
          web: 10,
          windows: 10
        },
        {
          weekday: 'Fri',
          android: 12,
          ios: 15,
          web: 20,
          windows: 10
        },
        {
          weekday: 'Sat',
          android: 35,
          ios: 25,
          web: 10,
          windows: 6
        },
        {
          weekday: 'Sun',
          android: 40,
          ios: 30,
          web: 20,
          windows: 10
        }
      ],
      actions: (
        <>
          <RadioGroup
            aria-label="Time Range"
            className="flex gap-x-2 p-4"
            defaultValue="7"
            orientation="horizontal">
            <ButtonRadioItem value="7">7 days</ButtonRadioItem>
            <ButtonRadioItem value="14">14 days</ButtonRadioItem>
            <ButtonRadioItem value="30">30 days</ButtonRadioItem>
          </RadioGroup>

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
        </>
      ),
      formatWeekday
    },
    {
      title: 'Browser Usage',
      categories: ['Chrome', 'Firefox', 'Safari', 'Edge'],
      color: 'primary',
      chartData: [
        {
          weekday: 'Mon',
          chrome: 45,
          firefox: 20,
          safari: 12,
          edge: 8
        },
        {
          weekday: 'Tue',
          chrome: 40,
          firefox: 10,
          safari: 12,
          edge: 8
        },
        {
          weekday: 'Wed',
          chrome: 52,
          firefox: 12,
          safari: 15,
          edge: 10
        },
        {
          weekday: 'Thu',
          chrome: 28,
          firefox: 12,
          safari: 12,
          edge: 8
        },
        {
          weekday: 'Fri',
          chrome: 30,
          firefox: 12,
          safari: 12,
          edge: 8
        },
        {
          weekday: 'Sat',
          chrome: 45,
          firefox: 32,
          safari: 8,
          edge: 5
        },
        {
          weekday: 'Sun',
          chrome: 68,
          firefox: 17,
          safari: 10,
          edge: 5
        }
      ],
      actions: (
        <>
          <RadioGroup
            aria-label="Time Range"
            className="flex gap-x-2 p-4"
            defaultValue="7"
            orientation="horizontal">
            <ButtonRadioItem value="7">7 days</ButtonRadioItem>
            <ButtonRadioItem value="14">14 days</ButtonRadioItem>
            <ButtonRadioItem value="30">30 days</ButtonRadioItem>
          </RadioGroup>

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
        </>
      ),
      formatWeekday
    },
    {
      title: 'Device Types',
      categories: ['Mobile', 'Tablet', 'Desktop', 'Other'],
      color: 'secondary',
      chartData: [
        {
          weekday: 'Mon',
          mobile: 25,
          tablet: 10,
          desktop: 20,
          other: 20
        },
        {
          weekday: 'Tue',
          mobile: 40,
          tablet: 10,
          desktop: 30,
          other: 20
        },
        {
          weekday: 'Wed',
          mobile: 10,
          tablet: 50,
          desktop: 20,
          other: 20
        },
        {
          weekday: 'Thu',
          mobile: 40,
          tablet: 20,
          desktop: 20,
          other: 10
        },
        {
          weekday: 'Fri',
          mobile: 15,
          tablet: 30,
          desktop: 20,
          other: 10
        },
        {
          weekday: 'Sat',
          mobile: 50,
          tablet: 20,
          desktop: 10,
          other: 20
        },
        {
          weekday: 'Sun',
          mobile: 50,
          tablet: 10,
          desktop: 20,
          other: 20
        }
      ],
      actions: (
        <>
          <RadioGroup
            aria-label="Time Range"
            className="flex gap-x-2 p-4"
            defaultValue="7"
            orientation="horizontal">
            <ButtonRadioItem value="7">7 days</ButtonRadioItem>
            <ButtonRadioItem value="14">14 days</ButtonRadioItem>
            <ButtonRadioItem value="30">30 days</ButtonRadioItem>
          </RadioGroup>

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
        </>
      ),
      formatWeekday
    }
  ]

  return (
    <dl className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
      {data.map((item, index) => (
        <BarChartCard key={index} {...item} />
      ))}
    </dl>
  )
}

export default bars_1
