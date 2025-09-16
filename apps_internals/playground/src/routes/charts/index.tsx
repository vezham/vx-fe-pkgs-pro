import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/charts/')({
  beforeLoad: () => {
    // Only redirect when path is exactly /charts
    throw redirect({
      to: '/charts/circle-1'
    })
  }
})
