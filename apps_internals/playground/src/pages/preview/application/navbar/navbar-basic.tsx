import { Icon } from '@iconify/react'
import { Button, Link, NavbarItem, NavbarMenuItem } from '@vx-oss/react'
import {
  BasicNavbar,
  IconSvgProps,
  navProps
} from '@vx-pro/application-navbar-basic'
import React from 'react'
const navbar_basic = () => {
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
        <Button className="text-default-500" radius="full" variant="light">
          Login
        </Button>
        <Button
          className="bg-foreground text-background font-medium"
          color="secondary"
          endContent={<Icon icon="solar:alt-arrow-right-linear" />}
          radius="full"
          variant="flat">
          Get Started
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
      <BasicNavbar data={data} />
    </div>
  )
}

export default navbar_basic
