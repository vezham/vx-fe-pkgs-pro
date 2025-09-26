import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-centeredlogin-logo'

export const Route = createLazyFileRoute(
  '/authentication/authentication-centeredlogin-logo'
)({
  component: () => <Page />
})
