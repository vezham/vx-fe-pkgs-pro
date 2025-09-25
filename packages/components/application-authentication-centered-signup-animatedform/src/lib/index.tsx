'use client'

import { Icon } from '@iconify/react'
import { Button, Divider, Input } from '@vx-oss/react'
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion'
import React from 'react'

const AuthenticationCenteredSignupAnimated = ({
  data
}: {
  data: authenticationProps
}) => {
  const [isFormVisible, setIsFormVisible] = React.useState(false)

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 10 }
  }

  const orDivider = (
    <div className="flex items-center gap-4 py-2">
      <Divider className="flex-1" />
      <p className="text-tiny text-default-500 shrink-0">OR</p>
      <Divider className="flex-1" />
    </div>
  )

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="rounded-large bg-content1 shadow-small flex w-full max-w-sm flex-col gap-4 px-8 pt-6 pb-10">
        <LazyMotion features={domAnimation}>
          <h1 className="mb-4 text-xl font-medium">{data.title}</h1>
          <AnimatePresence initial={false} mode="popLayout">
            {isFormVisible ? (
              <m.form
                animate="visible"
                className="flex flex-col gap-y-3"
                exit="hidden"
                initial="hidden"
                variants={variants}
                onSubmit={e => e.preventDefault()}>
                <Input
                  autoFocus
                  isRequired
                  label="Email Address"
                  name="email"
                  type="email"
                  variant="bordered"
                />
                <Input
                  isRequired
                  label="Password"
                  name="password"
                  type="password"
                  variant="bordered"
                />
                {data.actions}
                {orDivider}
                <Button
                  fullWidth
                  startContent={
                    <Icon
                      className="text-default-500"
                      icon="solar:arrow-left-linear"
                      width={18}
                    />
                  }
                  variant="flat"
                  onPress={() => setIsFormVisible(false)}>
                  Other Sign Up options
                </Button>
              </m.form>
            ) : (
              <div>
                <Button
                  fullWidth
                  color="primary"
                  startContent={
                    <Icon
                      className="pointer-events-none text-2xl"
                      icon="solar:letter-bold"
                    />
                  }
                  type="button"
                  onPress={() => setIsFormVisible(true)}>
                  Continue with Email
                </Button>
                {orDivider}
                <m.div
                  animate="visible"
                  className="flex flex-col gap-y-2"
                  exit="hidden"
                  initial="hidden"
                  variants={variants}>
                  {data.footerActions}
                  <p className="text-small mt-3 text-center">
                    {data.footerText} &nbsp;
                    {data.footerLink}
                  </p>
                </m.div>
              </div>
            )}
          </AnimatePresence>
        </LazyMotion>
      </div>
    </div>
  )
}

export { AuthenticationCenteredSignupAnimated }

export type authenticationProps = {
  title?: string
  subtitle?: string
  footerText?: string
  footerLink?: string
  footerActions?: React.ReactNode
  actions?: React.ReactNode
}
