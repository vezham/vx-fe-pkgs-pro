import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/pricing/pricing-featuredtierfilled'

export const Route = createLazyFileRoute(
  '/pricing/pricing-featuredtier-filled'
)({
  component: () => <Page />
})
