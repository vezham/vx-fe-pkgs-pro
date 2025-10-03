'use client'

import { Link } from '@vx-oss/react'

const BannerBrandColors = ({ data }: { data: bannerProps }) => {
  return (
    <div className="border-divider bg-primary flex w-full items-center gap-x-3 border-b-1 px-6 py-2 sm:px-3.5 sm:before:flex-1">
      <p className="text-small text-primary-foreground">
        <Link className="text-inherit" href="#">
          {data.linkText} &nbsp;
        </Link>
      </p>
      {data.linkActions}

      <div className="flex flex-1 justify-end">{data.actions}</div>
    </div>
  )
}

export { BannerBrandColors }

export type bannerProps = {
  linkText: string
  linkActions?: React.ReactNode
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
