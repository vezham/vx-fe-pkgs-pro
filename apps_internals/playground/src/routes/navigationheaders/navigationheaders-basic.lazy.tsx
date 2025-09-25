import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/navigationheaders/navigationheaders-basic'

export const Route = createLazyFileRoute(
  '/navigationheaders/navigationheaders-basic'
)({
  component: () => <Page />
})
