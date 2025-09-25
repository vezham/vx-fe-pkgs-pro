import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute(
  '/authentication/authentication-centeredsignup-animated'
)({
  component: RouteComponent
})

function RouteComponent() {
  return (
    <div>Hello "/authentication/authentication-centeredsignup-animated"!</div>
  )
}
