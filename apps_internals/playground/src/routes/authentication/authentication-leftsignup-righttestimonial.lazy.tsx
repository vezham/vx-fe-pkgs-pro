import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-leftsignup-righttestimonial'

export const Route = createLazyFileRoute(
  '/authentication/authentication-leftsignup-righttestimonial'
)({
  component: () => <Page />
})
