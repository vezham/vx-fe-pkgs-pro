import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/kpistats')({
  component: () => <Outlet />
})
