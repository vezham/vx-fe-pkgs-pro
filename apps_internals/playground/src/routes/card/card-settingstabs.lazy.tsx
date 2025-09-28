import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_settingstabs'

export const Route = createLazyFileRoute('/card/card-settingstabs')({
  component: () => <Page />
})
