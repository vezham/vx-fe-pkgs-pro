import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_userprofileextend'

export const Route = createLazyFileRoute('/card/card-userprofileextend')({
  component: () => <Page />
})
