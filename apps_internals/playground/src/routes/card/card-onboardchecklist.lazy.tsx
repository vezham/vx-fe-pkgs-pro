import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_onboardChecklist'

export const Route = createLazyFileRoute('/card/card-onboardchecklist')({
  component: () => <Page />
})
