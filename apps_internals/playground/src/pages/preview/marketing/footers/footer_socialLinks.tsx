import { Icon } from '@iconify/react'
import {
  CenteredFooter,
  FooterProps,
  IconSvgProps,
  SocialIconProps
} from '@vx-pro/marketing-centeredfooter-with-sociallinks'
import React from 'react'

const footer_socialLinks = () => {
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

  const data: FooterProps = {
    logo: <AcmeIcon size={34} />,
    navData: [
      {
        name: 'Home',
        href: '#'
      },
      {
        name: 'About',
        href: '#'
      },
      {
        name: 'Services',
        href: '#'
      },
      {
        name: 'Projects',
        href: '#'
      },
      {
        name: 'Contact',
        href: '#'
      },
      {
        name: 'Blog',
        href: '#'
      },
      {
        name: 'Careers',
        href: '#'
      }
    ],
    socialData: [
      {
        name: 'Facebook',
        href: '#',
        icon: (props: SocialIconProps) => (
          <Icon {...props} icon="fontisto:facebook" />
        )
      },
      {
        name: 'Instagram',
        href: '#',
        icon: (props: SocialIconProps) => (
          <Icon {...props} icon="fontisto:instagram" />
        )
      },
      {
        name: 'Twitter',
        href: '#',
        icon: (props: SocialIconProps) => (
          <Icon {...props} icon="fontisto:twitter" />
        )
      },
      {
        name: 'GitHub',
        href: '#',
        icon: (props: SocialIconProps) => (
          <Icon {...props} icon="fontisto:github" />
        )
      },
      {
        name: 'YouTube',
        href: '#',
        icon: (props: SocialIconProps) => (
          <Icon {...props} icon="fontisto:youtube-play" />
        )
      }
    ],
    companyName: 'ACME',
    copyright: '© 2024 Acme Inc. All rights reserved.'
  }

  return (
    <div>
      <CenteredFooter data={data} />
    </div>
  )
}

export default footer_socialLinks
