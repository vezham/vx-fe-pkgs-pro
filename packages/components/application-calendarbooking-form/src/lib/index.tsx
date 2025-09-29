'use client'

import { Icon } from '@iconify/react'
import { format } from 'date-fns'
import React, { useCallback, useMemo } from 'react'

import {
  Avatar,
  cn,
  Form,
  Input,
  Textarea,
  type SharedSelection
} from '@vx-oss/react'

const BookingDetails: React.FC<BookingDetailsProps> = ({
  className,

  selectedDuration,

  selectedTimeSlotRange,
  selectedDate,
  data
}) => {
  const bookingDate = useMemo(() => {
    if (selectedDate) {
      return format(selectedDate, 'EEEE, MMMM d, yyyy')
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
        <div className={cn('flex items-start gap-2', { hidden: !bookingDate })}>
          <Icon
            className="text-default-300"
            icon="solar:calendar-minimalistic-bold"
            width={16}
          />
          <div className="text-default-600 text-xs font-medium">
            <p>{bookingDate}</p>
            <p>
              {`${selectedTimeSlotRange?.[0]?.label ?? ''}${
                selectedTimeSlotRange
                  ? ' - ' + (selectedTimeSlotRange[1]?.label ?? '')
                  : ''
              }`}
            </p>
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

const BookingForm: React.FC<BookingFormProps> = ({
  onConfirm,
  setCalendarBookingStep,
  data
}) => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const name = (formData.get('name') as string) || ''
    const email = (formData.get('email') as string) || ''
    const notes = (formData.get('notes') as string) || ''

    onConfirm({ name, email, notes })
  }

  const handlerBack = useCallback(() => {
    if (setCalendarBookingStep) {
      setCalendarBookingStep('booking_initial')
    }
  }, [setCalendarBookingStep])

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

export { BookingForm }

const CalendarBookingForm: React.FC<{ data: calendarProps }> = ({ data }) => {
  return (
    <div className="rounded-large bg-default-50 shadow-small flex w-[393px] flex-col items-center gap-5 md:w-fit md:flex-row md:items-start md:px-6">
      {data.actions}
    </div>
  )
}

export { CalendarBookingForm }

export interface BookingDetailsProps {
  className?: string
  selectedTimeZone: string
  selectedDuration: DurationEnum
  onTimeZoneChange?: (keys: SharedSelection) => void
  onDurationChange?: (selectedKey: React.Key) => void
  selectedTimeSlotRange?: TimeSlot[]
  selectedDate?: Date
  data?: bookDetailsProps
}

export interface BookingFormProps {
  onConfirm: (args: { name: string; email: string; notes: string }) => void
  setCalendarBookingStep?: (step: CalendarBookingStepType) => void
  data?: bookFormProps
}

export interface TimeSlot {
  value: string
  label: string
}

export enum DurationEnum {
  FifteenMinutes = '15m',
  ThirtyMinutes = '30m'
}

export const durations = [
  { key: DurationEnum.FifteenMinutes, label: '15m' },
  { key: DurationEnum.ThirtyMinutes, label: '30m' }
]

export type CalendarBookingStepType =
  | 'booking_initial'
  | 'booking_confirmation'
  | 'booking_form'

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
  actions?: React.ReactNode
}

export const timeZoneOptions = Intl.supportedValuesOf('timeZone').map(
  timeZone => ({
    label: timeZone,
    value: timeZone
  })
)
