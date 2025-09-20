import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/cookies/cookies-bottomfixed'

export const Route = createLazyFileRoute('/cookies/cookies-bottomfixed')({
  component: () => <Page />
})
