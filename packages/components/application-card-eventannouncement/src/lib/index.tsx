'use client'

import { Avatar, Card, CardBody, CardFooter, CardHeader } from '@vx-oss/react'
import type { SVGProps } from 'react'

const CardEventAnnouncement = ({ data }: { data: cardProps }) => {
  return (
    <Card className="overflow-none border-small border-foreground/10 relative w-[420px] bg-[url('https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/abstract-dark-bg4.jpg')] bg-bottom-right">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar
            className="border-small border-white/20 bg-transparent"
            icon={data.logo}
          />
          <p className="text-large font-medium text-white">{data.title}</p>
        </div>
      </CardHeader>
      <CardBody className="px-3">
        <div className="flex flex-col gap-2 px-2">
          <p className="text-large font-medium text-white/80">
            {data.subtitle}
          </p>
          <p className="text-small text-white/60">{data.description}</p>
        </div>
      </CardBody>
      <CardFooter className="justify-end gap-2">{data.actions}</CardFooter>
    </Card>
  )
}

export { CardEventAnnouncement }

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  description?: string
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
