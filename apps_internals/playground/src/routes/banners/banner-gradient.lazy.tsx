import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/banners/banner-gradient'

export const Route = createLazyFileRoute('/banners/banner-gradient')({
  component: () => <Page />
})
