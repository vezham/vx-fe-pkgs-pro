import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_spotlight'

export const Route = createLazyFileRoute('/card/card-spotlight')({
  component: () => <Page />
})
