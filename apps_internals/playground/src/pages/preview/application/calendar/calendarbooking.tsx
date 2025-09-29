'use client'

import { Icon } from '@iconify/react'
import { Link } from '@tanstack/react-router'
import {
  Avatar,
  Button,
  Calendar,
  Chip,
  Select,
  SelectItem,
  Tab,
  Tabs
} from '@vx-oss/react'
import {
  bookDetailsProps,
  bookFormProps,
  BookingDetails,
  CalendarBooking,
  CalendarBookingStepType,
  calendarBookProps,
  calendarProps,
  CalendarTimeSelect,
  DurationEnum,
  durations,
  timeZoneOptions
} from '@vx-pro/application-calendarbooking'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import React, { useState } from 'react'

const CalendarBookingPage = () => {
  // Timezone and duration state
  const [selectedTimeZone, setSelectedTimeZone] = useState<string>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  const [selectedDuration, setSelectedDuration] = useState<DurationEnum>(
    DurationEnum.FifteenMinutes
  )

  const onTimeZoneChange = (keys: Set<string>) => {
    const newTZ = Array.from(keys)[0]
    if (newTZ) setSelectedTimeZone(newTZ)
  }

  const onDurationChange = (key: React.Key) => {
    const durationItem = durations.find(d => d.key === key)
    if (durationItem) setSelectedDuration(durationItem.key)
  }

  const bookdata: bookDetailsProps = {
    logo: (
      <Avatar
        className="mb-3 shadow-md"
        size="sm"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704k"
      />
    ),
    title: 'Zoey Lang',
    subtitle: 'Demo call',
    description:
      'Lorem ipsum dolor sit amet cons ectetur. Turpis gravida eget felis senectus eleifend.',
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

  const [calendarBookingStep, setCalendarBookingStep] =
    useState<CalendarBookingStepType>('booking_initial')

  const handlerBack = () => setCalendarBookingStep('booking_initial')

  const bookformdata: bookFormProps = {
    footerLink: (
      <>
        By proceeding you agree to our{' '}
        <Link className="text-default-800 text-xs" href="#" to=".">
          Terms
        </Link>{' '}
        and{' '}
        <Link className="text-default-800 text-xs" href="#" to=".">
          Privacy Policy
        </Link>
        .
      </>
    ),
    footerActions: (
      <>
        <Button
          variant="flat"
          onPress={() => setCalendarBookingStep('booking_initial')}>
          Back
        </Button>
        <Button color="primary" type="submit">
          Confirm
        </Button>
      </>
    )
  }

  const calendarbookdata: calendarBookProps = {
    title: 'This meeting is scheduled',
    description:
      'We sent an email with a calendar invitation with the details to everyone.',
    detailDescription: '30min meeting between Zoey Lang and John Thompson',
    name: 'Zoey Lang (zoey@email.com)',
    date: 'Friday, December 27, 2024',
    time: '6:30 PM - 7:00 PM (Argentina Standard Time)',
    email: 'John Thompson (john.thompson@email.com)',
    inviteactions: (
      <Chip
        classNames={{ base: 'px-0.5 h-4', content: 'text-[10px] leading-3' }}
        color="primary"
        size="sm"
        variant="flat">
        Host
      </Chip>
    ),
    inviteLink: (
      <Link className="flex w-fit items-center gap-1" href="#" to=".">
        <p className="text-tiny text-default-500">Zoom</p>
        <Icon className="text-default-500" icon="mdi:open-in-new" width={12} />
      </Link>
    )
  }

  const data: calendarProps = {
    actions: ({
      selectedDate,
      selectedDuration,
      selectedTime,
      onDateChange,
      onTimeChange,
      onConfirm,
      onDurationChange,
      onTimeZoneChange,
      isDateUnavailable
    }) => (
      <>
        <BookingDetails
          data={bookdata}
          selectedDuration={selectedDuration}
          selectedTimeZone={selectedTimeZone}
          onDurationChange={onDurationChange}
          onTimeZoneChange={onTimeZoneChange}
        />
        <Calendar
          calendarWidth="372px"
          className="shadow-none dark:bg-transparent"
          classNames={{
            headerWrapper: 'bg-transparent px-3 pt-1.5 pb-3',
            title: 'text-default-700 text-small font-semibold',
            gridHeader: 'bg-transparent shadow-none',
            gridHeaderCell: 'font-medium text-default-400 text-xs p-0 w-full',
            gridHeaderRow: 'px-3 pb-3',
            gridBodyRow: 'gap-x-1 px-3 mb-1 first:mt-4 last:mb-0',
            gridWrapper: 'pb-3',
            cell: 'p-1.5 w-full',
            cellButton:
              'w-full h-9 rounded-medium data-selected:shadow-[0_2px_12px_0] data-selected:shadow-primary-300 text-small font-medium'
          }}
          isDateUnavailable={isDateUnavailable}
          value={selectedDate}
          weekdayStyle="short"
          onChange={onDateChange}
        />
        <CalendarTimeSelect
          day={parseInt(selectedDate.toString().split('-')[2])}
          duration={selectedDuration}
          selectedTime={selectedTime}
          weekday={format(new Date(selectedDate.toString()), 'EEE', {
            locale: enUS
          })}
          onConfirm={onConfirm}
          onTimeChange={onTimeChange}
        />
      </>
    )
  }

  return (
    <div>
      <CalendarBooking
        data={data}
        bookdata={bookdata}
        bookformdata={bookformdata}
        calendarbookdata={calendarbookdata}
        calendarBookingStep={calendarBookingStep}
        setCalendarBookingStep={setCalendarBookingStep}
      />
    </div>
  )
}

export default CalendarBookingPage
