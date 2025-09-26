import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-centeredsignup-twosteps'

export const Route = createLazyFileRoute(
  '/authentication/authentication-centeredsignup-twosteps'
)({
  component: () => <Page />
})
