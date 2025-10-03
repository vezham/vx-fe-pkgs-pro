'use client'

import { Divider, Form, Input, Link } from '@vx-oss/react'
import React from 'react'

const AuthenticatedCenteredLoginEmail = ({
  data
}: {
  data: authenticationProps
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('handleSubmit')
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="rounded-large bg-content1 shadow-small flex w-full max-w-sm flex-col gap-4 px-8 pt-6 pb-10">
        <p className="pb-2 text-xl font-medium">{data.title}</p>
        <Form
          className="flex flex-col gap-3"
          validationBehavior="native"
          onSubmit={handleSubmit}>
          <Input
            isRequired
            label="Email Address"
            name="email"
            type="email"
            variant="bordered"
          />
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

export { AuthenticatedCenteredLoginEmail }

export type authenticationProps = {
  title?: string
  subtitle?: string
  footerText?: string
  footerLink?: string
  footerActions?: React.ReactNode
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
