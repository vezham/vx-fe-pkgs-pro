import { Button } from '@vx-oss/react'
import { CookieBasic, cookieProps } from '@vx-pro/marketing-cookies-basic'

const cookies_basic = () => {
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
          Cookie Settings
        </Button>
      </>
    ),
    linkText: 'Cookie Policy'
  }

  return (
    <div>
      <CookieBasic data={data} />
    </div>
  )
}

export default cookies_basic
