import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import {
  Avatar,
  Button,
  Select,
  SelectItem,
  SharedSelection,
  Tab,
  Tabs
} from '@vx-oss/react'
import {
  bookDetailsProps,
  bookFormProps,
  BookingDetails,
  BookingForm,
  CalendarBookingForm,
  calendarProps,
  DurationEnum,
  durations,
  timeZoneOptions
} from '@vx-pro/application-calendarbooking-form'
import { useCallback, useState } from 'react'

const CalendarBookingPage: React.FC = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState<string>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  const [selectedDuration, setSelectedDuration] = useState<DurationEnum>(
    DurationEnum.FifteenMinutes
  )

  const onTimeZoneChange = (keys: SharedSelection) => {
    const newTZ = Array.from(keys)[0]
    if (newTZ) setSelectedTimeZone(newTZ.toString())
  }

  const onDurationChange = (selectedKey: React.Key) => {
    const found = durations.find(d => d.key === selectedKey)
    if (found) setSelectedDuration(found.key)
  }

  const handlerBack = useCallback(() => {
    console.log('Back pressed')
  }, [])

  const onConfirm = ({
    name,
    email,
    notes
  }: {
    name: string
    email: string
    notes: string
  }) => {
    alert(
      `Confirmed: ${name} / ${email}\nnotes: ${notes}\nTZ: ${selectedTimeZone}\nDuration: ${selectedDuration}`
    )
  }

  const bookdata: bookDetailsProps = {
    logo: (
      <Avatar
        className="mb-3 shadow-md"
        size="sm"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704k"
      />
    ),
    title: 'Zoey lang',
    subtitle: 'Demo call',
    description:
      'Lorem ipsum dolor sit amet cons ectetur. Turpis gravida eget felissenectus eleifend.',
    actions: (
      <>
        <Icon
          className="text-default-300 shrink-0"
          icon="solar:global-linear"
          width={16}
        />
        <Select
          aria-label="Time Zone"
          className="max-w-48"
          classNames={{
            trigger: 'h-4 min-h-4 bg-transparent border-none shadow-none',
            value:
              'text-xs font-medium group-data-[has-value=true]:text-default-600'
          }}
          items={timeZoneOptions}
          placeholder="Select time zone"
          selectedKeys={[selectedTimeZone]}
          size="sm"
          variant="faded"
          onSelectionChange={onTimeZoneChange}>
          {option => (
            <SelectItem
              key={option.value}
              className="capitalize"
              classNames={{
                title: 'text-xs font-medium text-default-600',
                description: 'text-xs font-medium text-default-600'
              }}>
              {option.label}
            </SelectItem>
          )}
        </Select>
      </>
    ),
    footerActions: (
      <Tabs
        classNames={{ tab: 'h-6' }}
        size="sm"
        onSelectionChange={onDurationChange}>
        {durations.map(duration => (
          <Tab key={duration.key} title={duration.label} />
        ))}
      </Tabs>
    )
  }

  const bookformdata: bookFormProps = {
    footerLink: (
      <>
        By proceeding you agree to our{' '}
        <Link className="text-default-800 text-xs" href="#" to={'.'}>
          Terms
        </Link>{' '}
        and{' '}
        <Link className="text-default-800 text-xs" href="#" to={'.'}>
          Privacy Policy
        </Link>
        .
      </>
    ),
    footerActions: (
      <>
        <Button variant="flat" onPress={handlerBack}>
          Back
        </Button>
        <Button color="primary" type="submit">
          Confirm
        </Button>
      </>
    )
  }

  const data: calendarProps = {
    actions: (
      <>
        <BookingDetails
          className="md:w-[220px] md:px-4 md:pt-8"
          selectedDuration={selectedDuration}
          selectedTimeZone={selectedTimeZone}
          onDurationChange={onDurationChange}
          onTimeZoneChange={onTimeZoneChange}
          data={bookdata}
        />
        <BookingForm onConfirm={onConfirm} data={bookformdata} />
      </>
    )
  }

  return (
    <div>
      <CalendarBookingForm data={data} />
    </div>
  )
}

export default CalendarBookingPage
