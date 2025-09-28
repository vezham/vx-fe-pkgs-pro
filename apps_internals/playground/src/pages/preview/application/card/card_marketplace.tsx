import { Avatar, Button, Chip } from '@vx-oss/react'
import {
  CardMarketPlace,
  cardProps,
  IconSvgProps
} from '@vx-pro/application-card-marketplace'
import React from 'react'

const card_marketplace = () => {
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
    title: '  Deploy Node.js app to Acme',
    subtitle: 'By The Acme Team',
    logo: <Avatar className="bg-content2" icon={<AcmeIcon />} />,
    description:
      '   Build the next generation of web experiences with the fastest and most reliable hosting for modern applications.',

    actions: (
      <>
        <Button size="sm" variant="faded">
          Configure
        </Button>
        <Chip color="primary" variant="dot">
          Typescript
        </Chip>
      </>
    )
  }

  return (
    <div>
      <CardMarketPlace data={data} />
    </div>
  )
}

export default card_marketplace
