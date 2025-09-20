import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'
import {
  CookieBrandColor,
  cookieProps
} from '@vx-pro/marketing-cookies-brandcolors'

const cookies_brandcolors = () => {
  const data: cookieProps = {
    icons: (
      <Icon
        className="text-primary-200 ml-2 inline-block h-6 w-6"
        icon="lucide:cookie"
      />
    ),
    actions: (
      <>
        <Button
          className="bg-primary-foreground text-primary font-medium"
          radius="lg">
          Accept
        </Button>
        <Button
          className="text-primary-foreground font-medium"
          radius="lg"
          variant="light">
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
      <CookieBrandColor data={data} />
    </div>
  )
}

export default cookies_brandcolors
