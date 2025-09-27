import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_thumbnail'

export const Route = createLazyFileRoute('/card/card-thumbnail')({
  component: () => <Page />
})
