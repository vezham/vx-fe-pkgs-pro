import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/pricing/pricing-simpleprice'

export const Route = createLazyFileRoute('/pricing/pricing-simpleprice')({
  component: () => <Page />
})
