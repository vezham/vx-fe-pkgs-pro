import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/calendar/calendarbooking_form'

export const Route = createLazyFileRoute('/calendar/calendarbooking-form')({
  component: () => <Page />
})
