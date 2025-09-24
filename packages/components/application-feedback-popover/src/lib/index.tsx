'use client'
import {
  Button,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
  RadioProps
} from '@vx-oss/react'
import React from 'react'

const FeedBackPopover = ({ data }: { data: FeedBackPopoverProps }) => {
  return (
    <div>
      <Popover shouldBlockScroll={false}>
        <PopoverTrigger>
          <Button variant="bordered">{data.title}</Button>
        </PopoverTrigger>
        <PopoverContent className="w-[340px] p-3">
          <form
            className="flex w-full flex-col gap-2"
            onSubmit={e => e.preventDefault()}>
            {data.textarea}

            <div className="flex w-full items-center justify-end gap-2 px-1">
              {data.icon}
              <p className="text-tiny text-default-400 dark:text-default-300">
                {data.link}
                &nbsp;supported.
              </p>
            </div>

            <Divider className="my-2" />

            <div className="flex w-full items-center justify-between">
              {data.content}
              {data.actions}
            </div>
          </form>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { FeedBackPopover }

export enum RatingValueEnum {
  BAD = 'bad',
  NEUTRAL = 'neutral',
  GOOD = 'good',
  GREAT = 'great'
}

export type FeedbackRatingItemProps = Omit<RadioProps, 'value'> & {
  value: RatingValueEnum
}

export type FeedBackPopoverProps = {
  title: string
  textarea?: React.ReactNode
  link?: React.ReactNode
  icon?: React.ReactNode
  content?: React.ReactNode
  actions?: React.ReactNode
}
