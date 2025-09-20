import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/banners/banner-basic'

export const Route = createLazyFileRoute('/banners/banner-basic')({
  component: () => <Page />
})
