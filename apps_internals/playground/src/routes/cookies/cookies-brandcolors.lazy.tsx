import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/cookies/cookies-brandcolors'

export const Route = createLazyFileRoute('/cookies/cookies-brandcolors')({
  component: () => <Page />
})
