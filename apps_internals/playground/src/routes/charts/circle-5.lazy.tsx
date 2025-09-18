import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/charts/circle-5'

export const Route = createLazyFileRoute('/charts/circle-5')({
  component: () => <Page />
})
