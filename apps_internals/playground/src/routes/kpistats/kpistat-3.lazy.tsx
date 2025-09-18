import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/kpistats/kpistat-3'

export const Route = createLazyFileRoute('/kpistats/kpistat-3')({
  component: () => <Page />
})
