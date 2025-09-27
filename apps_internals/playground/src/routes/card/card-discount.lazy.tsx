import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_discount'

export const Route = createLazyFileRoute('/card/card-discount')({
  component: () => <Page />
})
