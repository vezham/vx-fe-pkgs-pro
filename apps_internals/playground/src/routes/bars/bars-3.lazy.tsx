import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/charts/bars/bars-3'

export const Route = createLazyFileRoute('/bars/bars-3')({
  component: () => <Page />
})
