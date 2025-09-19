import { Icon } from '@iconify/react'
import {
  cn,
  RadioGroup,
  RadioGroupProps,
  RadioProps,
  useRadio,
  useRadioGroupContext,
  VisuallyHidden
} from '@vx-oss/react'
import {
  FooterColumn,
  FooterProps,
  IconSvgProps,
  NavigationProps,
  SocialIconProps,
  SocialItem,
  ThemeSwitchItem
} from '@vx-pro/marketing-footer-with-columns'

import React from 'react'

const footer_column = () => {
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

  const ThemeRadioItem = ({
    icon,
    ...props
  }: RadioProps & { icon: string }) => {
    const {
      Component,
      isSelected: isSelfSelected,
      getBaseProps,
      getInputProps,
      getWrapperProps
    } = useRadio(props)

    const groupContext = useRadioGroupContext()

    const isSelected =
      isSelfSelected || groupContext.groupState.selectedValue === props.value

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
            'pointer-events-none h-8 w-8 rounded-full border border-black/10 transition-transform group-data-[pressed=true]:scale-90',
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
    Omit<RadioGroupProps, 'children'> & { items: ThemeSwitchItem[] }
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

  const footerNavigation: NavigationProps[] = [
    {
      title: 'Services',
      items: [
        { name: 'Branding', href: '#' },
        { name: 'Data Analysis', href: '#' },
        { name: 'E-commerce Solutions', href: '#' },
        { name: 'Market Research', href: '#' }
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Pricing Plans', href: '#' },
        { name: 'User Guides', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Service Status', href: '#' }
      ]
    },
    {
      title: 'About Us',
      items: [
        { name: 'Our Story', href: '#' },
        { name: 'Latest News', href: '#' },
        { name: 'Career Opportunities', href: '#' }
      ]
    },
    {
      title: 'Legal',
      items: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' }
      ]
    }
  ]

  const social: SocialItem[] = [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:facebook" />
      )
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:instagram" />
      )
    },
    {
      name: 'Twitter',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:twitter" />
      )
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: SocialIconProps) => (
        <Icon {...props} icon="fontisto:github" />
      )
    }
  ]

  const themeData: ThemeSwitchItem[] = [
    { icon: 'solar:moon-linear', value: 'dark' },
    { icon: 'solar:sun-2-linear', value: 'light' },
    { icon: 'solar:monitor-linear', value: 'system' }
  ]

  const data: FooterProps = {
    logo: <AcmeIcon size={34} />,
    companyName: 'ACME',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique',
    copyright: '© 2024 Acme Inc. All rights reserved.',
    navigation: footerNavigation,
    social,
    themeItems: themeData,
    themeSwitch: <ThemeSwitch items={themeData} />
  }

  return (
    <div>
      <FooterColumn data={data} />
    </div>
  )
}

export default footer_column
