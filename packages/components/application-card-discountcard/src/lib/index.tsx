'use client'

import { Icon } from '@iconify/react'
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Form,
  Input,
  Link,
  cn
} from '@vx-oss/react'
import React from 'react'

const CardDiscount = ({ data }: { data: cardProps }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('handleSubmit')
  }

  const content = isOpen ? (
    <div className="h-full w-full items-start justify-center overflow-scroll px-4 pt-20 pb-24">
      <div className="flex flex-col gap-2">
        <Form
          className="w-full"
          validationBehavior="native"
          onSubmit={handleSubmit}>
          <Input
            autoFocus
            fullWidth
            isRequired
            aria-label="Affiliate code"
            classNames={{
              inputWrapper: 'group-data-[focus-visible=true]:outline-foreground'
            }}
            label="Enter affiliate code"
            labelPlacement="outside"
            placeholder="E.g. ACME123"
          />
          {data.actions}
        </Form>
      </div>
      <Divider className="mt-10 mb-8" />

      <ul className="flex flex-col gap-1">
        {data.linkList?.map((item, index) => (
          <li key={index}>
            <Link className="text-default-400" href="#" size="sm">
              {item.list}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ) : (
    // iconlist render here
    <ul>
      {data.iconList?.map((item, index) => (
        <li key={index} className="flex items-center gap-1">
          {item.icon}
          <p className="text-small text-default-500">{item.list}</p>
        </li>
      ))}
    </ul>
  )

  return (
    <Card className="relative w-full max-w-[400px] pb-[120px]">
      <Button
        className="absolute top-8 right-4 z-10"
        isIconOnly={isOpen}
        radius="full"
        size="sm"
        onPress={() => setIsOpen(prev => !prev)}>
        {isOpen ? <Icon icon="ci:close-sm" width={24} /> : 'Apply'}
      </Button>

      <CardBody className="from-content1 to-default-100/50 relative min-h-[300px] bg-linear-to-br p-8 before:inset-0 before:h-full before:w-full before:content-['']">
        <h1 className="text-default-400 mb-4">{data.title}</h1>
        <h2 className="from-foreground-800 to-foreground-500 dark:to-foreground-200 inline bg-linear-to-br bg-clip-text text-6xl font-semibold tracking-tight text-transparent">
          Four
          <br />
          months
          <br />
          free
        </h2>
      </CardBody>
      <CardFooter
        className={cn(
          'bg-content1 transition-height absolute bottom-0 h-[120px] overflow-visible px-6 duration-300 ease-in-out',
          {
            'h-full': isOpen,
            'border-default-100 border-t-1': !isOpen
          }
        )}>
        {content}
      </CardFooter>
    </Card>
  )
}

export { CardDiscount }

export type listLinkProps = {
  list?: string
}

export type listIconProps = {
  icon?: React.ReactNode
  list: string
}

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  description?: string
  linkList: listLinkProps[]
  iconList: listIconProps[]
  footerText?: string
  actions?: React.ReactNode
  footerActions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
