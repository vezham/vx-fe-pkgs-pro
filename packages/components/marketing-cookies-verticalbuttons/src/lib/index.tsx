import { Link } from '@vx-oss/react'

const CookieVertical = ({ data }: { data: cookieProps }) => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <div className="rounded-large border-divider bg-background/15 shadow-small pointer-events-auto ml-auto max-w-sm border p-6 backdrop-blur">
        <p className="text-small text-default-700 font-normal">
          We use cookies on our website to give you the most relevant experience
          by remembering your preferences and repeat visits. By clicking&nbsp;
          <b className="font-semibold">&quot;Accept All&quot;</b>, you consent
          to the use of ALL the cookies. However, you may visit&nbsp;
          <span className="font-semibold">&quot;Cookie Settings&quot;</span> to
          provide a controlled consent. For more information, please read our{' '}
          <Link href="#" size="sm" underline="hover">
            {data.linkText}
          </Link>
        </p>
        <div className="mt-4 space-y-2">{data.actions}</div>
      </div>
    </div>
  )
}

export { CookieVertical }

export type cookieProps = {
  linkText: string
  actions?: React.ReactNode
}
