import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/stepper/stepper-basic'

export const Route = createLazyFileRoute('/stepper/stepper-basic')({
  component: () => <Page />
})
