import { createLazyFileRoute } from '@tanstack/react-router'

import Page from '../../pages/preview/application/card/card_fieldset'

export const Route = createLazyFileRoute('/card/card-fieldset')({
  component: () => <Page />
})
