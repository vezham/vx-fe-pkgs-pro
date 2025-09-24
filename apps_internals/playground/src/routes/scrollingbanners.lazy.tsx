import { createLazyFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/scrollingbanners')({
  component: () => <Outlet />
})
