import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/bars/bars-1'

export const Route = createLazyFileRoute('/bars/bars-1')({
  component: () => <Page />
})
