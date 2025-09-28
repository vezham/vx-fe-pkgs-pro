import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_securitysettings'

export const Route = createLazyFileRoute('/card/card-securitysettings')({
  component: () => <Page />
})
