'use client'

import { Radio, RadioProps, cn } from '@vx-oss/react'
import React from 'react'

import {
  Frequency,
  FrequencyEnum,
  Pricing,
  Tier,
  TiersEnum,
  pricingProps
} from '@vx-pro/marketing-pricing-simpleprice'

const frequencies: Array<Frequency> = [
  { key: FrequencyEnum.Yearly, label: 'Pay Yearly', priceSuffix: 'per year' },
  {
    key: FrequencyEnum.Quarterly,
    label: 'Pay Quarterly',
    priceSuffix: 'per quarter'
  }
]

const tiers: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: 'Free',
    price: 'Free',
    href: '#',
    featured: false,
    mostPopular: false,
    description: 'For starters and hobbyists that want to try out.',
    features: [
      '10 users included',
      '2 GB of storage',
      'Help center access',
      'Email support'
    ],
    buttonText: 'Continue with Free',
    buttonColor: 'default',
    buttonVariant: 'flat'
  },
  {
    key: TiersEnum.Pro,
    title: 'Pro',
    description: 'For small teams that have less that 10 members.',
    href: '#',
    mostPopular: true,
    price: {
      yearly: '$72',
      quarterly: '$24'
    },
    featured: false,
    features: [
      '20 users included',
      '10 GB of storage',
      'Help center access',
      'Priority email support'
    ],
    buttonText: 'Get started',
    buttonColor: 'primary',
    buttonVariant: 'solid'
  },
  {
    key: TiersEnum.Team,
    title: 'Team',
    href: '#',
    featured: true,
    mostPopular: false,
    description: 'For large teams that have more than 10 members.',
    price: {
      yearly: '$90',
      quarterly: '$120'
    },
    priceSuffix: 'per user',
    features: [
      '50 users included',
      '30 GB of storage',
      'Help center access',
      'Phone & email support'
    ],
    buttonText: 'Contact us',
    buttonColor: 'default',
    buttonVariant: 'flat'
  }
]

const PricingRadioItem = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ classNames = {}, className, children, ...props }, ref) => (
    <Radio
      {...props}
      ref={ref}
      classNames={{
        ...classNames,
        label: cn('static', classNames?.label),
        base: cn(
          'bg-content1 hover:bg-content2 relative m-0 inline-flex w-[280px] max-w-full items-center justify-between',
          'border-medium! border-default-200 cursor-pointer flex-row-reverse gap-4 rounded-lg p-4',
          'data-[selected=true]:border-primary',
          classNames?.base,
          className
        )
      }}>
      {children}
    </Radio>
  )
)
PricingRadioItem.displayName = 'PricingRadioItem'

const pricing_simpleprice = () => {
  const data: pricingProps = {
    title: 'Pricing',
    mainHeading: 'Get unlimited access.',
    subHeading: 'Discover the ideal plan, beginning at under $2 per week.',
    footerText: 'Are you an open source developer?',
    footerLinkText: 'Get a discount'
  }

  return (
    <Pricing
      data={data}
      frequencies={frequencies}
      tiers={tiers}
      PricingRadioItem={PricingRadioItem}
    />
  )
}

export default pricing_simpleprice
