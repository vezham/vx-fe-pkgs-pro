import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/calendar/calendarbooking'

export const Route = createLazyFileRoute('/calendar/calendarbooking')({
  component: () => <Page />
})
