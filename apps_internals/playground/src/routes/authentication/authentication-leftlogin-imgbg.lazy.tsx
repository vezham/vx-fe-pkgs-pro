import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-leftlogin-imgbg'

export const Route = createLazyFileRoute(
  '/authentication/authentication-leftlogin-imgbg'
)({
  component: () => <Page />
})
