import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-centeredlogin-email'

export const Route = createLazyFileRoute(
  '/authentication/authentication-centeredlogin-email'
)({
  component: () => <Page />
})
