import { Button } from '@vx-oss/react'
import {
  CookieBottomFixed,
  cookieProps
} from '@vx-pro/marketing-cookies-bottomfixed'

const cookies_bottomfixed = () => {
  const data: cookieProps = {
    actions: (
      <>
        <Button
          className="px-4 font-medium"
          radius="lg"
          style={{
            border: 'solid 2px transparent',
            backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(83.87deg, #F54180, #9353D3)`,
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box'
          }}>
          Accept All
        </Button>
        <Button className="font-medium" radius="lg" variant="light">
          Reject
        </Button>
      </>
    ),
    linkText: 'Cookie Policy',
    cookieBrief:
      ' We use cookies to provide the best experience. By continuing to use our site, you agree to our'
  }

  return (
    <div>
      <CookieBottomFixed data={data} />
    </div>
  )
}

export default cookies_bottomfixed
