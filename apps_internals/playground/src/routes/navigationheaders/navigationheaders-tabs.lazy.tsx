import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/navigationheaders/navigationheaders-tabs'

export const Route = createLazyFileRoute(
  '/navigationheaders/navigationheaders-tabs'
)({
  component: () => <Page />
})
