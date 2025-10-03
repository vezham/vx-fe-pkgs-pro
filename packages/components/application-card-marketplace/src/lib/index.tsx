'use client'

import { Card, CardBody, CardFooter } from '@vx-oss/react'
import type { SVGProps } from 'react'

const CardMarketPlace = ({ data }: { data: cardProps }) => {
  return (
    <Card
      className="border-small border-default-100 max-w-[320px] p-3"
      shadow="sm">
      <CardBody className="px-4 pb-1">
        <div className="flex items-center justify-between gap-2">
          <div className="flex max-w-[80%] flex-col gap-1">
            <p className="text-medium font-medium">{data.title}</p>
            <p className="text-small text-default-500">{data.subtitle}</p>
          </div>
          {data.logo}
        </div>
        <p className="text-small text-default-500 pt-4">{data.description}</p>
      </CardBody>
      <CardFooter className="justify-between gap-2">{data.actions}</CardFooter>
    </Card>
  )
}

export { CardMarketPlace }

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  description?: string
  footerText?: string
  actions?: React.ReactNode
  footerActions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
