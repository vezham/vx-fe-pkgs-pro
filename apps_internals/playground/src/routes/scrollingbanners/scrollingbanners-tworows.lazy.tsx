import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/scrollingbanners/scrollingbanners_tworows'

export const Route = createLazyFileRoute(
  '/scrollingbanners/scrollingbanners-tworows'
)({
  component: () => <Page />
})
