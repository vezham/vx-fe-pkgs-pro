import { Icon } from '@iconify/react'
import { Button, Chip, Link } from '@vx-oss/react'
import {
  CalendarBookingConfirmation,
  calendarProps
} from '@vx-pro/application-calendarbooking-confirmation'

const calendarbooking_confirmation = () => {
  const data: calendarProps = {
    title: 'This meeting is scheduled',
    description:
      ' We sent an email with a calendar invitation with the details to everyone.',

    detailDescription: ' 30min meeting between Zoey Lang and John Thompson',
    name: '  Zoey Lang (zoey@email.com)',
    schedule: '  30min meeting between Zoey Lang and John Thompson ',
    date: '  Friday, December 27, 2024',
    time: '   6:30 PM - 7:00 PM (Argentina Standard Time)',
    invitename: '   Zoey Lang (zoey@email.com)',
    inviteactions: (
      <Chip
        classNames={{
          base: 'px-0.5 h-4',
          content: 'text-[10px] leading-3'
        }}
        color="primary"
        size="sm"
        variant="flat">
        Host
      </Chip>
    ),
    inviteLink: (
      <Link className="flex w-fit items-center gap-1" href="#" size="sm">
        <p className="text-tiny text-default-500">Zoom</p>
        <Icon className="text-default-500" icon="mdi:open-in-new" width={12} />
      </Link>
    ),
    email: ' John Thompson (john.thompson@email.com)',
    footerhead: '    Additional notes',
    footerDesc: ' Lets talk about the latest updates of the project',
    footerText: 'Add to calendar',
    footerLink: (
      <>
        Need to make a change?{' '}
        <Link
          className="text-small text-default-800"
          href="#"
          size="sm"
          underline="always">
          Reschedule
        </Link>{' '}
        or{' '}
        <Link
          className="text-small text-default-800"
          href="#"
          size="sm"
          underline="always">
          Cancel
        </Link>
      </>
    ),
    footerActions: (
      <>
        <Button isIconOnly className="bg-default-100" size="sm">
          <Icon className="text-default-600" icon="mdi:google" width={16} />
        </Button>
        <Button isIconOnly className="bg-default-100" size="sm">
          <Icon
            className="text-default-600"
            icon="mdi:microsoft-outlook"
            width={16}
          />
        </Button>
        <Button isIconOnly className="bg-default-100" size="sm">
          <Icon
            className="text-default-600"
            icon="mdi:microsoft-office"
            width={16}
          />
        </Button>
        <Button isIconOnly className="bg-default-100" size="sm">
          <Icon
            className="text-default-600"
            icon="mdi:calendar-outline"
            width={16}
          />
        </Button>
      </>
    )
  }
  return (
    <div>
      <CalendarBookingConfirmation data={data} />
    </div>
  )
}

export default calendarbooking_confirmation
