'use client'

import { Link } from '@vx-oss/react'

const BannerFloat = ({ data }: { data: bannerProps }) => {
  return (
    <div className="rounded-large border-divider from-default-100 via-danger-100 to-secondary-100 mx-1 my-2 flex w-full items-center justify-between border-1 bg-linear-to-r px-6 py-2 sm:mx-2 sm:px-3.5 md:mx-4">
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

export { BannerFloat }

export type bannerProps = {
  linkText: string
  linkActions?: React.ReactNode
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
