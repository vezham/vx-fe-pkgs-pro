import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-simplelogin-withoutsocialbtn'

export const Route = createLazyFileRoute(
  '/authentication/authentication-simplelogin-withoutsocialbtn'
)({
  component: () => <Page />
})
