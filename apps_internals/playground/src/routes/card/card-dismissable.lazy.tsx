import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_dismissable'

export const Route = createLazyFileRoute('/card/card-dismissable')({
  component: () => <Page />
})
