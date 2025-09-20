import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/cookies/cookies-basic'

export const Route = createLazyFileRoute('/cookies/cookies-basic')({
  component: () => <Page />
})
