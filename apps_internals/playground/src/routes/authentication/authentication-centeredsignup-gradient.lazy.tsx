import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-centeredsignup-gradient'

export const Route = createLazyFileRoute(
  '/authentication/authentication-centeredsignup-gradient'
)({
  component: () => <Page />
})
