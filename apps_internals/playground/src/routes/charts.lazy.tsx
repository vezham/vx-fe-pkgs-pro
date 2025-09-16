import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../pages/preview/charts/circle-1'

export const Route = createLazyFileRoute('/charts')({
  component: () => <Page />
})
