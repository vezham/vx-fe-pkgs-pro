'use client'

import { Icon } from '@iconify/react'
import { Checkbox, Divider, Form, Input, Link } from '@vx-oss/react'
import React from 'react'

const AuthenticationCenteredLoginGradient = ({
  data
}: {
  data: authenticationProps
}) => {
  const [isVisible, setIsVisible] = React.useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('handleSubmit')
  }

  return (
    <div className="flex min-h-192 w-full items-center justify-center bg-linear-to-br from-rose-400 via-fuchsia-500 to-indigo-500 p-2 sm:p-4 lg:p-8">
      <div className="rounded-large bg-content1 shadow-large flex w-full max-w-sm flex-col gap-4 px-8 pt-6 pb-10">
        <p className="pb-2 text-xl font-medium">{data.title}</p>
        <Form
          className="flex flex-col gap-3"
          validationBehavior="native"
          onSubmit={handleSubmit}>
          <Input
            isRequired
            label="Email Address"
            name="email"
            placeholder="Enter your email"
            type="email"
            variant="bordered"
          />
          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <Icon
                    className="text-default-400 pointer-events-none text-2xl"
                    icon="solar:eye-closed-linear"
                  />
                ) : (
                  <Icon
                    className="text-default-400 pointer-events-none text-2xl"
                    icon="solar:eye-bold"
                  />
                )}
              </button>
            }
            label="Password"
            name="password"
            placeholder="Enter your password"
            type={isVisible ? 'text' : 'password'}
            variant="bordered"
          />
          <div className="flex w-full items-center justify-between px-1 py-2">
            <Checkbox name="remember" size="sm">
              Remember me
            </Checkbox>
            <Link className="text-default-500" href="#" size="sm">
              Forgot password?
            </Link>
          </div>
          {data.actions}
        </Form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="text-tiny text-default-500 shrink-0">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">{data.footerActions}</div>
        <p className="text-small text-center">
          {data.footerText} &nbsp;
          <Link href="#" size="sm">
            {data.footerLink}
          </Link>
        </p>
      </div>
    </div>
  )
}

export { AuthenticationCenteredLoginGradient }

export type authenticationProps = {
  logo?: React.ReactNode
  title?: string | React.ReactNode
  subtitle?: string
  heading?: string
  description?: string
  footerText?: string
  footerLink?: string
  footerActions?: React.ReactNode
  actions?: React.ReactNode
  btnactions?: React.ReactNode
}
