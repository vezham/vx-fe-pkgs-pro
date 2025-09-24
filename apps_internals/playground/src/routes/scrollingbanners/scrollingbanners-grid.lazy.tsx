import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/scrollingbanners/scrollingbanners_grid'

export const Route = createLazyFileRoute(
  '/scrollingbanners/scrollingbanners-grid'
)({
  component: () => <Page />
})
