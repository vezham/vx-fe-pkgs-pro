'use client'

import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Form,
  Input,
  Spacer
} from '@vx-oss/react'
import React from 'react'

const CardFieldset = ({ data }: { data: cardProps }) => {
  const [orgName, setOrgName] = React.useState<string>('HeroUI')
  const errors: string[] = []

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('handleSubmit')

    alert('Organization Name: ' + orgName)
  }

  if (!orgName) {
    errors.push('Organization name is required')
  }

  if (orgName.length > 50) {
    errors.push('Organization name must be less than 50 characters')
  }

  return (
    <Card className="w-full max-w-[500px]">
      <CardHeader className="px-6 pt-6 pb-0">
        <div className="flex flex-col items-start">
          <h4 className="text-large">{data.title}</h4>
          <p className="text-small text-default-500">{data.subtitle}</p>
        </div>
      </CardHeader>
      <Spacer y={2} />
      <CardBody className="px-4">
        <Form
          className="gap-0"
          validationBehavior="native"
          onSubmit={handleSubmit}>
          <Input
            isClearable
            isRequired
            errorMessage={() => (
              <ul>
                {errors.map((error, i) => (
                  <li key={i}>{error}</li>
                ))}
              </ul>
            )}
            isInvalid={errors.length > 0}
            label="Organization Name"
            maxLength={50}
            name="orgName"
            value={orgName}
            onValueChange={setOrgName}
          />
          <Spacer y={6} />
          <Divider />
          <div className="flex w-full flex-wrap-reverse items-center justify-between gap-2 px-4 pt-4 md:flex-wrap">
            <p className="text-small text-default-400">
              {data.footerText}
              <span className="text-default-500">{orgName.length}/50</span>
            </p>
            <div className="flex items-center gap-2">{data.actions}</div>
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

export { CardFieldset }

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  description?: string
  footerText?: string
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
