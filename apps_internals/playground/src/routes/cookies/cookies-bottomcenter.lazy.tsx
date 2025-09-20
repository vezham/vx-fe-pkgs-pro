import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/cookies/cookies-bottomcenter'

export const Route = createLazyFileRoute('/cookies/cookies-bottomcenter')({
  component: () => <Page />
})
