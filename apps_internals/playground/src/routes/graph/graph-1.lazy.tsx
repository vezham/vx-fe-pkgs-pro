import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/graph/graph-1'

export const Route = createLazyFileRoute('/graph/graph-1')({
  component: () => <Page />
})
