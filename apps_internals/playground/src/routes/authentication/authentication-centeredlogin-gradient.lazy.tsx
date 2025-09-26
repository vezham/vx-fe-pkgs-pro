import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-centeredlogin-gradient'

export const Route = createLazyFileRoute(
  '/authentication/authentication-centeredlogin-gradient'
)({
  component: () => <Page />
})
