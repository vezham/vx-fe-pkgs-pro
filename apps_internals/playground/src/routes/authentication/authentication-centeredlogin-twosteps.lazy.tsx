import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-centeredlogin-twosteps'

export const Route = createLazyFileRoute(
  '/authentication/authentication-centeredlogin-twosteps'
)({
  component: () => <Page />
})
