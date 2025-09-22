import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/navbar/navbar-centeredItems'

export const Route = createLazyFileRoute('/navbar/navbar-centeredItems')({
  component: () => <Page />
})
