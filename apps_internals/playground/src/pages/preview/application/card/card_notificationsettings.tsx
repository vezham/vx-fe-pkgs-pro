import { Button } from '@vx-oss/react'
import {
  CardNotificationSettings,
  cardProps,
  switchtoggleProps
} from '@vx-pro/application-card-notification-settings'

const card_notificationsettings = () => {
  const toggle: switchtoggleProps[] = [
    {
      description: 'Temporarily pause all notifications',
      label: 'Pause all'
    },
    {
      defaultselected: true,
      description: 'Get notified when someone follows you',
      label: 'Followers'
    },
    {
      description: 'Get notified when someone likes your post',
      label: 'Likes',
      defaultselected: true
    },
    {
      description: 'Get notified when someone comments on your post',
      label: 'Comments'
    },
    {
      defaultselected: true,
      description: 'Get notified when someone mentions you in a post',
      label: 'Mentions'
    },
    {
      defaultselected: true,
      description: 'Get notified when someone sends you a message',
      label: 'Messages'
    },
    {
      description: 'Get notified when someone sends you a friend request',
      label: 'Friend Requests'
    }
  ]

  const data: cardProps = {
    title: ' Notification Settings',
    subtitle: ' Manage your notification preferences',
    toggle: toggle,
    actions: (
      <>
        <Button variant="bordered">Reset to Default</Button>
        <Button color="primary" type="submit">
          Save Changes
        </Button>
      </>
    )
  }

  return (
    <div>
      <CardNotificationSettings data={data} />
    </div>
  )
}

export default card_notificationsettings
