import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/cookies/cookies-verticalbuttons'

export const Route = createLazyFileRoute('/cookies/cookies-verticalbuttons')({
  component: () => <Page />
})
