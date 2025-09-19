import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/footers/footer_theme'

export const Route = createLazyFileRoute('/footers/footer-theme')({
  component: () => <Page />
})
