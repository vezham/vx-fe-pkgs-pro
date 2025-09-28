import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_notificationsettings'

export const Route = createLazyFileRoute('/card/card-notificationsettings')({
  component: () => <Page />
})
