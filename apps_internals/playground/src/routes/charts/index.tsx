import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/charts/')({
  beforeLoad: () => {
    throw redirect({
      to: '/charts/circle-1'
    })
  }
})
