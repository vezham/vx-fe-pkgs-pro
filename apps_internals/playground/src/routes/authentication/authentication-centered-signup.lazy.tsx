import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-centered-signup'

export const Route = createLazyFileRoute(
  '/authentication/authentication-centered-signup'
)({
  component: () => <Page />
})
