import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/herosection/herosection-skewed'

export const Route = createLazyFileRoute('/herosection/herosection-skewed')({
  component: () => <Page />
})
