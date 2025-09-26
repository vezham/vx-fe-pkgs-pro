import { Icon } from '@iconify/react'
import { Button, Checkbox, Link } from '@vx-oss/react'
import {
  AuthenticationCenteredSignupBlurred,
  authenticationProps
} from '@vx-pro/application-authentication-centeredsignup-blurredcontainer'

const authentication_centeredlogin_blurred = () => {
  const buttonClasses = 'bg-foreground/10 dark:bg-foreground/20'

  const data: authenticationProps = {
    title: 'Sign Up',
    footerText: 'Already have an account?',
    footerLink: 'Log In',
    actions: (
      <>
        <Checkbox
          isRequired
          classNames={{
            base: 'py-4',
            label: 'text-foreground/50',
            wrapper: 'before:border-foreground/50'
          }}
          size="sm">
          I agree with the&nbsp;
          <Link className="relative z-1" color="foreground" href="#" size="sm">
            Terms
          </Link>
          &nbsp; and&nbsp;
          <Link className="relative z-1" color="foreground" href="#" size="sm">
            Privacy Policy
          </Link>
        </Checkbox>
        <Button className={buttonClasses} type="submit">
          Sign Up
        </Button>
      </>
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
      <AuthenticationCenteredSignupBlurred data={data} />
    </div>
  )
}

export default authentication_centeredlogin_blurred
