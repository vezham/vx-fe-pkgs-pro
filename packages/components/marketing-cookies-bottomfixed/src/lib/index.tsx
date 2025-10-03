import { Link } from '@vx-oss/react'

const CookieBottomFixed = ({ data }: { data: cookieProps }) => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0">
      <div className="border-divider bg-background/15 shadow-small pointer-events-auto flex w-full items-center justify-between gap-x-20 border px-6 py-4 backdrop-blur">
        <p className="text-small text-default-700 font-normal">
          {data.cookieBrief} &nbsp;
          <Link className="font-medium" href="#" size="sm" underline="always">
            {data.linkText}
          </Link>
        </p>
        <div className="flex items-center gap-2">{data.actions}</div>
      </div>
    </div>
  )
}

export { CookieBottomFixed }

export type cookieProps = {
  cookieBrief: string
  linkText: string
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
