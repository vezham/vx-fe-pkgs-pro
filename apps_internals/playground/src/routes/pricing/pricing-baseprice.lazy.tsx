import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/pricing/pricing-baseprice'

export const Route = createLazyFileRoute('/pricing/pricing-baseprice')({
  component: () => <Page />
})
