import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/stepper/stepper-verticalsplitted-helpers'

export const Route = createLazyFileRoute('/stepper/stepper-splittedHelpers')({
  component: () => <Page />
})
