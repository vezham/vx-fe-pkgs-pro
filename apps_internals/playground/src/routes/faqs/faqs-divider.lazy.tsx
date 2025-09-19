import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/faqs/faqs-with-divider'

export const Route = createLazyFileRoute('/faqs/faqs-divider')({
  component: () => <Page />
})
