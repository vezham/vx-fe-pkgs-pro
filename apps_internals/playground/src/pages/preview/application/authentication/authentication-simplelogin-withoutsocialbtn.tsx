import { Button, Checkbox, Link } from '@vx-oss/react'
import {
  AuthenticationLoginWithoutSocialbtn,
  authenticationProps
} from '@vx-pro/application-authentication-simplelogin-without-socialbtn'

const authentication_simplelogin_withoutsocialbtn = () => {
  const data: authenticationProps = {
    title: 'Log In',
    subtitle: ' 👋',
    footerLink: 'Create an account ',
    actions: (
      <>
        <Checkbox defaultSelected name="remember" size="sm">
          Remember me
        </Checkbox>
        <Link className="text-default-500" href="#" size="sm">
          Forgot password?
        </Link>
      </>
    ),
    footerActions: (
      <Button className="w-full" color="primary" type="submit">
        Log In
      </Button>
    )
  }

  return (
    <div>
      <AuthenticationLoginWithoutSocialbtn data={data} />{' '}
    </div>
  )
}

export default authentication_simplelogin_withoutsocialbtn
