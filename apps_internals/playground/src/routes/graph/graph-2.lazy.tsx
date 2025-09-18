import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/graph/graph-2'

export const Route = createLazyFileRoute('/graph/graph-2')({
  component: () => <Page />
})
