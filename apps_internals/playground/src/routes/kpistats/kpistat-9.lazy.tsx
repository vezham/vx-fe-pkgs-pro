import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/kpistats/kpistat-9'

export const Route = createLazyFileRoute('/kpistats/kpistat-9')({
  component: () => <Page />
})
