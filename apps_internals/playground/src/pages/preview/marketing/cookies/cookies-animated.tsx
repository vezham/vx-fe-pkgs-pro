'use client'

import { Button } from '@vx-oss/react'
import {
  cookieAlertProps,
  CookieAnimated,
  cookieSettingProps,
  SwitchCellProps
} from '@vx-pro/marketing-cookies-animated'
import { useState } from 'react'

/* ------------------ Main Component ------------------ */
const CookiesAnimatedComponent = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false)

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
          }}
          onPress={() => console.log('Accept All from Alert clicked!')}>
          Accept All
        </Button>
        <Button
          fullWidth
          className="border-default-200 text-default-foreground font-medium"
          radius="lg"
          variant="bordered"
          onPress={() => console.log('Reject All from Alert clicked!')}>
          Reject All
        </Button>
        <Button
          fullWidth
          className="text-default-foreground font-medium"
          radius="lg"
          variant="light"
          onPress={() => setIsSettingsOpen(true)}>
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
          }}
          onPress={() => console.log('Accept All from Settings clicked!')}>
          Accept All
        </Button>
        <Button
          fullWidth
          variant="bordered"
          onPress={() => setIsSettingsOpen(false)}>
          Reject All
        </Button>
      </>
    ),
    switchCell: switchOptions
  }

  return (
    <CookieAnimated
      alertData={cookieAlertData}
      settingData={cookieSetData}
      isSettingsOpen={isSettingsOpen}
      setIsSettingsOpen={setIsSettingsOpen}
    />
  )
}

export default CookiesAnimatedComponent
