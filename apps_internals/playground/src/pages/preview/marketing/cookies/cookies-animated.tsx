'use client'

import { Button } from '@vx-oss/react'
import {
  cookieAlertProps,
  CookieAnimated,
  cookieSettingProps,
  SwitchCellProps
} from '@vx-pro/marketing-cookies-animated'

/* ------------------ Main Component ------------------ */
const cookies_animated = () => {
  const switchOptions: SwitchCellProps[] = [
    {
      label: 'Marketing',
      description: 'To show you relevant content',
      defaultSelected: true
    },
    {
      label: 'Essential',
      description: 'Essential for the site to function',
      defaultSelected: true
    },
    {
      label: 'Performance',
      description: 'To improve the performance of the site',
      defaultSelected: true
    },
    {
      label: 'Analytics',
      description: 'To understand how you use the site',
      defaultSelected: true
    }
  ]

  const cookieAlertData: cookieAlertProps = {
    linkText: 'Cookie Policy.',
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
    )
  }

  const cookieSetData: cookieSettingProps = {
    cookieSetBrief:
      'This site uses tracking technologies to improve your experience. You may choose to accept or reject these technologies. Check our',
    setlinkText: 'Privacy',
    setactions: (
      <>
        <Button
          fullWidth
          radius="lg"
          style={{
            border: 'solid 2px transparent',
            backgroundImage: `linear-gradient(hsl(var(--heroui-background)), hsl(var(--heroui-background))), linear-gradient(83.87deg, #F54180, #9353D3)`,
            backgroundOrigin: 'border-box',
            backgroundClip: 'padding-box, border-box'
          }}>
          Accept All
        </Button>
        <Button fullWidth variant="bordered">
          Reject All
        </Button>
      </>
    ),
    switchCell: switchOptions // ✅ just pass the options array
  }

  return (
    <CookieAnimated alertData={cookieAlertData} settingData={cookieSetData} />
  )
}

export default cookies_animated
