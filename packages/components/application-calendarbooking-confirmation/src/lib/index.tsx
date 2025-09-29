'use client'

import { Icon } from '@iconify/react'
import { Divider } from '@vx-oss/react'

const CalendarBookingConfirmation = ({ data }: { data: calendarProps }) => {
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
      <Divider className="bg-default-200 w-full" />
      <div className="flex w-full flex-col items-center gap-4 px-8">
        <div className="flex w-full flex-col gap-1">
          <p className="text-small font-medium">Details</p>
          <p className="text-tiny text-default-500">{data.detailDescription}</p>
        </div>
        <div className="flex w-full flex-col gap-1">
          <p className="text-small font-medium">When</p>
          <p className="text-tiny text-default-500">
            {data.date}
            <br />
            {data.time}
          </p>
        </div>
        <div className="flex w-full flex-col gap-1">
          <p className="text-small font-medium">Invited</p>
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
      <Divider className="bg-default-100 w-full" />
      <p className="text-small text-default-500 text-center">
        {data.footerLink}
      </p>
      <Divider className="bg-default-100 w-full" />
      <div className="flex flex-col items-center gap-2">
        <p className="text-small text-default-500">{data.footerText}</p>
        <div className="flex items-center gap-2">{data.footerActions}</div>
      </div>
    </div>
  )
}

export { CalendarBookingConfirmation }

export type calendarProps = {
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
