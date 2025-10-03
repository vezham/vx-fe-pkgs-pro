'use client'

import { Icon } from '@iconify/react'
import { Checkbox, Divider, Form, Input, Link } from '@vx-oss/react'
import type { SVGProps } from 'react'
import React from 'react'

const AuthenticationCenteredSignupLogo = ({
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
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="flex flex-col items-center pb-6">
        {data.logo}
        <p className="text-xl font-medium">{data.title}</p>
        <p className="text-small text-default-500">{data.subtitle}</p>
      </div>
      <div className="rounded-large bg-content1 shadow-small mt-2 flex w-full max-w-sm flex-col gap-4 px-8 py-6">
        <Form
          className="flex flex-col gap-3"
          validationBehavior="native"
          onSubmit={handleSubmit}>
          <Input
            isRequired
            label="Full Name"
            name="name"
            placeholder="Enter your name"
            type="text"
            variant="bordered"
          />
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
          <div className="flex w-full items-center gap-2 py-2">
            <Checkbox name="terms" size="sm">
              I agree to the&nbsp;
              <Link className="relative z-1" href="#" size="sm">
                Terms
              </Link>
              &nbsp; and&nbsp;
              <Link className="relative z-1" href="#" size="sm">
                Privacy Policy
              </Link>
            </Checkbox>
          </div>
          {data.actions}
        </Form>
        <div className="flex items-center gap-4">
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

export { AuthenticationCenteredSignupLogo }

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type authenticationProps = {
  logo?: React.ReactNode
  title?: string | React.ReactNode
  subtitle?: string
  footerText?: string
  footerLink?: string
  footerActions?: React.ReactNode
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
