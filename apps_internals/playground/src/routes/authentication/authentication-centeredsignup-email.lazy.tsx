import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-centeredsignup-email'

export const Route = createLazyFileRoute(
  '/authentication/authentication-centeredsignup-email'
)({
  component: () => <Page />
})
