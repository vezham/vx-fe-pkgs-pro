import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/charts/circle/circle-6'

export const Route = createLazyFileRoute('/charts/circle-6')({
  component: () => <Page />
})
