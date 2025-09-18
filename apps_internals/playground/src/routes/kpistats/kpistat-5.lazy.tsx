import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/kpistats/kpistat-5'

export const Route = createLazyFileRoute('/kpistats/kpistat-5')({
  component: () => <Page />
})
