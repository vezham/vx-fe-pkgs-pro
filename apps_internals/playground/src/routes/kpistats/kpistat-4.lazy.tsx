import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/charts/kpistats/kpistat-4'

export const Route = createLazyFileRoute('/kpistats/kpistat-4')({
  component: () => <Page />
})
