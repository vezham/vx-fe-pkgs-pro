import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_notification'

export const Route = createLazyFileRoute('/card/card-notification')({
  component: () => <Page />
})
