import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'
import {
  AuthenticationLogin,
  authenticationProps
} from '@vx-pro/application-authentication-simplelogin'

const authentication_simplelogin = () => {
  const data: authenticationProps = {
    title: 'Sign in to your account',
    subtitle: 'to continue to Acme',
    footerLink: 'Sign Up ',
    footerText: '  Need to create an account?',
    actions: (
      <Button className="w-full" color="primary" type="submit">
        Sign In
      </Button>
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
      <AuthenticationLogin data={data} />
    </div>
  )
}

export default authentication_simplelogin
