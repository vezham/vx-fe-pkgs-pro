import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/pricing/pricing-featuredtier'

export const Route = createLazyFileRoute('/pricing/pricing-featuredtier')({
  component: () => <Page />
})
