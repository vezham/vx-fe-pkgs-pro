import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/faqs/centered-faqs'

export const Route = createLazyFileRoute('/faqs/centered-faqs')({
  component: () => <Page />
})
