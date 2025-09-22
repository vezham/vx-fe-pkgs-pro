import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/herosection/herosection-basic'

export const Route = createLazyFileRoute('/herosection/herosection-basic')({
  component: () => <Page />
})
