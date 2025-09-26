import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'
import {
  AuthenticationCenterdLoginSteps,
  authenticationProps
} from '@vx-pro/application-authentication-centeredlogin-twosteps'

const authentication_centeredlogin_twosteps = () => {
  const data: authenticationProps = {
    title: 'Log In',

    footerText: '  Need to create an account ?',
    footerLink: 'Sign Up ',

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
      <AuthenticationCenterdLoginSteps data={data} />
    </div>
  )
}

export default authentication_centeredlogin_twosteps
