import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/banners/banner-betweenjustified'

export const Route = createLazyFileRoute('/banners/banner-betweenjustified')({
  component: () => <Page />
})
