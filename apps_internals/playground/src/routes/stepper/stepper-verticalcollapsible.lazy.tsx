import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/stepper/stepper-verticalcollapsible'

export const Route = createLazyFileRoute(
  '/stepper/stepper-verticalcollapsible'
)({
  component: () => <Page />
})
