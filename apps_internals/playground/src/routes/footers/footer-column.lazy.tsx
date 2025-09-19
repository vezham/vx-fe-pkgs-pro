import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/footers/footer-column'

export const Route = createLazyFileRoute('/footers/footer-column')({
  component: () => <Page />
})
