import { Button, Checkbox, Link } from '@vx-oss/react'
import {
  authenticationProps,
  AuthenticationSignup
} from '@vx-pro/application-authentication-simplesignup'

const authentication_simplesignup = () => {
  const data: authenticationProps = {
    title: 'Sign up',
    subtitle: '👋',
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
    footerLink: ' Already have an account? Log In'
  }

  return (
    <div>
      <AuthenticationSignup data={data} />
    </div>
  )
}

export default authentication_simplesignup
