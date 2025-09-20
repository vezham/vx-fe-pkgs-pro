import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/cookies/cookies-animated'

export const Route = createLazyFileRoute('/cookies/cookies-animated')({
  component: () => <Page />
})
