import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../pages/preview/marketing/teams/teams'

export const Route = createLazyFileRoute('/teams')({
  component: () => <Page />
})
