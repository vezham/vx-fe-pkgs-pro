import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/navbar/navbar-centered'

export const Route = createLazyFileRoute('/navbar/navbar-centered')({
  component: () => <Page />
})
