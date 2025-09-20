import { Button } from '@vx-oss/react'
import {
  cookieProps,
  CookieVertical
} from '@vx-pro/marketing-cookies-verticalbuttons'

const cookies_verticalbuttons = () => {
  const data: cookieProps = {
    actions: (
      <>
        <Button
          fullWidth
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
        <Button
          fullWidth
          className="border-default-200 text-default-foreground font-medium"
          radius="lg"
          variant="bordered">
          Reject All
        </Button>
        <Button
          fullWidth
          className="text-default-foreground font-medium"
          radius="lg"
          variant="light">
          Cookie Settings
        </Button>
      </>
    ),
    linkText: ' Cookie Policy.'
  }

  return (
    <div>
      <CookieVertical data={data} />
    </div>
  )
}

export default cookies_verticalbuttons
