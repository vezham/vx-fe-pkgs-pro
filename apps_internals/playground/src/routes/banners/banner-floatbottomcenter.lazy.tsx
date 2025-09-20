import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/banners/banner-floatbottomcenter'

export const Route = createLazyFileRoute('/banners/banner-floatbottomcenter')({
  component: () => <Page />
})
