'use client'

import { Icon } from '@iconify/react'
import { getLocalTimeZone, isWeekend, today } from '@internationalized/date'
import {
  Avatar,
  Button,
  cn,
  Form,
  Input,
  ScrollShadow,
  Skeleton,
  Spacer,
  Tab,
  Tabs,
  Textarea,
  type DateValue,
  type SharedSelection
} from '@vx-oss/react'

import { format } from 'date-fns'
import { motion } from 'framer-motion'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const LoadingSkeleton = () => (
  <div className="rounded-large bg-default-50 shadow-small flex w-[393px] flex-col items-center gap-5 lg:w-fit lg:flex-row lg:items-start lg:px-6">
    <div className="flex w-full flex-col p-6 lg:w-[220px] lg:px-4 lg:pt-8">
      <Skeleton className="h-8 w-8 rounded-full" />
      <Skeleton className="mt-3 h-2.5 w-[60px] rounded-lg" />
      <Skeleton className="mt-[5.5px] h-4 w-[95px] rounded-lg" />
      <Skeleton className="mt-4 h-[10.5px] w-full rounded-lg" />
      <Skeleton className="mt-[4.5px] h-[10.5px] w-[112px] rounded-lg" />
      <Skeleton className="mt-10 h-2.5 w-[40px] rounded-lg" />
      <Skeleton className="mt-[18px] h-2.5 w-[70px] rounded-lg" />
      <Skeleton className="mt-[15px] h-2.5 w-[124px] rounded-lg" />
      <Skeleton className="mt-[29px] h-8 w-[114px] rounded-lg" />
    </div>
    <div className="w-full px-6 lg:w-[372px] lg:px-0">
      <div className="flex items-center justify-center py-3">
        <Skeleton className="h-[9px] w-[98px] rounded-full" />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-2.5 rounded-full" />
        ))}
      </div>
      <div className="mt-8 grid grid-cols-7 gap-5">
        {Array.from({ length: 35 }).map((_, i) => (
          <Skeleton
            key={i}
            className={cn('size-[29px] rounded-full', {
              'opacity-0': i === 0 || i === 1 || i === 33 || i === 34
            })}
          />
        ))}
      </div>
    </div>
    <div className="w-full gap-2 px-6 pb-6 lg:w-[220px] lg:p-0">
      <div className="flex items-center justify-between py-2">
        <Skeleton className="h-[15px] w-[100px] rounded-full" />
        <Skeleton className="h-[27px] w-[67px] rounded-full" />
      </div>
      <div className="mt-2 space-y-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-full rounded-full" />
        ))}
      </div>
    </div>
  </div>
)

const CalendarBooking = ({
  data,
  bookdata,
  bookformdata,
  calendarbookdata,
  calendarBookingStep,
  setCalendarBookingStep
}: {
  data: calendarProps
  bookdata?: bookDetailsProps
  bookformdata?: bookFormProps
  calendarbookdata?: calendarBookProps
  calendarBookingStep: CalendarBookingStepType
  setCalendarBookingStep: (step: CalendarBookingStepType) => void
}) => {
  const [isLoading, setIsLoading] = useState(true)

  const [selectedTimeZone, setSelectedTimeZone] = useState<string>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  const [selectedDuration, setSelectedDuration] = useState<DurationEnum>(
    DurationEnum.FifteenMinutes
  )
  const [selectedDate, setSelectedDate] = useState<DateValue>(
    today(getLocalTimeZone())
  )
  const [selectedTimeSlotRange, setSelectedTimeSlotRange] = useState<
    TimeSlot[]
  >([])
  const [selectedTime, setSelectedTime] = useState<string>('')

  /* handlers */
  const onTimeZoneChange = (keys: SharedSelection) => {
    const newTZ = Array.from(keys)[0]
    if (newTZ) setSelectedTimeZone(newTZ.toString())
  }

  const onDurationChange = (selectedKey: React.Key) => {
    const d = durations.find(d => d.key === selectedKey)
    if (d) setSelectedDuration(d.key)
    setSelectedTime('')
  }

  const onDateChange = (date: DateValue) => setSelectedDate(date)

  const onTimeChange = (time: string, slotRange?: TimeSlot[]) => {
    if (slotRange) setSelectedTimeSlotRange(slotRange)
    setSelectedTime(time)
  }

  const onConfirm = () => setCalendarBookingStep('booking_form')

  const isDateUnavailable = (date: DateValue) => isWeekend(date, 'en-US')

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(t)
  }, [])

  if (isLoading) return <LoadingSkeleton />

  if (calendarBookingStep === 'booking_form')
    return (
      <CalendarBookingForm
        setCalendarBookingStep={setCalendarBookingStep}
        selectedDate={selectedDate}
        selectedTimeSlotRange={selectedTimeSlotRange}
        bookdata={bookdata}
        bookformdata={bookformdata} // <-- Pass bookformdata here
      />
    )

  if (calendarBookingStep === 'booking_confirmation')
    return (
      <CalendarBookingConfirmation
        setCalendarBookingStep={setCalendarBookingStep}
        data={calendarbookdata}
      />
    )

  return (
    <div className="rounded-large bg-default-50 shadow-small flex w-[393px] flex-col items-center gap-5 lg:w-fit lg:flex-row lg:items-start lg:px-6">
      {typeof data.actions === 'function'
        ? data.actions({
            selectedDate,
            selectedTime,
            selectedDuration,
            onDateChange,
            onTimeChange,
            onDurationChange,
            onTimeZoneChange,
            selectedTimeZone,
            onConfirm,
            isDateUnavailable
          })
        : data.actions}
    </div>
  )
}

export { CalendarBooking }

const BookingDetails = ({
  className,

  selectedDuration,

  selectedTimeSlotRange,
  selectedDate,
  data
}: BookingDetailsProps) => {
  const bookingDate = useMemo(() => {
    if (selectedDate) {
      const date = new Date(selectedDate.toString())

      return format(date, 'EEEE, MMMM d, yyyy')
    }

    return ''
  }, [selectedDate])

  return (
    <div
      className={cn(
        'flex flex-col p-6 lg:w-[220px] lg:px-4 lg:pt-8',
        className
      )}>
      {data?.logo ?? (
        <Avatar
          className="mb-3 shadow-md"
          size="sm"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704k"
        />
      )}
      <p className="text-default-500 text-xs font-medium">{data?.title}</p>
      <p className="text-default-foreground mb-2 text-lg font-semibold">
        {data?.subtitle}
      </p>
      <p className="text-small text-default-500 mb-4">{data?.description}</p>
      <div className="mb-6 flex flex-col gap-3">
        <div
          className={cn('flex items-start gap-2', {
            hidden: !bookingDate
          })}>
          <Icon
            className="text-default-300"
            icon="solar:calendar-minimalistic-bold"
            width={16}
          />
          <div className="text-default-600 text-xs font-medium">
            <p>{bookingDate}</p>
            <p>{`${selectedTimeSlotRange?.[0].label} -
            ${selectedTimeSlotRange?.[1].label}`}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Icon
            className="text-default-300"
            icon="solar:clock-circle-bold"
            width={16}
          />
          <p className="text-default-600 text-xs font-medium">
            {selectedDuration}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Icon
            className="text-default-300"
            icon="solar:videocamera-bold"
            width={16}
          />
          <p className="text-default-600 text-xs font-medium">Zoom</p>
        </div>
        <div className="flex items-center">{data?.actions}</div>
      </div>
      {data?.footerActions}
    </div>
  )
}

export { BookingDetails }

const BookingForm = ({ onConfirm, data }: BookingFormProps) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const notes = formData.get('notes') as string

    onConfirm({ name, email, notes })
  }

  return (
    <Form
      className="flex w-full flex-col gap-4 px-6 py-6 md:w-[340px] md:px-0"
      validationBehavior="native"
      onSubmit={onSubmit}>
      <Input
        isRequired
        classNames={{ label: 'text-tiny text-default-600' }}
        label="Your name"
        labelPlacement="outside"
        name="name"
        placeholder=" "
      />
      <Input
        isRequired
        classNames={{ label: 'text-tiny text-default-600' }}
        label="Email address"
        labelPlacement="outside"
        name="email"
        placeholder=" "
        type="email"
      />
      <Textarea
        classNames={{ label: 'text-tiny text-default-600' }}
        label="Additional notes"
        labelPlacement="outside"
        minRows={4}
        name="notes"
      />
      <p className="text-default-500 text-xs">{data?.footerLink}</p>
      <div className="mt-2 flex w-full justify-end gap-2">
        {data?.footerActions}
      </div>
    </Form>
  )
}

const CalendarTimeSelect = ({
  weekday,
  day,
  duration,
  selectedTime,
  onTimeChange,
  onConfirm
}: CalendarTimeSelectProps) => {
  const [timeFormat, setTimeFormat] = useState<TimeFormatEnum>(
    TimeFormatEnum.TwelveHour
  )

  const onTimeFormatChange = (selectedKey: React.Key) => {
    const timeFormatIndex = timeFormats.findIndex(tf => tf.key === selectedKey)

    if (timeFormatIndex !== -1) {
      setTimeFormat(timeFormats[timeFormatIndex].key)
      onTimeChange('')
    }
  }

  const timeSlots = useMemo(() => {
    const slots: TimeSlot[] = []
    const totalMinutesInDay = 24 * 60
    const intervalMinutes = duration === DurationEnum.FifteenMinutes ? 15 : 30

    for (
      let minutes = 0;
      minutes < totalMinutesInDay;
      minutes += intervalMinutes
    ) {
      const hours = Math.floor(minutes / 60)
      const mins = minutes % 60

      const value = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`

      if (timeFormat === TimeFormatEnum.TwelveHour) {
        const period = hours >= 12 ? 'pm' : 'am'
        const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours

        slots.push({
          value,
          label: `${displayHours}:${mins.toString().padStart(2, '0')} ${period}`
        })
      } else {
        slots.push({
          value,
          label: value
        })
      }
    }

    return slots
  }, [timeFormat, duration])

  return (
    <div className="flex w-full flex-col items-center gap-2 px-6 pb-6 lg:w-[220px] lg:p-0">
      <div className="flex w-full justify-between py-3">
        <p className="text-small flex items-center">
          <span className="text-default-700">{weekday}</span>
          &nbsp;
          <span className="text-default-500">{day}</span>
        </p>
        <Tabs
          classNames={{
            tab: 'h-6 py-0.5 px-1.5',
            tabList: 'p-0.5 rounded-[7px] gap-0.5',
            cursor: 'rounded-md'
          }}
          size="sm"
          onSelectionChange={onTimeFormatChange}>
          {timeFormats.map(timeFormat => (
            <Tab key={timeFormat.key} title={timeFormat.label} />
          ))}
        </Tabs>
      </div>
      <div className="flex h-full max-h-[300px] w-full">
        <ScrollShadow hideScrollBar className="flex w-full flex-col gap-2">
          {timeSlots.map(slot => (
            <CalendarTime
              key={slot.value}
              isSelected={slot.value === selectedTime}
              slot={slot}
              timeSlots={timeSlots}
              onConfirm={onConfirm}
              onTimeChange={onTimeChange}
            />
          ))}
        </ScrollShadow>
      </div>
    </div>
  )
}

export { CalendarTimeSelect }

const CalendarTime = ({
  slot,
  isSelected,
  onTimeChange,
  onConfirm,
  timeSlots
}: CalendarTimeProps) => {
  const confirmRef = useRef<HTMLButtonElement>(null)

  return (
    <div className="relative flex w-full justify-end gap-2">
      <motion.div
        animate={{ width: isSelected ? 'calc(100% - 6.5rem)' : '100%' }}
        className="absolute left-0"
        initial={false}>
        <Button
          className="bg-default-100 text-default-500 w-full text-xs leading-4 font-semibold"
          onPress={() => {
            const selectedTimeSlotRange = []
            const index = timeSlots.findIndex(s => s.value === slot.value)

            if (index !== timeSlots.length - 1) {
              selectedTimeSlotRange.push(timeSlots[index], timeSlots[index + 1])
            } else {
              selectedTimeSlotRange.push(timeSlots[index], timeSlots[index])
            }
            onTimeChange(slot.value, selectedTimeSlotRange)
            // for easier keyboard navigation
            confirmRef.current?.focus()
          }}>
          {slot.label}
        </Button>
      </motion.div>
      <motion.div
        animate={{
          width: isSelected ? '6rem' : '0',
          opacity: isSelected ? 1 : 0
        }}
        className="overflow-hidden opacity-0"
        initial={false}>
        <Button
          ref={confirmRef}
          className="w-24"
          color="primary"
          tabIndex={isSelected ? undefined : -1}
          onPress={onConfirm}>
          Confirm
        </Button>
      </motion.div>
    </div>
  )
}

const CalendarBookingForm = ({
  setCalendarBookingStep,
  selectedTimeSlotRange,
  selectedDate,
  bookformdata,
  bookdata
}: CalendarBookingFormProps & { bookformdata?: bookFormProps } & {
  bookdata?: bookDetailsProps
}) => {
  const [selectedTimeZone, setSelectedTimeZone] = useState<string>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  const [selectedDuration, setSelectedDuration] = useState<DurationEnum>(
    DurationEnum.FifteenMinutes
  )

  const onTimeZoneChange = (keys: SharedSelection) => {
    const newTimeZone = Array.from(keys)[0]
    if (newTimeZone) setSelectedTimeZone(newTimeZone.toString())
  }

  const onDurationChange = (selectedKey: React.Key) => {
    const d = durations.find(d => d.key === selectedKey)
    if (d) setSelectedDuration(d.key)
  }

  const onConfirm = () => {
    setCalendarBookingStep('booking_confirmation')
  }

  return (
    <div className="rounded-large bg-default-50 shadow-small flex w-[393px] flex-col items-center gap-5 md:w-fit md:flex-row md:items-start md:px-6">
      <BookingDetails
        className="md:w-[220px] md:px-4 md:pt-8"
        selectedDate={selectedDate}
        selectedDuration={selectedDuration}
        selectedTimeSlotRange={selectedTimeSlotRange}
        selectedTimeZone={selectedTimeZone}
        onDurationChange={onDurationChange}
        onTimeZoneChange={onTimeZoneChange}
        data={bookdata}
      />
      <BookingForm
        setCalendarBookingStep={setCalendarBookingStep}
        onConfirm={onConfirm}
        data={bookformdata} // <-- pass bookformdata to BookingForm
      />
    </div>
  )
}

const CalendarBookingConfirmation = ({
  setCalendarBookingStep,
  data
}: CalendarBookingConfirmationProps) => {
  const handleCancelOrReschedule = useCallback(() => {
    if (setCalendarBookingStep) setCalendarBookingStep('booking_initial')
  }, [setCalendarBookingStep])

  return (
    <div className="rounded-large bg-default-50 shadow-small flex w-[375px] flex-col items-center gap-5 py-8">
      <div className="flex w-full flex-col items-center px-8">
        <Icon
          className="text-success-500 mb-3"
          icon="solar:check-circle-bold-duotone"
          width={56}
        />
        <p className="mb-2 text-base font-medium">{data.title}</p>
        <p className="text-small text-default-500 text-center">
          {data.description}
        </p>
      </div>
      <Spacer className="bg-default-100 w-full" x={0} y={0} />
      <div className="flex w-full flex-col items-center gap-4 px-8">
        <div className="flex w-full flex-col gap-1">
          <p className="text-small text-default-foreground font-medium">
            Details
          </p>
          <p className="text-tiny text-default-500">{data.detailDescription}</p>
        </div>
        <div className="flex w-full flex-col gap-1">
          <p className="text-small text-default-foreground font-medium">When</p>
          <p className="text-tiny text-default-500">
            {data.date}
            <br />
            {data.time}
          </p>
        </div>
        <div className="flex w-full flex-col gap-1">
          <p className="text-small text-default-foreground font-medium">
            Invited
          </p>
          <span className="flex items-center gap-1">
            <p className="text-tiny text-default-500">{data.name}</p>
            {data.inviteactions}
          </span>
          <p className="text-tiny text-default-500">{data.email}</p>
        </div>
        <div className="flex w-full flex-col gap-1">
          <p className="text-small text-default-foreground font-medium">
            Where
          </p>
          {data.inviteLink}
        </div>
        <div className="flex w-full flex-col gap-1">
          <p className="text-small text-default-foreground font-medium">
            {data.footerhead}
          </p>
          <span className="flex items-center gap-1">
            <p className="text-tiny text-default-500">{data.footerDesc}</p>
          </span>
        </div>
      </div>
      <Spacer className="bg-default-100 w-full" x={0} y={0} />
      <p className="text-tiny text-default-500 text-center">
        {data.footerLink}
      </p>
      <Spacer className="bg-default-100 w-full" x={0} y={0} />
      <div className="flex flex-col items-center gap-2">
        <p className="text-tiny text-default-500">{data.footerText}</p>
        <div className="flex items-center gap-2">{data.footerActions}</div>
      </div>
    </div>
  )
}

export type CalendarBookingStepType =
  | 'booking_initial'
  | 'booking_confirmation'
  | 'booking_form'

export enum DurationEnum {
  FifteenMinutes = '15m',
  ThirtyMinutes = '30m'
}
export const durations = [
  { key: DurationEnum.FifteenMinutes, label: '15m' },
  { key: DurationEnum.ThirtyMinutes, label: '30m' }
]

export const timeZoneOptions = Intl.supportedValuesOf('timeZone').map(tz => ({
  label: tz,
  value: tz
}))

export enum TimeFormatEnum {
  TwelveHour = '12h',
  TwentyFourHour = '24h'
}
export const timeFormats = [
  { key: TimeFormatEnum.TwelveHour, label: '12h' },
  { key: TimeFormatEnum.TwentyFourHour, label: '24h' }
]
export interface TimeSlot {
  value: string
  label: string
}

export interface BookingDetailsProps {
  className?: string
  selectedTimeZone: string
  selectedDuration: DurationEnum
  onTimeZoneChange?: (keys: SharedSelection) => void
  onDurationChange?: (selectedKey: React.Key) => void
  selectedTimeSlotRange?: TimeSlot[]
  selectedDate?: DateValue
  data?: bookDetailsProps
}

export interface CalendarTimeSelectProps {
  weekday: string
  day: number
  duration: DurationEnum
  selectedTime: string
  onTimeChange: (time: string, selectedTimeSlotRange?: TimeSlot[]) => void
  onConfirm: () => void
}

export interface CalendarTimeProps {
  slot: TimeSlot
  timeSlots: TimeSlot[]
  isSelected: boolean
  onTimeChange: (time: string, selectedTimeSlotRange?: TimeSlot[]) => void
  onConfirm: () => void
}

export interface CalendarBookingFormProps {
  setCalendarBookingStep: (step: CalendarBookingStepType) => void
  selectedTimeSlotRange?: TimeSlot[]
  selectedDate?: DateValue
  data?: calendarBookProps
}

export interface BookingFormProps {
  onConfirm: ({
    name,
    email,
    notes
  }: {
    name: string
    email: string
    notes: string
  }) => void
  setCalendarBookingStep?: (step: CalendarBookingStepType) => void
  data?: bookFormProps
}

export interface CalendarBookingConfirmationProps {
  setCalendarBookingStep?: (step: CalendarBookingStepType) => void
  data?: calendarBookProps
}

export type bookDetailsProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  description?: string
  footerText?: string
  footerLink?: React.ReactNode
  footerActions?: React.ReactNode
  actions?: React.ReactNode
}

export type bookFormProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  description?: string
  footerText?: string
  footerLink?: React.ReactNode
  footerActions?: React.ReactNode
  actions?: React.ReactNode
}

export type calendarProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  description?: string
  bookingDetails?: bookDetailsProps[]
  footerText?: string
  footerLink?: React.ReactNode
  footerActions?: React.ReactNode
  actions?:
    | React.ReactNode
    | ((props: {
        selectedDate: DateValue
        selectedTime: string
        selectedDuration: DurationEnum
        onDateChange: (date: DateValue) => void
        onTimeChange: (time: string, slotRange?: TimeSlot[]) => void
        onDurationChange: (key: React.Key) => void
        onTimeZoneChange: (keys: SharedSelection) => void
        selectedTimeZone: string
        onConfirm: () => void
        isDateUnavailable: (date: DateValue) => boolean
      }) => React.ReactNode)
}

export type calendarBookProps = {
  title?: string
  subtitle?: string
  description?: string
  details?: string
  detailDescription?: string
  name?: string
  schedule?: string
  date?: string
  time?: string
  email?: string
  invitename?: string
  inviteactions?: React.ReactNode
  inviteLink?: React.ReactNode
  footerhead?: string
  footerDesc?: string
  footerText?: string
  footerLink?: React.ReactNode
  footerActions?: React.ReactNode
  actions?: React.ReactNode
}
