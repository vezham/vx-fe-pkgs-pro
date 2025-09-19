import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/charts/kpistats/kpistat-2'

export const Route = createLazyFileRoute('/kpistats/kpistat-2')({
  component: () => <Page />
})
