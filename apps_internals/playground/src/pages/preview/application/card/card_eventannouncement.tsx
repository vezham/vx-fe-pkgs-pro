import { Button } from '@vx-oss/react'
import {
  CardEventAnnouncement,
  cardProps,
  IconSvgProps
} from '@vx-pro/application-card-eventannouncement'
import React from 'react'

const card_eventannouncement = () => {
  const AcmeIcon: React.FC<IconSvgProps> = ({
    size = 32,
    width,
    height,
    ...props
  }) => (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 32 32"
      width={size || width}
      {...props}>
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )

  const data: cardProps = {
    logo: <AcmeIcon className="text-white" />,
    title: 'Acme Event',
    subtitle: 'Learn from the best',
    description:
      ' Unlock the full power of Acme! Gain expertise and insights from top organizations through guided tutorials, boosting productivity, enhancing security, and enabling seamless collaboration.',
    actions: (
      <Button
        fullWidth
        className="border-small border-white/20 bg-white/10 text-white">
        Get tickets now
      </Button>
    )
  }

  return (
    <div>
      <CardEventAnnouncement data={data} />
    </div>
  )
}

export default card_eventannouncement
