import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/cookies/cookies-floatingbottom'

export const Route = createLazyFileRoute('/cookies/cookies-floatingbottom')({
  component: () => <Page />
})
