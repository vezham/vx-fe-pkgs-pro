import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'
import {
  AuthenticationCenteredLoginAnimated,
  authenticationProps
} from '@vx-pro/application-authentication-centered-login-animatedform'

const authentication_centeredlogin_animated = () => {
  const data: authenticationProps = {
    title: 'Log In',

    footerText: '  Need to create an account?',
    footerLink: 'Sign Up ',
    actions: (
      <Button color="primary" type="submit">
        Log In
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
          Continue with Github
        </Button>
      </>
    )
  }

  return (
    <div>
      <AuthenticationCenteredLoginAnimated data={data} />
    </div>
  )
}

export default authentication_centeredlogin_animated
