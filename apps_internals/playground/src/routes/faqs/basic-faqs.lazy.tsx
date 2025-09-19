import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/faqs/basic-faqs'

export const Route = createLazyFileRoute('/faqs/basic-faqs')({
  component: () => <Page />
})
