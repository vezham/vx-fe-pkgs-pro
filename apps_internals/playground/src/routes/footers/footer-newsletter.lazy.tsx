import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/footers/footer-newsletter'

export const Route = createLazyFileRoute('/footers/footer-newsletter')({
  component: () => <Page />
})
