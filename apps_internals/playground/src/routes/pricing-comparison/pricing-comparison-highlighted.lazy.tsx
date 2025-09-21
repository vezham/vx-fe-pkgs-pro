import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/pricing-comparison/pricing-comparison-highlighted'

export const Route = createLazyFileRoute(
  '/pricing-comparison/pricing-comparison-highlighted'
)({
  component: () => <Page />
})
