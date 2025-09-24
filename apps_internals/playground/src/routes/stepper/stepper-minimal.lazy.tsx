import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/stepper/stepper-minimal'

export const Route = createLazyFileRoute('/stepper/stepper-minimal')({
  component: () => <Page />
})
