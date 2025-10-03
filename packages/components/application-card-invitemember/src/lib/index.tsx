'use client'

import type { Selection } from '@vx-oss/react'

import { Icon } from '@iconify/react'
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  cn,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Form,
  Input,
  Spacer
} from '@vx-oss/react'
import React from 'react'

const CardInviteMember = ({ data }: { data: cardProps }) => {
  const [selectedKeys, setSelectedKeys] = React.useState<Selection>(
    new Set(['can-view'])
  )

  const permissionLabels: Record<string, string> = {
    'can-view': 'Can View',
    'can-edit': 'Can Edit'
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log('handleSubmit')
  }

  return (
    <Card className="w-full max-w-[400px]">
      <CardHeader className="justify-center px-6 pt-6 pb-0">
        <div className="flex flex-col items-center">
          <AvatarGroup isBordered size="sm">
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
            <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          </AvatarGroup>
          <Spacer y={2} />
          <h4 className="text-large">{data.title}</h4>
          <p className="text-small text-default-500 text-center">
            {data.subtitle}
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex items-end gap-2">
          <Form
            className="w-full flex-row flex-nowrap items-end"
            validationBehavior="native"
            onSubmit={handleSubmit}>
            <Input
              isRequired
              classNames={{
                helperWrapper: 'absolute -bottom-6'
              }}
              endContent={
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      className="text-default-500"
                      endContent={
                        <span className="hidden sm:flex">
                          <Icon icon="solar:alt-arrow-down-linear" />
                        </span>
                      }
                      size="sm"
                      variant="light">
                      {Array.from(selectedKeys)
                        .map(key => permissionLabels[key])
                        .join(', ')}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    selectedKeys={selectedKeys}
                    selectionMode="single"
                    onSelectionChange={setSelectedKeys}>
                    <DropdownItem key="can-view">Can view</DropdownItem>
                    <DropdownItem key="can-edit">Can edit</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              }
              label="Email Address"
              labelPlacement="outside"
              name="email"
              placeholder="Email comma separated"
              type="email"
            />
            {data.actions}
          </Form>
        </div>
        <Spacer y={4} />
        {data.users && (
          <div className="mt-2 flex flex-col gap-2">
            {data.users.map((user, idx) => (
              <React.Fragment key={idx}>
                <UserCell
                  avatar={user.avatar}
                  name={user.name}
                  permission={user.permission}
                />
                {idx < data.users.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </div>
        )}
      </CardBody>
      <CardFooter className="justify-end gap-2">
        {data.footerActions}
      </CardFooter>
    </Card>
  )
}

export { CardInviteMember }

const UserCell = React.forwardRef<HTMLDivElement, UserCellProps>(
  ({ avatar, name, permission, className, ...props }, ref) => (
    <CellWrapper
      ref={ref}
      className={cn('bg-transparent px-3 py-1', className)}
      {...props}>
      <div className="flex items-center gap-2">
        <Avatar size="sm" src={avatar} />
        <p className="text-small text-default-500">{name}</p>
      </div>
      <p className="text-small text-default-400">{permission}</p>
    </CellWrapper>
  )
)

const CellWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children, className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-medium bg-content2 flex items-center justify-between gap-2 p-4',
      className
    )}
    {...props}>
    {children}
  </div>
))

export type UserCellProps = React.HTMLAttributes<HTMLDivElement> & {
  avatar: string
  name: string
  permission: string
}

export type cardProps = {
  logo?: React.ReactNode
  users: UserCellProps[]
  title?: string
  subtitle?: string
  description?: string
  footerText?: string
  actions?: React.ReactNode
  footerActions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
