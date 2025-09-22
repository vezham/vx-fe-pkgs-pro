import { Button, NavbarItem } from '@vx-oss/react'
import {
  IconSvgProps,
  NavbarCentered,
  navProps
} from '@vx-pro/application-navbar-centered-navbar'
import React from 'react'

const navbar_centered = () => {
  const menus = [
    'About',
    'Blog',
    'Customers',
    'Pricing',
    'Enterprise',
    'Changelog',
    'Documentation',
    'Contact Us'
  ]

  const navbars = ['Home', 'Features', 'Contact', 'About us', 'Integrations']

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

  const data: navProps = {
    brand: 'ACME',
    logo: <AcmeIcon size={34} />,
    actions: (
      <NavbarItem className="ml-2 flex! gap-2">
        <Button
          className="bg-default-100 text-default-700 sm:text-default-500 sm:bg-transparent"
          radius="full"
          variant="light">
          Login
        </Button>
        <Button
          className="border-small border-secondary-500/20 bg-secondary-500/10 text-secondary-800 hidden sm:flex"
          color="secondary"
          radius="full"
          style={{
            boxShadow: 'inset 0 0 4px #bf97ff70'
          }}
          variant="flat">
          Start Free Trial
        </Button>
      </NavbarItem>
    ),

    navItems: navbars,
    menuItems: menus
  }

  return (
    <div>
      <NavbarCentered data={data} />
    </div>
  )
}

export default navbar_centered
