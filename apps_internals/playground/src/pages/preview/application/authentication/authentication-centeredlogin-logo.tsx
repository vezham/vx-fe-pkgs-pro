import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'
import {
  AuthenticationCenteredLoginLogo,
  authenticationProps,
  IconSvgProps
} from '@vx-pro/application-authentication-centeredlogin-logo'
import React from 'react'

const authentication_centeredlogin_logo = () => {
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

  const data: authenticationProps = {
    logo: <AcmeIcon size={60} />,
    title: 'Welcome Back',
    subtitle: ' Log in to your account to continue',
    footerText: '  Need to create an account?',
    footerLink: 'Sign Up ',
    actions: (
      <Button className="w-full" color="primary" type="submit">
        Log In
      </Button>
    ),
    footerActions: (
      <>
        <Button
          startContent={<Icon icon="flat-color-icons:google" width={24} />}
          variant="bordered">
          Continue with Google
        </Button>
        <Button
          startContent={
            <Icon className="text-default-500" icon="fe:github" width={24} />
          }
          variant="bordered">
          Continue with Github
        </Button>
      </>
    )
  }

  return (
    <div>
      <AuthenticationCenteredLoginLogo data={data} />
    </div>
  )
}

export default authentication_centeredlogin_logo
