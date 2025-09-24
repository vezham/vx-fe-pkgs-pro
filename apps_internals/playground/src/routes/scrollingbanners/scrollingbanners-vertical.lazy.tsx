import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/scrollingbanners/scrollingbanners_vertical'

export const Route = createLazyFileRoute(
  '/scrollingbanners/scrollingbanners-vertical'
)({
  component: () => <Page />
})
