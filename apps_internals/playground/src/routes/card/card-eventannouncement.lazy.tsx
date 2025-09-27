import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_eventannouncement'

export const Route = createLazyFileRoute('/card/card-eventannouncement')({
  component: () => <Page />
})
