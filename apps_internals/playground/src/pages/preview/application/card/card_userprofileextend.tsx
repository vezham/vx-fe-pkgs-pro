import { Avatar, Button } from '@vx-oss/react'
import {
  cardProps,
  CardUserProfileExtend,
  tabItemProps,
  UserPostProps
} from '@vx-pro/application-card-userprofile-extended'

const card_userprofileextend = () => {
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

  const users: UserPostProps[] = [
    ...Array.from({ length: 6 }).map((_, i) => ({
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
      comments: 5 + i,
      date: '2021-08-01',
      likes: 100 + i,
      name: `Post User ${i + 1}`,
      text: `Post content ${i + 1}`,
      username: `@post${i + 1}`,
      tabKey: 'posts'
    })),
    ...Array.from({ length: 2 }).map((_, i) => ({
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
      comments: 2 + i,
      date: '2021-08-02',
      likes: 50 + i,
      name: `Like User ${i + 1}`,
      text: `Like content ${i + 1}`,
      username: `@like${i + 1}`,
      tabKey: 'likes'
    })),
    {
      avatar: 'https://i.pravatar.cc/150?u=a04258114e29026708c',
      comments: 1,
      date: '2021-08-03',
      likes: 20,
      name: 'Comment User',
      text: 'One comment here',
      username: '@comment1',
      tabKey: 'comments'
    }
  ]

  const data: cardProps = {
    title: ' Tony Reichert',
    subtitle: ' @tony.reichert',
    chipItems: ChipItems,
    tabItem: tabs,
    users: users,
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
      <CardUserProfileExtend data={data} />
    </div>
  )
}

export default card_userprofileextend
