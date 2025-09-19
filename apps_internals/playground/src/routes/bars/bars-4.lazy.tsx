import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/charts/bars/bars-4'

export const Route = createLazyFileRoute('/bars/bars-4')({
  component: () => <Page />
})
