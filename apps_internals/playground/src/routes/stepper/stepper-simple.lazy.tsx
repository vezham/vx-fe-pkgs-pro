import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/stepper/stepper-simple'

export const Route = createLazyFileRoute('/stepper/stepper-simple')({
  component: () => <Page />
})
