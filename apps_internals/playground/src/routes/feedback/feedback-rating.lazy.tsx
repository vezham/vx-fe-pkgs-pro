import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/feedback/feedback-rating'

export const Route = createLazyFileRoute('/feedback/feedback-rating')({
  component: () => <Page />
})
