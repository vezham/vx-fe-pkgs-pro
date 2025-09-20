import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/pricing/pricing-mostpopulartierfilled'

export const Route = createLazyFileRoute(
  '/pricing/pricing-mostpopulartierfilled'
)({
  component: () => <Page />
})
