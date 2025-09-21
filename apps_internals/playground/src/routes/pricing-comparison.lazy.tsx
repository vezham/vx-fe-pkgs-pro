import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/pricing-comparison')({
  component: () => <Outlet />
})
