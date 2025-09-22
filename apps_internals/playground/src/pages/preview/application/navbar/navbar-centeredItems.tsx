import { Link } from '@tanstack/react-router'
import { Button, NavbarItem, NavbarMenuItem } from '@vx-oss/react'
import {
  IconSvgProps,
  NavbarCenteredItems,
  navProps
} from '@vx-pro/application-navbar-centeredItems-navbar'
import React from 'react'

const navbar_centeredItems = () => {
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
      <NavbarItem className="ml-2 flex!">
        <Button radius="full" variant="flat">
          Login
        </Button>
      </NavbarItem>
    ),
    navMenuactions: (
      <>
        <NavbarMenuItem>
          <Button fullWidth as={Link} href="/#" variant="faded">
            Sign In
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
          <Button
            fullWidth
            as={Link}
            className="bg-foreground text-background"
            href="/#">
            Get Started
          </Button>
        </NavbarMenuItem>
      </>
    ),
    navItems: navbars,
    menuItems: menus
  }

  return (
    <div>
      <NavbarCenteredItems data={data} />
    </div>
  )
}

export default navbar_centeredItems
