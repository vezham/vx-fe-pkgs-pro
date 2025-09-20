import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/cookies/cookies-fullwidth'

export const Route = createLazyFileRoute('/cookies/cookies-fullwidth')({
  component: () => <Page />
})
