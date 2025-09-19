import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/charts/circle/circle-3'

export const Route = createLazyFileRoute('/charts/circle-3')({
  component: () => <Page />
})
