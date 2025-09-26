import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'
import {
  AuthenticationCenteredLoginBlurred,
  authenticationProps
} from '@vx-pro/application-authentication-centeredlogin-blurredcontainer'

const authentication_centeredlogin_blurred = () => {
  const buttonClasses = 'w-full bg-foreground/10 dark:bg-foreground/20'

  const data: authenticationProps = {
    title: 'Log In',
    footerText: '  Need to create an account?',
    footerLink: 'Sign Up',
    actions: (
      <Button className={buttonClasses} type="submit">
        Log In
      </Button>
    ),
    footerActions: (
      <>
        <Button
          className={buttonClasses}
          startContent={<Icon icon="fe:google" width={24} />}>
          Continue with Google
        </Button>
        <Button
          className={buttonClasses}
          startContent={<Icon icon="fe:github" width={24} />}>
          Continue with Github
        </Button>
      </>
    )
  }

  return (
    <div>
      <AuthenticationCenteredLoginBlurred data={data} />
    </div>
  )
}

export default authentication_centeredlogin_blurred
