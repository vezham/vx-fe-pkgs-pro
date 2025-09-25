import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'
import {
  AuthenticatedCenteredLoginEmail,
  authenticationProps
} from '@vx-pro/application-authentication-centered-login-email'

const authentication_centeredlogin_email = () => {
  const data: authenticationProps = {
    title: 'Log In',

    footerText: '  Need to create an account?',
    footerLink: 'Sign Up ',
    actions: (
      <Button
        className="w-full"
        color="primary"
        startContent={
          <Icon
            className="pointer-events-none text-2xl"
            icon="solar:letter-bold"
          />
        }
        type="submit">
        Continue with Email
      </Button>
    ),
    footerActions: (
      <>
        <Button
          startContent={<Icon icon="flat-color-icons:google" width={24} />}
          variant="flat">
          Continue with Google
        </Button>
        <Button
          startContent={
            <Icon className="text-default-500" icon="fe:github" width={24} />
          }
          variant="flat">
          Continue with Github
        </Button>
      </>
    )
  }

  return (
    <div>
      <AuthenticatedCenteredLoginEmail data={data} />
    </div>
  )
}

export default authentication_centeredlogin_email
