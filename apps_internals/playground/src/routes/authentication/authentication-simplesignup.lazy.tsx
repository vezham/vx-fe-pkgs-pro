import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-simplesignup'

export const Route = createLazyFileRoute(
  '/authentication/authentication-simplesignup'
)({
  component: () => <Page />
})
