'use client'

import { Link } from '@vx-oss/react'

const BannerBetweenJustified = ({ data }: { data: bannerProps }) => {
  return (
    <div className="border-divider from-default-100 via-danger-100 to-secondary-100 flex w-full items-center justify-between border-b-1 bg-linear-to-r px-6 py-2 sm:px-3.5">
      <div className="flex w-full items-center gap-x-3">
        <p className="text-small text-foreground">
          <Link className="text-inherit" href="#">
            {data.linkText} &nbsp;
          </Link>
        </p>
        {data.linkActions}
      </div>
      <div className="flex flex-1 justify-end">{data.actions}</div>
    </div>
  )
}

export { BannerBetweenJustified }

export type bannerProps = {
  linkText: string
  linkActions?: React.ReactNode

  actions?: React.ReactNode
}
