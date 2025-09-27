'use client'

import { Card, CardBody, CardFooter, Image, Spacer } from '@vx-oss/react'

const CardThumbnail = ({ data }: { data: cardProps }) => {
  return (
    <Card className="w-[420px]">
      <CardBody className="px-3 pb-1">
        <Image
          alt="Card image"
          className="aspect-video w-full object-cover object-top"
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/airpods.png"
        />
        <Spacer y={2} />
        <div className="flex flex-col gap-2 px-2">
          <p className="text-large font-medium">{data.title}</p>
          <p className="text-small text-default-400">{data.subtitle}</p>
        </div>
      </CardBody>
      <CardFooter className="justify-end gap-2">{data.actions}</CardFooter>
    </Card>
  )
}

export { CardThumbnail }

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  description?: string
  footerText?: string
  actions?: React.ReactNode
}
