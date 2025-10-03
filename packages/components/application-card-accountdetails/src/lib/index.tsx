'use client'

import {
  Autocomplete,
  AutocompleteItem,
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Form,
  Input
} from '@vx-oss/react'
import React from 'react'

const CardAccountDetails = ({ data }: { data: cardProps }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const values = Object.fromEntries(formData.entries())

    console.log(values)
  }

  return (
    <Card className="max-w-xl p-2">
      <CardHeader className="flex flex-col items-start px-4 pt-4 pb-0">
        <p className="text-large">{data.title}</p>
        <div className="flex gap-4 py-4">
          {data.actions}
          <div className="flex flex-col items-start justify-center">
            <p className="font-medium">{data.name}</p>
            <span className="text-small text-default-500">{data.role}</span>
          </div>
        </div>
        <p className="text-small text-default-400">{data.description}</p>
      </CardHeader>

      <CardBody>
        <Form validationBehavior="native" onSubmit={handleSubmit}>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2">
            {/* Username */}
            <Input
              isRequired
              name="username"
              label="Username"
              labelPlacement="outside"
              placeholder="Enter username"
            />
            {/* Email */}
            <Input
              isRequired
              name="email"
              label="Email"
              labelPlacement="outside"
              placeholder="Enter email"
              type="email"
            />
            {/* First Name */}
            <Input
              isRequired
              name="firstName"
              label="First Name"
              labelPlacement="outside"
              placeholder="Enter first name"
            />
            {/* Last Name */}
            <Input
              isRequired
              name="lastName"
              label="Last Name"
              labelPlacement="outside"
              placeholder="Enter last name"
            />
            {/* Phone Number */}
            <Input
              isRequired
              name="phone"
              label="Phone Number"
              labelPlacement="outside"
              placeholder="Enter phone number"
            />
            {/* Country */}
            <Autocomplete
              isRequired
              defaultItems={data.countries || []}
              label="Country"
              labelPlacement="outside"
              placeholder="Select country"
              showScrollIndicators={false}
              name="country">
              {item => (
                <AutocompleteItem
                  key={item.code}
                  startContent={
                    <Avatar
                      alt="Country Flag"
                      className="h-6 w-6"
                      src={`https://flagcdn.com/${item.code.toLowerCase()}.svg`}
                    />
                  }>
                  {item.name}
                </AutocompleteItem>
              )}
            </Autocomplete>
            {/* State */}
            <Input
              isRequired
              name="state"
              label="State"
              labelPlacement="outside"
              placeholder="Enter state"
            />
            {/* Address */}
            <Input
              isRequired
              name="address"
              label="Address"
              labelPlacement="outside"
              placeholder="Enter address"
            />
            {/* Zip Code */}
            <Input
              isRequired
              name="zip"
              label="Zip Code"
              labelPlacement="outside"
              placeholder="Enter zip code"
            />
          </div>

          <div className="mt-6 flex w-full justify-end gap-2">
            {data.footerActions}
          </div>
        </Form>
      </CardBody>
    </Card>
  )
}

export { CardAccountDetails }

export type countryProp = {
  name: string
  code: string
}

export type cardProps = {
  title?: string
  name?: string
  role?: string
  description?: string
  footerActions?: React.ReactNode
  countries?: countryProp[]
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
