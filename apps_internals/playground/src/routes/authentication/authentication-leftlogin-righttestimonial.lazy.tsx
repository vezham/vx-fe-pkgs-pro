import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-leftlogin-righttestimonial'

export const Route = createLazyFileRoute(
  '/authentication/authentication-leftlogin-righttestimonial'
)({
  component: () => <Page />
})
