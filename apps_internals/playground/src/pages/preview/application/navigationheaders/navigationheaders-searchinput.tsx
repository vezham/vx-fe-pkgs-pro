import { Icon } from '@iconify/react'
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardProps,
  Chip,
  cn,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  ScrollShadow,
  Tab,
  Tabs
} from '@vx-oss/react'
import {
  IconSvgProps,
  navigationHeaderProps,
  NavigationHeaderSearchInput,
  NotificationItem,
  NotificationItemProps,
  NotificationTabs,
  NotificationType
} from '@vx-pro/application-navigationheader-searchinput'

import React from 'react'

const navigationheaders_searchinput = () => {
  const notifications: Record<NotificationTabs, NotificationItem[]> = {
    all: [
      {
        id: '1',
        isRead: false,
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
        description: 'requested to join your Acme organization.',
        name: 'Tony Reichert',
        time: '2 hours ago',
        type: 'request'
      },
      {
        id: '2',
        isRead: false,
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        description: 'modified the Brand logo file.',
        name: 'Ben Berman',
        time: '7 hours ago',
        type: 'file'
      },
      {
        id: '3',
        isRead: false,
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        description: 'liked your post.',
        name: 'Jane Doe',
        time: 'Yesterday'
      },
      {
        id: '4',
        isRead: true,
        avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
        description: 'started following you.',
        name: 'John Smith',
        time: 'Yesterday'
      },
      {
        id: '5',
        isRead: true,
        avatar: 'https://i.pravatar.cc/150?u=a04258a24a2d826712d',
        description: 'mentioned you in a post.',
        name: 'Jacob Jones',
        time: '2 days ago'
      },
      {
        id: '6',
        isRead: true,
        avatar: 'https://i.pravatar.cc/150?u=a04458a24a2d826712d',
        description: 'commented on your post.',
        name: 'Amelie Dawson',
        time: '4 days ago'
      }
    ],
    unread: [
      {
        id: '1',
        isRead: false,
        avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
        description: 'requested to join your Acme organization.',
        name: 'Tony Reichert',
        time: '2 hours ago',
        type: 'request'
      },
      {
        id: '2',
        isRead: false,
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
        description: 'modified the Brand logo file.',
        name: 'Ben Berman',
        time: '7 hours ago',
        type: 'file'
      },
      {
        id: '3',
        isRead: false,
        avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
        description: 'liked your post.',
        name: 'Jane Doe',
        time: 'Yesterday'
      }
    ],
    archive: []
  }

  const NotificationsCard = (props: CardProps) => {
    const [activeTab, setActiveTab] = React.useState<NotificationTabs>(
      NotificationTabs.All
    )

    const activeNotifications = notifications[activeTab]

    return (
      <Card className="w-full max-w-[420px]" {...props}>
        <CardHeader className="flex flex-col px-0 pb-0">
          <div className="flex w-full items-center justify-between px-5 py-2">
            <div className="inline-flex items-center gap-1">
              <h4 className="text-large inline-block align-middle font-medium">
                Notifications
              </h4>
              <Chip size="sm" variant="flat">
                12
              </Chip>
            </div>
            <Button
              className="h-8 px-3"
              color="primary"
              radius="full"
              variant="light">
              Mark all as read
            </Button>
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
                    9
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
                    3
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
                <Icon
                  className="text-default-400"
                  icon="solar:bell-off-linear"
                  width={40}
                />
                <p className="text-small text-default-400">
                  No notifications yet.
                </p>
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

  const AcmeIcon: React.FC<IconSvgProps> = ({
    size = 32,
    width,
    height,
    ...props
  }) => (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 32 32"
      width={size || width}
      {...props}>
      <path
        clipRule="evenodd"
        d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  )

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
            {
              'bg-primary-50/50': !isRead
            },
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

  const navbarItems = [
    'Dashboard',
    'Deployments',
    'Analytics',
    'Team',
    'Settings'
  ]

  const data: navigationHeaderProps = {
    title: 'ACME',
    logo: <AcmeIcon />,
    navItems: navbarItems,
    actions: (
      <>
        {/* Search */}
        <NavbarItem className="mr-2 hidden lg:flex">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper:
                'bg-default-100 group-data-[hover=true]:bg-default-50 group-data-[focus=true]:bg-100'
            }}
            labelPlacement="outside"
            placeholder="Search..."
            radius="full"
            startContent={
              <Icon
                className="text-default-500"
                icon="solar:magnifer-linear"
                width={20}
              />
            }
          />
        </NavbarItem>
        {/* Mobile search */}
        <NavbarItem className="lg:hidden">
          <Button isIconOnly radius="full" variant="light">
            <Icon
              className="text-default-500"
              icon="solar:magnifer-linear"
              width={20}
            />
          </Button>
        </NavbarItem>
        {/* Theme change */}
        <NavbarItem className="hidden lg:flex">
          <Button isIconOnly radius="full" variant="light">
            <Icon
              className="text-default-500"
              icon="solar:sun-linear"
              width={24}
            />
          </Button>
        </NavbarItem>
        {/* Settings */}
        <NavbarItem className="hidden lg:flex">
          <Button isIconOnly radius="full" variant="light">
            <Icon
              className="text-default-500"
              icon="solar:settings-linear"
              width={24}
            />
          </Button>
        </NavbarItem>
        {/* Notifications */}
        <NavbarItem className="flex">
          <Popover offset={12} placement="bottom-end">
            <PopoverTrigger>
              <Button
                disableRipple
                isIconOnly
                className="overflow-visible"
                radius="full"
                variant="light">
                <Badge color="danger" content="5" showOutline={false} size="md">
                  <Icon
                    className="text-default-500"
                    icon="solar:bell-linear"
                    width={22}
                  />
                </Badge>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
              <NotificationsCard className="w-full shadow-none" />
            </PopoverContent>
          </Popover>
        </NavbarItem>
        {/* User Menu */}
        <NavbarItem className="px-2">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <button className="mt-1 h-8 w-8 transition-transform">
                <Badge
                  color="success"
                  content=""
                  placement="bottom-right"
                  shape="circle">
                  <Avatar
                    size="sm"
                    src="https://i.pravatar.cc/150?u=a04258114e29526708c"
                  />
                </Badge>
              </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">johndoe@example.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </>
    )
  }

  return (
    <div>
      <NavigationHeaderSearchInput data={data} />
    </div>
  )
}

export default navigationheaders_searchinput
