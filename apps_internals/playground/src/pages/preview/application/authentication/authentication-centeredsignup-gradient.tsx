import { Icon } from '@iconify/react'
import { Button, Checkbox, Link } from '@vx-oss/react'
import {
  AuthenticationCenteredSignupGradient,
  authenticationProps
} from '@vx-pro/application-authentication-centeredsignup-gradientbackground'

const authentication_centeredlogin_blurred = () => {
  const data: authenticationProps = {
    title: 'Sign Up',
    footerText: 'Already have an account?',
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
      <AuthenticationCenteredSignupGradient data={data} />
    </div>
  )
}

export default authentication_centeredlogin_blurred
