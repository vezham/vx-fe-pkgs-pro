import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'
import {
  AuthenticationCenteredLoginGradient,
  authenticationProps
} from '@vx-pro/application-authentication-centeredlogin-gradientbackground'

const authentication_centeredlogin_gradient = () => {
  const data: authenticationProps = {
    title: 'Log In',
    footerText: '  Need to create an account?',
    footerLink: 'Sign Up',
    actions: (
      <Button className="w-full" color="primary" type="submit">
        Log In
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
      <AuthenticationCenteredLoginGradient data={data} />
    </div>
  )
}

export default authentication_centeredlogin_gradient
