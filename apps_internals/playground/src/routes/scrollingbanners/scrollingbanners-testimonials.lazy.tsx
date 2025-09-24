import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/scrollingbanners/scrollingbanners_testimonials'

export const Route = createLazyFileRoute(
  '/scrollingbanners/scrollingbanners-testimonials'
)({
  component: () => <Page />
})
