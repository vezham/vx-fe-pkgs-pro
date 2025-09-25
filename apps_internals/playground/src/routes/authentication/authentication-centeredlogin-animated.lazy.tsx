import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-centeredlogin-animated'

export const Route = createLazyFileRoute(
  '/authentication/authentication-centeredlogin-animated'
)({
  component: () => <Page />
})
