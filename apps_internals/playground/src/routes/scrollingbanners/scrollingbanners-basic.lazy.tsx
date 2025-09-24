import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/scrollingbanners/scrollingbanners_basic'

export const Route = createLazyFileRoute(
  '/scrollingbanners/scrollingbanners-basic'
)({
  component: () => <Page />
})
