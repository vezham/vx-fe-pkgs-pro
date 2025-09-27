'use client'

import { Card, CardBody, Image } from '@vx-oss/react'

const CardDismissable = ({ data }: { data: cardProps }) => {
  return (
    <Card className="w-full max-w-[520px]">
      {data.actions}
      <CardBody className="flex flex-row flex-wrap p-0 sm:flex-nowrap">
        <Image
          removeWrapper
          alt="Acme Creators"
          className="h-auto w-full flex-none object-cover object-top md:w-48"
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/hero-card-complete.jpeg"
        />
        <div className="px-4 py-5">
          <h3 className="text-large font-medium">{data.title}</h3>
          <div className="text-small text-default-400 flex flex-col gap-3 pt-2">
            <p>{data.description}</p>
            <p>{data.footerText}</p>
          </div>
        </div>
      </CardBody>
    </Card>
  )
}

export { CardDismissable }

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  description?: string
  footerText?: string
  actions?: React.ReactNode
}
