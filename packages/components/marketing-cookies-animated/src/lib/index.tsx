'use client'

import {
  Link,
  ResizablePanel,
  Spacer,
  Switch,
  SwitchProps,
  cn,
  extendVariants
} from '@vx-oss/react'
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'
import React from 'react'

/* ------------------ Animation Variants ------------------ */

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

const CookieAnimated = ({
  alertData,
  settingData,
  isSettingsOpen, // Prop from parent
  setIsSettingsOpen // Prop from parent
}: {
  alertData: cookieAlertProps
  settingData: cookieSettingProps
  isSettingsOpen: boolean
  setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const AnimatedWrapper = ({
    children,
    className,
    ...props
  }: React.PropsWithChildren<{ className?: string }>) => (
    <m.div
      animate="visible"
      className={cn(
        'rounded-large border-divider bg-background/15 shadow-small pointer-events-auto ml-auto max-w-sm border p-6 backdrop-blur',
        className
      )}
      exit="hidden"
      initial="hidden"
      transition={{ opacity: { duration: 0.5 } }}
      variants={variants}
      {...props}>
      {children}
    </m.div>
  )

  /* ------------------ Custom Switch ------------------ */

  const CustomSwitch = extendVariants(Switch, {
    variants: {
      color: {
        foreground: {
          wrapper: [
            'group-data-[selected=true]:bg-foreground',
            'group-data-[selected=true]:text-background'
          ]
        }
      }
    }
  })

  /* ------------------ Switch Cell ------------------ */

  const SwitchCell = React.forwardRef<HTMLInputElement, SwitchCellProps>(
    ({ label, description, classNames, ...props }) => (
      <CustomSwitch
        classNames={{
          ...classNames,
          base: cn(
            'bg-content2 inline-flex w-full max-w-full flex-row-reverse items-center',
            'rounded-medium cursor-pointer justify-between gap-2 p-4',
            classNames?.base
          )
        }}
        {...props}>
        <div className="flex flex-col">
          <p className={cn('text-medium', classNames?.label)}>{label}</p>
          <p
            className={cn(
              'text-small text-default-500',
              classNames?.description
            )}>
            {description}
          </p>
        </div>
      </CustomSwitch>
    )
  )
  SwitchCell.displayName = 'SwitchCell'

  /* ------------------ Cookie Settings Content ------------------ */

  const cookieSettingsContent = (
    <AnimatedWrapper>
      <h1 className="text-large font-semibold">Your Privacy</h1>
      <p className="text-small text-default-700 font-normal">
        {settingData.cookieSetBrief}{' '}
        <Link href="#" size="sm" underline="always">
          {settingData.setlinkText}
        </Link>{' '}
        for more information.
      </p>
      <Spacer y={4} />

      <div className="flex flex-col gap-y-2">
        {settingData.switchCell?.map((option, i) => (
          <SwitchCell
            key={i}
            classNames={{
              base: 'dark:bg-content1',
              label: 'text-small'
            }}
            {...option}
          />
        ))}
      </div>

      <Spacer y={4} />
      <div className="flex justify-between gap-x-3">
        {React.Children.map(settingData.setactions, child => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              onPress: () => {
                const parentOnPress = (child.props as any)?.onPress
                if (parentOnPress) parentOnPress()
                setIsSettingsOpen(false)
              }
            })
          }
          return child
        })}
      </div>
    </AnimatedWrapper>
  )

  /* ------------------ Cookie Alert Content ------------------ */

  const cookiesAlertContent = (
    <AnimatedWrapper>
      <p className="text-small text-default-700 font-normal">
        We use cookies on our website to give you the most relevant experience
        by remembering your preferences and repeat visits. By clicking&nbsp;
        <b className="font-semibold">&quot;Accept All&quot;</b>, you consent to
        the use of ALL the cookies. However, you may visit&nbsp;
        <span className="font-semibold">&quot;Cookie Settings&quot;</span> to
        provide a controlled consent. For more information, please read our{' '}
        <Link href="#" size="sm" underline="hover">
          {alertData.linkText}
        </Link>
      </p>
      <div className="mt-4 space-y-2">
        {React.Children.map(alertData.actions, child => {
          if (React.isValidElement(child)) {
            const label = (child.props as any)?.children
            const isSettingsBtn =
              typeof label === 'string' &&
              label.toLowerCase().includes('cookie settings')

            return React.cloneElement(child as React.ReactElement<any>, {
              onPress: () => {
                const parentOnPress = (child.props as any)?.onPress
                if (parentOnPress) parentOnPress()

                if (isSettingsBtn) {
                  setIsSettingsOpen(true)
                } else {
                  setIsSettingsOpen(false)
                }
              }
            })
          }
          return child
        })}
      </div>
    </AnimatedWrapper>
  )

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 px-6 pb-6">
      <ResizablePanel>
        <AnimatePresence initial={false} mode="wait">
          <LazyMotion features={domAnimation}>
            {isSettingsOpen ? cookieSettingsContent : cookiesAlertContent}
          </LazyMotion>
        </AnimatePresence>
      </ResizablePanel>
    </div>
  )
}

export { CookieAnimated }

/* ------------------ Types ------------------ */
export type SwitchCellProps = Omit<SwitchProps, 'color'> & {
  label: string
  description: string
  color?: SwitchProps['color'] | 'foreground'
  classNames?: SwitchProps['classNames'] & {
    description?: string | string[]
  }
}

export type cookieAlertProps = {
  linkText: string
  actions?: React.ReactNode
}

export type cookieSettingProps = {
  cookieSetBrief: string
  setlinkText: string
  setactions?: React.ReactNode
  switchCell?: SwitchCellProps[]
  className?: string
  children?: React.ReactNode
}
