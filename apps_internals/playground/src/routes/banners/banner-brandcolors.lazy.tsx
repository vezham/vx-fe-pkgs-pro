import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/marketing/banners/banner-brandcolors'

export const Route = createLazyFileRoute('/banners/banner-brandcolors')({
  component: () => <Page />
})
