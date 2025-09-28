import { Avatar, Button } from '@vx-oss/react'
import {
  cardProps,
  CardUserProfile,
  tabItemProps
} from '@vx-pro/application-card-userprofile'

const card_userprofile = () => {
  const ChipItems = ['Design', 'UI/UX', ' Photography']

  const tabs: tabItemProps[] = [
    {
      key: 'posts',
      title: 'Posts'
    },
    {
      key: 'likes',
      title: 'Likes'
    },
    {
      key: 'comments',
      title: 'Media'
    }
  ]

  const data: cardProps = {
    title: ' Tony Reichert',
    subtitle: ' @tony.reichert',
    chipItems: ChipItems,
    tabItem: tabs,
    description:
      ' Creator of Radify Icons Set. 500+ icons in 6 styles, SVG and Figma files, and more.',
    actions: (
      <>
        <Avatar
          className="h-20 w-20 translate-y-12"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
        />
        <Button
          className="absolute top-3 right-3 bg-white/20 text-white dark:bg-black/20"
          radius="full"
          size="sm"
          variant="light">
          Edit Profile
        </Button>
      </>
    )
  }

  return (
    <div>
      <CardUserProfile data={data} />
    </div>
  )
}

export default card_userprofile
