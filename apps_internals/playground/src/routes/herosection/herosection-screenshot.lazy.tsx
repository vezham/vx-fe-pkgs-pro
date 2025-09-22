import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/herosection/herosection-screenshot'

export const Route = createLazyFileRoute('/herosection/herosection-screenshot')(
  {
    component: () => <Page />
  }
)
