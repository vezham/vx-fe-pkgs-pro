import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_personaldetails'

export const Route = createLazyFileRoute('/card/card-personaldetails')({
  component: () => <Page />
})
