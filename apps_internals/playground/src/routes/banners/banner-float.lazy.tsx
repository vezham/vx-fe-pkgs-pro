import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/banners/banner-float'

export const Route = createLazyFileRoute('/banners/banner-float')({
  component: () => <Page />
})
