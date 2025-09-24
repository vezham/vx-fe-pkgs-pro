import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/stepper/stepper-verticalsplitted'

export const Route = createLazyFileRoute('/stepper/stepper-splitted')({
  component: () => <Page />
})
