'use client'

import { Link } from '@vx-oss/react'

const BannerFloatBottomCenter = ({ data }: { data: bannerProps }) => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 w-full px-2 pb-2 sm:flex sm:justify-center sm:px-4 sm:pb-4 lg:px-8">
      <div className="rounded-large border-divider from-default-100 via-danger-100 to-secondary-100 pointer-events-auto flex items-center gap-x-3 border-1 bg-linear-to-r px-6 py-2 sm:px-3.5">
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
    </div>
  )
}

export { BannerFloatBottomCenter }

export type bannerProps = {
  linkText: string
  linkActions?: React.ReactNode
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
