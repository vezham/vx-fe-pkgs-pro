import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/stepper/stepper-vertical'

export const Route = createLazyFileRoute('/stepper/stepper-vertical')({
  component: () => <Page />
})
