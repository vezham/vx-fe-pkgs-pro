import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-centeredsignup-blurred'

export const Route = createLazyFileRoute(
  '/authentication/authentication-centeredsignup-blurred'
)({
  component: () => <Page />
})
