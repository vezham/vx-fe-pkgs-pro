'use client'

import { Icon } from '@iconify/react'
import { Divider, Input, Link } from '@vx-oss/react'
import type { SVGProps } from 'react'
import React from 'react'

const AuthenticationRightSignupImgBG = ({
  data
}: {
  data: authenticationProps
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const [isConfirmVisible, setIsConfirmVisible] = React.useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)
  const toggleConfirmVisibility = () => setIsConfirmVisible(!isConfirmVisible)

  return (
    <div
      className="rounded-small bg-content1 flex h-full w-full items-center justify-end overflow-hidden p-2 sm:p-4 lg:p-8"
      style={{
        backgroundImage:
          'url(https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/black-background-texture.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      {/* Brand Logo */}
      <div className="absolute top-10 left-10">
        <div className="flex items-center">
          {data.logo}
          <p className="font-medium text-white">{data.title}</p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="absolute bottom-10 left-10 hidden md:block">
        <p className="max-w-xl text-white/60">
          <span className="font-medium">“</span>
          {data.subtitle}
          <span className="font-medium">”</span>
        </p>
      </div>

      {/* Sign Up Form */}
      <div className="rounded-large bg-content1 shadow-small flex w-full max-w-sm flex-col gap-4 px-8 pt-6 pb-10">
        <p className="pb-2 text-xl font-medium">{data.heading}</p>
        <form
          className="flex flex-col gap-3"
          onSubmit={e => e.preventDefault()}>
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
          <Input
            isRequired
            endContent={
              <button type="button" onClick={toggleConfirmVisibility}>
                {isConfirmVisible ? (
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
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm your password"
            type={isConfirmVisible ? 'text' : 'password'}
            variant="bordered"
          />

          {data.actions}
        </form>
        <div className="flex items-center gap-4 py-2">
          <Divider className="flex-1" />
          <p className="text-tiny text-default-500 shrink-0">OR</p>
          <Divider className="flex-1" />
        </div>
        <div className="flex flex-col gap-2">{data.footerActions}</div>
        <p className="text-small text-center">
          {data.footerText}&nbsp;
          <Link href="#" size="sm">
            {data.footerLink}
          </Link>
        </p>
      </div>
    </div>
  )
}

export { AuthenticationRightSignupImgBG }

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type authenticationProps = {
  logo?: React.ReactNode
  title?: string | React.ReactNode
  subtitle?: string
  heading: string
  footerText?: string
  footerLink?: string
  footerActions?: React.ReactNode
  actions?: React.ReactNode
  btnactions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
