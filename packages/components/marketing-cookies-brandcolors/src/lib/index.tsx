import { Link } from '@vx-oss/react'

const CookieBrandColor = ({ data }: { data: cookieProps }) => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0">
      <div className="border-divider bg-primary shadow-small pointer-events-auto flex w-full items-center justify-between gap-x-20 border px-6 py-4">
        <p className="text-small text-primary-foreground font-normal">
          {data.cookieBrief}&nbsp;
          <Link
            className="text-primary-foreground font-medium"
            href="#"
            size="sm"
            underline="always">
            {data.linkText}
          </Link>
          {data.icons}
        </p>
        <div className="flex items-center gap-2">{data.actions}</div>
      </div>
    </div>
  )
}

export { CookieBrandColor }

export type cookieProps = {
  icons?: React.ReactNode
  cookieBrief: string
  linkText: string
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
