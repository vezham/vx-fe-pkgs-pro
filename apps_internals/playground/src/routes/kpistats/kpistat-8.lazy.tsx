import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/charts/kpistats/kpistat-8'

export const Route = createLazyFileRoute('/kpistats/kpistat-8')({
  component: () => <Page />
})
