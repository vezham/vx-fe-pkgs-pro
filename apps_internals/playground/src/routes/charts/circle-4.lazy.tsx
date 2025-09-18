import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/charts/circle-4'

export const Route = createLazyFileRoute('/charts/circle-4')({
  component: () => <Page />
})
