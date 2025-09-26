import React from 'react'

import { Button } from '@vx-oss/react'
import {
  AuthenticationCenteredSignupSteps,
  authenticationProps
} from '@vx-pro/application-authentication-centeredsignup-twosteps'

const AuthenticationCenteredSignupstepsWrapper = () => {
  const [[page, direction], setPage] = React.useState([0, 0])

  const titleContent = React.useMemo(() => {
    return page === 0
      ? 'Sign Up'
      : page === 1
        ? 'Enter Password'
        : 'Confirm Password'
  }, [page])

  const data: authenticationProps = {
    title: titleContent,

    footerText: ' Already have an account ?',
    footerLink: 'Log In ',
    actions: (page: number) => (
      <Button fullWidth color="primary" type="submit">
        {page === 0
          ? 'Continue with Email'
          : page === 1
            ? 'Enter Password'
            : 'Confirm Password'}
      </Button>
    )
  }

  return (
    <div>
      {' '}
      <AuthenticationCenteredSignupSteps data={data} />
    </div>
  )
}

export default AuthenticationCenteredSignupstepsWrapper
