import { Icon } from '@iconify/react'
import { Button, Chip } from '@vx-oss/react'
import {
  CardNotification,
  cardProps,
  NotificationData,
  NotificationTabs
} from '@vx-pro/application-card-notifications'

const card_notification = () => {
  const notifications: Record<NotificationTabs, NotificationData[]> = {
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

  const data: cardProps = {
    title: 'Notifications',
    logo: (
      <Chip size="sm" variant="flat">
        12
      </Chip>
    ),
    notifications,
    footerText: 'No notifications yet.',
    actions: (
      <Button
        className="h-8 px-3"
        color="primary"
        radius="full"
        variant="light">
        Mark all as read
      </Button>
    ),
    footerActions: (
      <Icon
        className="text-default-400"
        icon="solar:bell-off-linear"
        width={40}
      />
    )
  }

  return (
    <div>
      <CardNotification data={data} />
    </div>
  )
}

export default card_notification
