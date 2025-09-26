import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute(
  '/authentication/authentication-centeredsignup-logo'
)({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/authentication/authentication-centeredsignup-logo"!</div>
}
