import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_invitemember'

export const Route = createLazyFileRoute('/card/card-invitemember')({
  component: () => <Page />
})
