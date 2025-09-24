import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/feedback/feedback-modal'

export const Route = createLazyFileRoute('/feedback/feedback-modal')({
  component: () => <Page />
})
