import { Link } from '@vx-oss/react'

const CookieFullWidth = ({ data }: { data: cookieProps }) => {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-[21px] pb-[34px]">
      <div className="rounded-large border-divider bg-background/15 shadow-small pointer-events-auto flex w-full items-center justify-between gap-x-20 border px-6 py-4 backdrop-blur">
        <p className="text-small text-default-700 font-normal">
          We use cookies on our website to give you the most relevant experience
          by remembering your preferences and repeat visits. By clicking&nbsp;
          <span className="font-semibold">“Accept All”</span>, you consent to
          the use of ALL the cookies. However, you may visit&nbsp;
          <span className="font-semibold">&quot;Cookie Settings&quot;</span> to
          provide a controlled consent. For more information, please read our{' '}
          <Link href="#" size="sm" underline="hover">
            {data.linkText}
          </Link>
        </p>
        <div className="flex items-center gap-1">{data.actions}</div>
      </div>
    </div>
  )
}

export { CookieFullWidth }

export type cookieProps = {
  linkText: string
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
