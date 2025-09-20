import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/banners/banner-floatbottom'

export const Route = createLazyFileRoute('/banners/banner-floatbottom')({
  component: () => <Page />
})
