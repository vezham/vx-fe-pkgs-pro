import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/authentication/authentication-simplelogin-without-bg'

export const Route = createLazyFileRoute(
  '/authentication/authentication-simplelogin-withoutbg'
)({
  component: () => <Page />
})
