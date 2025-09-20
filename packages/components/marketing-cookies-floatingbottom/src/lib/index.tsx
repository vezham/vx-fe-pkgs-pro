import { Link } from '@vx-oss/react'

const CookieFloatingBottom = ({ data }: { data: cookieProps }) => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-[21px] pb-[26px]">
      <div className="rounded-large border-divider bg-background/15 shadow-small pointer-events-auto flex w-full items-center justify-between gap-x-20 border px-6 py-4 backdrop-blur">
        <p className="text-small text-default-700 font-normal">
          {data.cookieBrief} &nbsp;
          <Link className="font-normal" href="#" size="sm" underline="hover">
            {data.linkText}
          </Link>
        </p>
        <div className="flex items-center gap-2">{data.actions}</div>
      </div>
    </div>
  )
}

export { CookieFloatingBottom }

export type cookieProps = {
  cookieBrief: string
  linkText: string
  actions?: React.ReactNode
}
