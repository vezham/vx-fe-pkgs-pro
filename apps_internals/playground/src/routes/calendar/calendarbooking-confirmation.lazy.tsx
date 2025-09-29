import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/calendar/calendarbooking_confirmation'

export const Route = createLazyFileRoute(
  '/calendar/calendarbooking-confirmation'
)({
  component: () => <Page />
})
