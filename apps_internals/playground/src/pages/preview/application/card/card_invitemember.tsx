import { Button } from '@vx-oss/react'
import {
  CardInviteMember,
  UserCellProps,
  cardProps
} from '@vx-pro/application-card-invitemember'

const card_invitemember = () => {
  const users: UserCellProps[] = [
    {
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
      name: 'Tony Reichert (you)',
      permission: 'Owner'
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
      name: 'John Doe',
      permission: 'Can edit'
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
      name: 'Jane Doe',
      permission: 'Can view'
    },
    {
      avatar: 'https://i.pravatar.cc/150?u=a04258a2462d826712d',
      name: 'John Smith',
      permission: 'Can view'
    }
  ]

  const data: cardProps = {
    title: 'Invite Member',
    subtitle: ' Invite a new member to your organization.',
    users: users,
    actions: (
      <Button color="primary" size="md" type="submit">
        Invite
      </Button>
    ),
    footerActions: (
      <>
        <Button size="sm" variant="flat">
          Copy Link
        </Button>
        <Button size="sm" variant="flat">
          Get Embed Code
        </Button>
      </>
    )
  }

  return (
    <div>
      <CardInviteMember data={data} />
    </div>
  )
}

export default card_invitemember
