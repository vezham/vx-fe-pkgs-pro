import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_actioncards'

export const Route = createLazyFileRoute('/card/card-actioncards')({
  component: () => <Page />
})
