import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_selectpayment'

export const Route = createLazyFileRoute('/card/card-selectpayment')({
  component: () => <Page />
})
