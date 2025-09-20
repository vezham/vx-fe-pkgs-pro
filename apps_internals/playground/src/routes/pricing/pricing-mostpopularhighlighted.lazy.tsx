import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/pricing/pricing-mostpopular-highlighted'

export const Route = createLazyFileRoute(
  '/pricing/pricing-mostpopularhighlighted'
)({
  component: () => <Page />
})
