'use client'

import { Card, CardBody, CardHeader, Chip, Tab, Tabs } from '@vx-oss/react'

const CardUserProfile = ({ data }: { data: cardProps }) => {
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
          <Tabs fullWidth>
            {data.tabItem?.map(tab => (
              <Tab key={tab.key} title={tab.title} />
            ))}
          </Tabs>
        </CardBody>
      </Card>
    </div>
  )
}

export { CardUserProfile }

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
  description?: string
  footerText?: string
  actions?: React.ReactNode
  footerActions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
