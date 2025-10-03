'use client'

import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Tab,
  Tabs
} from '@vx-oss/react'
import React from 'react'

const UserPost = React.forwardRef<HTMLDivElement, UserPostProps>(
  ({ avatar, name, date, username, text, likes, comments, ...props }, ref) => (
    <div ref={ref} className="mb-4 flex gap-4" {...props}>
      <Avatar className="flex-none" size="md" src={avatar} />
      <div className="flex flex-col justify-center">
        <div className="text-small flex gap-1">
          <p>{name}</p>
          <p className="text-default-400">{username}</p>
          <span className="text-default-400">·</span>
          <p className="text-default-400">
            {new Intl.DateTimeFormat('en-US', {
              weekday: 'short',
              day: 'numeric'
            }).format(new Date(date))}
          </p>
        </div>
        <p className="text-small text-default-500">{text}</p>
        <div className="flex gap-2">
          <p>
            <span className="text-small text-default-500 font-medium">
              {likes}
            </span>
            &nbsp;
            <span className="text-small text-default-400">Likes</span>
          </p>
          <p>
            <span className="text-small text-default-500 font-medium">
              {comments}
            </span>
            &nbsp;
            <span className="text-small text-default-400">Comments</span>
          </p>
        </div>
      </div>
    </div>
  )
)

const CardUserProfileExtend = ({ data }: { data: cardProps }) => {
  return (
    <div className="flex h-full w-full items-start justify-center overflow-scroll">
      <Card className="my-10 w-[400px]">
        <CardHeader className="relative flex h-[100px] flex-col justify-end overflow-visible bg-linear-to-br from-pink-300 via-purple-300 to-indigo-400">
          {data.actions}
        </CardHeader>
        <CardBody>
          <div className="pt-6 pb-4">
            <p className="text-large font-medium">{data.title}</p>
            <p className="text-small text-default-400 max-w-[90%]">
              {data.subtitle}
            </p>
            <div className="flex gap-2 pt-2 pb-1">
              {data.chipItems?.map((chip, index) => (
                <Chip key={index} variant="flat">
                  {chip}
                </Chip>
              ))}
            </div>
            <p className="text-small text-foreground py-2">
              {data.description}
            </p>
            <div className="flex gap-2">
              <p>
                <span className="text-small text-default-500 font-medium">
                  13
                </span>
                &nbsp;
                <span className="text-small text-default-400">Following</span>
              </p>
              <p>
                <span className="text-small text-default-500 font-medium">
                  2500
                </span>
                &nbsp;
                <span className="text-small text-default-400">Followers</span>
              </p>
            </div>
          </div>
          <Tabs
            fullWidth
            classNames={{
              panel: 'mt-2'
            }}>
            {data.tabItem.map(tab => (
              <Tab key={tab.key} title={tab.title}>
                {data.users
                  .filter(u => u.tabKey === tab.key)
                  .map((user, i) => (
                    <UserPost key={i} {...user} />
                  ))}
              </Tab>
            ))}
          </Tabs>
        </CardBody>
      </Card>
    </div>
  )
}

export { CardUserProfileExtend }

export type UserPostProps = React.HTMLAttributes<HTMLDivElement> & {
  avatar: string
  name: string
  date: string
  username: string
  text: string
  likes: number
  comments: number
  tabKey: string
}

export type tabItemProps = {
  key: string
  title: string
}

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  chipItems: string[]
  tabItem: tabItemProps[]
  users: UserPostProps[]
  description?: string
  footerText?: string
  actions?: React.ReactNode
  footerActions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
