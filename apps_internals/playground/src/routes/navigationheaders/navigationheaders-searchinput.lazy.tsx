import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/navigationheaders/navigationheaders-searchinput'

export const Route = createLazyFileRoute(
  '/navigationheaders/navigationheaders-searchinput'
)({
  component: () => <Page />
})
