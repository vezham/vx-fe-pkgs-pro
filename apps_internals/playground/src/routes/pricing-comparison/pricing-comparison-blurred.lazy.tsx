import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/pricing-comparison/pricing-comparison-blurbackground'

export const Route = createLazyFileRoute(
  '/pricing-comparison/pricing-comparison-blurred'
)({
  component: () => <Page />
})
