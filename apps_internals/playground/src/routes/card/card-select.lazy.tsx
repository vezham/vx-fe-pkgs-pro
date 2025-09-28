import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_select'

export const Route = createLazyFileRoute('/card/card-select')({
  component: () => <Page />
})
