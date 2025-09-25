import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-simplesignup-without-bg'

export const Route = createLazyFileRoute(
  '/authentication/authentication-simplesignup-withoutbg'
)({
  component: () => <Page />
})
