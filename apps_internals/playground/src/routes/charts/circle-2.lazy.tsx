import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/charts/circle-2'

export const Route = createLazyFileRoute('/charts/circle-2')({
  component: () => <Page />
})
