import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/cookies/cookies-verticalbuttons')({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/cookies/cookies-verticalbuttons"!</div>
}
