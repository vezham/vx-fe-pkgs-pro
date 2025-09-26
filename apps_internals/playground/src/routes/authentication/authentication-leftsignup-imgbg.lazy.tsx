import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-leftsignup-imgbg'

export const Route = createLazyFileRoute(
  '/authentication/authentication-leftsignup-imgbg'
)({
  component: () => <Page />
})
