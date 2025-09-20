import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/pricing/pricing-blurredbackground'

export const Route = createLazyFileRoute('/pricing/pricing-blurredbackground')({
  component: () => <Page />
})
