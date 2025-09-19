import { Icon } from '@iconify/react'
import {
  Chip,
  cn,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
  useRadio,
  useRadioGroupContext,
  VisuallyHidden
} from '@vx-oss/react'
import React from 'react'

import {
  FooterProps,
  FooterThemeSwitch,
  IconSvgProps,
  ThemeSwitchProps
} from '@vx-pro/marketing-footer-with-themeswitch'

const ThemeRadioItem = ({ icon, ...props }: RadioProps & { icon: string }) => {
  const {
    Component,
    isSelected: isSelfSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps
  } = useRadio(props)

  const groupContext = useRadioGroupContext()
  const isSelected =
    isSelfSelected ||
    Number(groupContext.groupState.selectedValue) >= Number(props.value)

  const wrapperProps = getWrapperProps()

  return (
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...wrapperProps}
        className={cn(
          wrapperProps?.['className'],
          'border-opacity-10 pointer-events-none h-8 w-8 rounded-full border-black ring-0 transition-transform group-data-[pressed=true]:scale-90',
          {
            'bg-default-200 dark:bg-default-100': isSelected
          }
        )}>
        <Icon className="text-default-500" icon={icon} width={18} />
      </div>
    </Component>
  )
}

const ThemeSwitch = React.forwardRef<
  HTMLDivElement,
  Omit<RadioGroupProps, 'children'> & { items: ThemeSwitchProps[] }
>(({ classNames = {}, items, ...props }, ref) => (
  <RadioGroup
    ref={ref}
    aria-label="Select a theme"
    classNames={{
      ...classNames,
      wrapper: cn('items-center gap-0', classNames?.wrapper)
    }}
    defaultValue="dark"
    orientation="horizontal"
    {...props}>
    {items.map(item => (
      <ThemeRadioItem key={item.value} icon={item.icon} value={item.value} />
    ))}
  </RadioGroup>
))
ThemeSwitch.displayName = 'ThemeSwitch'

const AcmeIcon: React.FC<IconSvgProps> = ({
  size = 32,
  width,
  height,
  ...props
}) => (
  <svg
    fill="none"
    height={size || height}
    viewBox="0 0 32 32"
    width={size || width}
    {...props}>
    <path
      clipRule="evenodd"
      d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
)

const FooterTheme = () => {
  const themeData: ThemeSwitchProps[] = [
    { icon: 'solar:moon-linear', value: 'dark' },
    { icon: 'solar:sun-2-linear', value: 'light' },
    { icon: 'solar:monitor-linear', value: 'system' }
  ]

  const data: FooterProps = {
    logo: <AcmeIcon size={34} />,
    actions: [
      {
        id: 'status',
        content: (
          <Chip
            className="text-default-500 border-none px-0"
            color="success"
            variant="dot">
            All systems operational
          </Chip>
        )
      }
    ],
    companyName: 'ACME',
    copyright: '© 2024 Acme Inc. All rights reserved.',
    themeSwitch: <ThemeSwitch items={themeData} />
  }

  return <FooterThemeSwitch data={data} />
}

export default FooterTheme
