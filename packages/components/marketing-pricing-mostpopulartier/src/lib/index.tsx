'use client'

import { Icon } from '@iconify/react'
import type { ButtonProps } from '@vx-oss/react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
  Spacer,
  Tab,
  Tabs
} from '@vx-oss/react'
import React from 'react'

const Pricing = ({
  data,
  frequencies,
  tiers
}: {
  data: pricingProps
  frequencies: Array<Frequency>
  tiers: Array<Tier>
}) => {
  const [selectedFrequency, setSelectedFrequency] = React.useState(
    frequencies[0]
  )

  const onFrequencyChange = (selectedKey: React.Key) => {
    const frequencyIndex = frequencies.findIndex(f => f.key === selectedKey)
    setSelectedFrequency(frequencies[frequencyIndex])
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

      {/* Frequency Tabs */}
      <Tabs
        classNames={{
          tab: 'data-[hover-unselected=true]:opacity-90'
        }}
        radius="full"
        size="lg"
        onSelectionChange={onFrequencyChange}
        selectedKey={selectedFrequency.key}>
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

      {/* Pricing Tiers */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map(tier => (
          <Card key={tier.key} className="relative p-3" shadow="md">
            {tier.mostPopular ? (
              <Chip
                classNames={{
                  base: 'absolute top-4 right-4',
                  content: 'font-medium text-primary-500 dark:text-primary-600'
                }}
                color="primary"
                variant="flat">
                Most Popular
              </Chip>
            ) : null}

            <CardHeader className="flex flex-col items-start gap-2 pb-6">
              <h2 className="text-large font-medium">{tier.title}</h2>
              <p className="text-medium text-default-500">{tier.description}</p>
            </CardHeader>

            <Divider />

            <CardBody className="gap-8">
              <p className="flex items-baseline gap-1 pt-2">
                <span className="from-foreground to-foreground-600 inline bg-linear-to-br bg-clip-text text-4xl leading-7 font-semibold tracking-tight text-transparent">
                  {typeof tier.price === 'string'
                    ? tier.price
                    : tier.price[selectedFrequency.key]}
                </span>
                {typeof tier.price !== 'string' ? (
                  <span className="text-small text-default-400 font-medium">
                    {tier.priceSuffix
                      ? `/${tier.priceSuffix}/${selectedFrequency.priceSuffix}`
                      : `/${selectedFrequency.priceSuffix}`}
                  </span>
                ) : null}
              </p>

              <ul className="flex flex-col gap-2">
                {tier.features?.map(feature => (
                  <li key={feature} className="flex items-center gap-2">
                    <Icon className="text-primary" icon="ci:check" width={24} />
                    <p className="text-default-500">{feature}</p>
                  </li>
                ))}
              </ul>
            </CardBody>

            <CardFooter>
              <Button
                fullWidth
                as={Link}
                color={tier.buttonColor}
                href={tier.href}
                variant={tier.buttonVariant}>
                {tier.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Spacer y={12} />

      {/* Footer */}
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

export type pricingProps = {
  title: string
  mainHeading: string
  subHeading: string
  footerText: string
  footerLinkText: string
  className?: string
  children?: React.ReactNode
}
