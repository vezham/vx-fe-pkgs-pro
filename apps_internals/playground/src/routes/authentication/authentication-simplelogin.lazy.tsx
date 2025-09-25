import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-simplelogin'

export const Route = createLazyFileRoute(
  '/authentication/authentication-simplelogin'
)({
  component: () => <Page />
})
