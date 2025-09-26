import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-rightsignup-imgbg'

export const Route = createLazyFileRoute(
  '/authentication/authentication-rightsignup-imgbg'
)({
  component: () => <Page />
})
