import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/charts/kpistats/kpistat-7'

export const Route = createLazyFileRoute('/kpistats/kpistat-7')({
  component: () => <Page />
})
