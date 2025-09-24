import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/feedback/feedback-popover'

export const Route = createLazyFileRoute('/feedback/feedback-popover')({
  component: () => <Page />
})
