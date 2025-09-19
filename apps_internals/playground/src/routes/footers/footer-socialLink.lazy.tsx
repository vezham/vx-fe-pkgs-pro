import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/footers/footer_socialLinks'

export const Route = createLazyFileRoute('/footers/footer-socialLink')({
  component: () => <Page />
})
