import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/herosection/herosection-centerednavbar'

export const Route = createLazyFileRoute(
  '/herosection/herosection-centerednavbar'
)({
  component: () => <Page />
})
