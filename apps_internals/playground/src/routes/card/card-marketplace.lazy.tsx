import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_marketplace'

export const Route = createLazyFileRoute('/card/card-marketplace')({
  component: () => <Page />
})
