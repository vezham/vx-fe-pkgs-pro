import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/kpistats/kpistat-1'

export const Route = createLazyFileRoute('/kpistats/kpistat-1')({
  component: () => <Page />
})
