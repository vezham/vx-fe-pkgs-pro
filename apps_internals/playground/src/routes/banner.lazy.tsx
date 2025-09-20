import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/banner')({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/banner"!</div>
}
