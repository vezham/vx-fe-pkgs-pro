import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/navigationheaders/navigationheaders-cta'

export const Route = createLazyFileRoute(
  '/navigationheaders/navigationheaders-cta'
)({
  component: () => <Page />
})
