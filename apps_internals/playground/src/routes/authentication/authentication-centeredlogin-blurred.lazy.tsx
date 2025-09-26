import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-centeredlogin-blurred'

export const Route = createLazyFileRoute(
  '/authentication/authentication-centeredlogin-blurred'
)({
  component: () => <Page />
})
