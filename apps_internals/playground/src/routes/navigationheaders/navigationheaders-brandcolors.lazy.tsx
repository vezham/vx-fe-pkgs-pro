import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/navigationheaders/navigationheaders-brandcolors'

export const Route = createLazyFileRoute(
  '/navigationheaders/navigationheaders-brandcolors'
)({
  component: () => <Page />
})
