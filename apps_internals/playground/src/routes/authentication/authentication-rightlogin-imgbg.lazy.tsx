import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-rightlogin-imgbg'

export const Route = createLazyFileRoute(
  '/authentication/authentication-rightlogin-imgbg'
)({
  component: () => <Page />
})
