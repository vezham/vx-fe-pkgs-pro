import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'
import {
  AuthenticationCenteredSignup,
  authenticationProps
} from '@vx-pro/application-authentication-centered-signup'

const authentication_centered_signup = () => {
  const data: authenticationProps = {
    title: 'Sign up',
    subtitle: ' 👋',
    footerText: ' Already have an account?',
    footerLink: 'Log In ',
    actions: (
      <Button color="primary" type="submit">
        Sign Up
      </Button>
    ),
    footerActions: (
      <>
        <Button
          startContent={<Icon icon="flat-color-icons:google" width={24} />}
          variant="bordered">
          Sign Up with Google
        </Button>
        <Button
          startContent={
            <Icon className="text-default-500" icon="fe:github" width={24} />
          }
          variant="bordered">
          Sign Up with Github
        </Button>
      </>
    )
  }

  return (
    <div>
      <AuthenticationCenteredSignup data={data} />
    </div>
  )
}

export default authentication_centered_signup
