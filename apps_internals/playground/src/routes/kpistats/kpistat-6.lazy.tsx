import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/charts/kpistats/kpistat-6'

export const Route = createLazyFileRoute('/kpistats/kpistat-6')({
  component: () => <Page />
})
