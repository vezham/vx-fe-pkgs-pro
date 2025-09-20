import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/pricing/pricing-mostpopulartier'

export const Route = createLazyFileRoute('/pricing/pricing-mostpopulartier')({
  component: () => <Page />
})
