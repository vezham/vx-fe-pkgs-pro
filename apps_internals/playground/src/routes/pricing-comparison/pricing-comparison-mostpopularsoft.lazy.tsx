import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/pricing-comparison/pricing-comparison-mostpopularsoft'

export const Route = createLazyFileRoute(
  '/pricing-comparison/pricing-comparison-mostpopularsoft'
)({
  component: () => <Page />
})
