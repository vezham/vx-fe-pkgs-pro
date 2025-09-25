import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'

import {
  AuthenticationCenteredSignupAnimated,
  authenticationProps
} from '@vx-pro/application-authentication-centered-signup-animatedform'

const authentication_centeredsignup_animated = () => {
  const data: authenticationProps = {
    title: 'Sign Up',

    footerText: '   Already have an account?',
    footerLink: 'Log In ',
    actions: (
      <Button color="primary" type="submit">
        Sign Up
      </Button>
    ),
    footerActions: (
      <>
        <Button
          fullWidth
          startContent={<Icon icon="flat-color-icons:google" width={24} />}
          variant="flat">
          Continue with Google
        </Button>
        <Button
          fullWidth
          startContent={
            <Icon className="text-default-500" icon="fe:github" width={24} />
          }
          variant="flat">
          Continue with GitHub
        </Button>
      </>
    )
  }

  return (
    <div>
      <AuthenticationCenteredSignupAnimated data={data} />
    </div>
  )
}

export default authentication_centeredsignup_animated
