import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/feedback/feedback-textarea'

export const Route = createLazyFileRoute('/feedback/feedback-textarea')({
  component: () => <Page />
})
