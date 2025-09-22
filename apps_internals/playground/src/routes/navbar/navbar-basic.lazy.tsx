import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/navbar/navbar-basic'

export const Route = createLazyFileRoute('/navbar/navbar-basic')({
  component: () => <Page />
})
