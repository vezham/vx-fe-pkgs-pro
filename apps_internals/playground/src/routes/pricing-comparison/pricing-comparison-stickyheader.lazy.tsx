import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/pricing-comparison/pricing-comparison-stickyheader'

export const Route = createLazyFileRoute(
  '/pricing-comparison/pricing-comparison-stickyheader'
)({
  component: () => <Page />
})
