'use client'

import type { ButtonProps } from '@vx-oss/react'
import { Chip, Link, RadioGroup, Spacer, Tab, Tabs } from '@vx-oss/react'
import React from 'react'

const Pricing = ({
  data,
  frequencies,
  tiers,
  PricingRadioItem
}: {
  data: pricingProps
  frequencies: Frequency[]
  tiers: Tier[]
  PricingRadioItem: React.ForwardRefExoticComponent<any>
}) => {
  const [selectedFrequency, setSelectedFrequency] = React.useState(
    frequencies[0]
  )
  const [selectedTier, setSelectedTier] = React.useState(tiers[0].key)

  const onFrequencyChange = (selectedKey: React.Key) => {
    const frequencyIndex = frequencies.findIndex(f => f.key === selectedKey)
    if (frequencyIndex !== -1) {
      setSelectedFrequency(frequencies[frequencyIndex])
    }
  }

  return (
    <div className="flex max-w-4xl flex-col items-center py-24">
      {/* Header */}
      <div className="flex max-w-xl flex-col text-center">
        <h2 className="text-primary font-medium">{data.title}</h2>
        <h1 className="text-4xl font-medium tracking-tight">
          {data.mainHeading}
        </h1>
        <Spacer y={4} />
        <h2 className="text-large text-default-500">{data.subHeading}</h2>
      </div>

      <Spacer y={8} />

      <Tabs
        classNames={{ tab: 'data-[hover-unselected=true]:opacity-90' }}
        radius="full"
        size="lg"
        onSelectionChange={onFrequencyChange}>
        <Tab
          key={FrequencyEnum.Yearly}
          aria-label="Pay Yearly"
          className="pr-1.5"
          title={
            <div className="flex items-center gap-2">
              <p>Pay Yearly</p>
              <Chip color="primary">Save 25%</Chip>
            </div>
          }
        />
        <Tab key={FrequencyEnum.Quarterly} title="Pay Quarterly" />
      </Tabs>

      <Spacer y={12} />

      <RadioGroup
        aria-label="Tiers"
        classNames={{
          wrapper:
            'grid grid-cols-1 gap-6 md:gap-4 sm:grid-cols-2 lg:grid-cols-3'
        }}
        value={selectedTier}
        onValueChange={value => setSelectedTier(value as TiersEnum)}>
        {tiers.map(tier => (
          <PricingRadioItem
            key={tier.key}
            description={
              <div className="flex flex-col gap-2">
                <p className="flex items-baseline gap-1 pt-2">
                  <span className="from-foreground to-foreground-600 inline bg-linear-to-br bg-clip-text text-3xl leading-7 font-semibold tracking-tight text-transparent">
                    {typeof tier.price === 'string'
                      ? tier.price
                      : tier.price[selectedFrequency.key]}
                  </span>
                  {typeof tier.price !== 'string' ? (
                    <span className="text-tiny text-default-400 font-medium">
                      {tier.priceSuffix
                        ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                        : `/${selectedFrequency.priceSuffix}`}
                    </span>
                  ) : null}
                </p>
                <p className="text-default-400">{tier.description}</p>
              </div>
            }
            value={tier.key}>
            {tier.mostPopular ? (
              <Chip
                classNames={{
                  base: 'absolute -top-4 left-1/2 -translate-x-1/2 z-10',
                  content: 'font-medium'
                }}
                color="primary">
                Most Popular
              </Chip>
            ) : null}
            {tier.title}
          </PricingRadioItem>
        ))}
      </RadioGroup>

      <Spacer y={12} />

      <div className="flex py-2">
        <p className="text-default-400">
          {data.footerText}&nbsp;
          <Link color="foreground" href="#" underline="always">
            {data.footerLinkText}
          </Link>
        </p>
      </div>
    </div>
  )
}

export { Pricing }

export type pricingProps = {
  title: string
  mainHeading: string
  subHeading: string
  footerText: string
  footerLinkText: string
}

export enum FrequencyEnum {
  Yearly = 'yearly',
  Quarterly = 'quarterly'
}

export enum TiersEnum {
  Free = 'free',
  Pro = 'pro',
  Team = 'team'
}

export type Frequency = {
  key: FrequencyEnum
  label: string
  priceSuffix: string
}

export type Tier = {
  key: TiersEnum
  title: string
  price:
    | {
        [FrequencyEnum.Yearly]: string
        [FrequencyEnum.Quarterly]: string
      }
    | string
  priceSuffix?: string
  href: string
  description?: string
  mostPopular?: boolean
  featured?: boolean
  features?: string[]
  buttonText: string
  buttonColor?: ButtonProps['color']
  buttonVariant: ButtonProps['variant']
}
