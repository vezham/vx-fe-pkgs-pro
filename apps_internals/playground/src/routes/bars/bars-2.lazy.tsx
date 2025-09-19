import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/charts/bars/bars-2'

export const Route = createLazyFileRoute('/bars/bars-2')({
  component: () => <Page />
})
