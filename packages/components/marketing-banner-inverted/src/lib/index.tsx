'use client'

import { Link } from '@vx-oss/react'

const BannerInverted = ({ data }: { data: bannerProps }) => {
  return (
    <div className="border-divider bg-foreground flex w-full items-center gap-x-3 border-b-1 px-6 py-2 backdrop-blur-xl sm:px-3.5 sm:before:flex-1">
      <p className="text-small text-background">
        <Link className="text-inherit" href="#">
          {data.linkText}&nbsp;
        </Link>
      </p>
      {data.linkActions}
      <div className="flex flex-1 justify-end">{data.actions}</div>
    </div>
  )
}

export { BannerInverted }

export type bannerProps = {
  linkText: string
  linkActions?: React.ReactNode

  actions?: React.ReactNode
}
