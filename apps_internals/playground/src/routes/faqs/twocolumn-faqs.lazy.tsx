import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/faqs/twocolumn-faqs'

export const Route = createLazyFileRoute('/faqs/twocolumn-faqs')({
  component: () => <Page />
})
