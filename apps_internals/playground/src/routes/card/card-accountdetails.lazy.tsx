import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_accountdetails'

export const Route = createLazyFileRoute('/card/card-accountdetails')({
  component: () => <Page />
})
