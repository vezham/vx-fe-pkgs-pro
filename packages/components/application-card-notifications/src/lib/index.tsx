'use client'

import { Icon } from '@iconify/react'
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  cn,
  ScrollShadow,
  Tab,
  Tabs
} from '@vx-oss/react'
import React from 'react'

const NotificationItem = React.forwardRef<
  HTMLDivElement,
  NotificationItemProps
>(
  (
    {
      children,
      avatar,
      name,
      description,
      type,
      time,
      isRead,
      className,
      ...props
    },
    ref
  ) => {
    /**
     * Defines the content for different types of notifications.
     */
    const contentByType: Record<NotificationType, React.ReactNode> = {
      default: null,
      request: (
        <div className="flex gap-2 pt-2">
          <Button color="primary" size="sm">
            Accept
          </Button>
          <Button size="sm" variant="flat">
            Decline
          </Button>
        </div>
      ),
      file: (
        <div className="flex items-center gap-2">
          <Icon
            className="text-secondary"
            icon="solar:figma-file-linear"
            width={30}
          />
          <div className="flex flex-col">
            <strong className="text-small font-medium">
              Brand_Logo_v1.2.fig
            </strong>
            <p className="text-tiny text-default-400">3.4 MB</p>
          </div>
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          'border-divider flex gap-3 border-b px-6 py-4',
          { 'bg-primary-50/50': !isRead },
          className
        )}
        {...props}>
        <div className="relative flex-none">
          <Badge
            color="primary"
            content=""
            isInvisible={isRead}
            placement="bottom-right"
            shape="circle">
            <Avatar src={avatar} />
          </Badge>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-small text-foreground">
            <strong className="font-medium">{name}</strong>{' '}
            {description || children}
          </p>
          <time className="text-tiny text-default-400">{time}</time>
          {type && contentByType[type]}
        </div>
      </div>
    )
  }
)

const CardNotification = ({ data }: { data: cardProps }) => {
  const [activeTab, setActiveTab] = React.useState<NotificationTabs>(
    NotificationTabs.All
  )

  const activeNotifications = data.notifications[activeTab]

  return (
    <Card className="w-full max-w-[420px]">
      <CardHeader className="flex flex-col px-0 pb-0">
        <div className="flex w-full items-center justify-between px-5 py-2">
          <div className="inline-flex items-center gap-1">
            <h4 className="text-large inline-block align-middle font-medium">
              {data.title}
            </h4>
            {data.logo}
          </div>
          {data.actions}
        </div>
        <Tabs
          aria-label="Notifications"
          classNames={{
            base: 'w-full',
            tabList:
              'gap-6 px-6 py-0 w-full relative rounded-none border-b border-divider',
            cursor: 'w-full',
            tab: 'max-w-fit px-2 h-12'
          }}
          color="primary"
          selectedKey={activeTab}
          variant="underlined"
          onSelectionChange={selected =>
            setActiveTab(selected as NotificationTabs)
          }>
          <Tab
            key="all"
            title={
              <div className="flex items-center space-x-2">
                <span>All</span>
                <Chip size="sm" variant="flat">
                  {data.notifications.all.length}
                </Chip>
              </div>
            }
          />
          <Tab
            key="unread"
            title={
              <div className="flex items-center space-x-2">
                <span>Unread</span>
                <Chip size="sm" variant="flat">
                  {data.notifications.unread.length}
                </Chip>
              </div>
            }
          />
          <Tab key="archive" title="Archive" />
        </Tabs>
      </CardHeader>
      <CardBody className="w-full gap-0 p-0">
        <ScrollShadow className="h-[500px] w-full">
          {activeNotifications?.length > 0 ? (
            activeNotifications.map(notification => (
              <NotificationItem key={notification.id} {...notification} />
            ))
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2">
              {data.footerActions}
              <p className="text-small text-default-400">{data.footerText}</p>
            </div>
          )}
        </ScrollShadow>
      </CardBody>
      <CardFooter className="justify-end gap-2 px-4">
        <Button
          variant={activeTab === NotificationTabs.Archive ? 'flat' : 'light'}>
          Settings
        </Button>
        {activeTab !== NotificationTabs.Archive && (
          <Button variant="flat">Archive All</Button>
        )}
      </CardFooter>
    </Card>
  )
}

export { CardNotification }

export enum NotificationTabs {
  All = 'all',
  Unread = 'unread',
  Archive = 'archive'
}

export type NotificationType = 'default' | 'request' | 'file'

export type NotificationData = {
  id: string
  isRead?: boolean
  avatar: string
  description: string
  name: string
  time: string
  type?: NotificationType
}

export type NotificationItemProps = React.HTMLAttributes<HTMLDivElement> &
  NotificationData

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  notifications: Record<NotificationTabs, NotificationData[]>
  description?: string
  footerText?: string
  actions?: React.ReactNode
  footerActions?: React.ReactNode
}
