import { Icon } from '@iconify/react'
import { Button, Checkbox, Link } from '@vx-oss/react'
import {
  AuthenticationLeftSignupImgBG,
  authenticationProps,
  IconSvgProps
} from '@vx-pro/application-authentication-leftsignup-imagebackground'
import React from 'react'

const authentication_rightlogin_imgbg = () => {
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
    logo: <AcmeIcon className="text-white" size={40} />,
    title: 'ACME',
    heading: 'Sign Up',
    footerText: '  Already have an account?',
    footerLink: 'Log In',
    actions: (
      <>
        <Checkbox isRequired className="py-4" size="sm">
          I agree with the&nbsp;
          <Link className="relative z-1" href="#" size="sm">
            Terms
          </Link>
          &nbsp; and&nbsp;
          <Link className="relative z-1" href="#" size="sm">
            Privacy Policy
          </Link>
        </Checkbox>
        <Button color="primary" type="submit">
          Sign Up
        </Button>
      </>
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
      <AuthenticationLeftSignupImgBG data={data} />
    </div>
  )
}

export default authentication_rightlogin_imgbg
