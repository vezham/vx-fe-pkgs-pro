import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_userprofile'

export const Route = createLazyFileRoute('/card/card-userprofile')({
  component: () => <Page />
})
