'use client'

import { Icon } from '@iconify/react'
import type { RadioProps } from '@vx-oss/react'
import { Divider, Link, Textarea } from '@vx-oss/react'

import React from 'react'

const FeedBackTextarea = ({ data }: { data: FeedBackProps }) => {
  return (
    <form
      className="rounded-medium bg-content1 shadow-small flex w-full max-w-sm flex-col gap-2 p-3"
      onSubmit={e => e.preventDefault()}>
      <Textarea
        aria-label="Feedback"
        name="feedback"
        placeholder="Ideas or suggestions to improve our product"
        variant="faded"
      />

      <div className="flex w-full items-center justify-end gap-2 px-1">
        {data.icon}
        <p className="text-tiny text-default-400 dark:text-default-300">
          <Link
            className="text-tiny text-default-500"
            color="foreground"
            href="https://guides.github.com/features/mastering-markdown/"
            rel="noreferrer"
            target="_blank">
            Markdown
            <Icon
              className="[&>path]:stroke-[2px]"
              icon="solar:arrow-right-up-linear"
            />
          </Link>
          &nbsp;supported.
        </p>
      </div>

      <Divider className="my-2" />

      <div className="flex w-full items-center justify-between">
        {data.content}
        {data.actions}
      </div>
    </form>
  )
}

export { FeedBackTextarea }

export enum RatingValueEnum {
  BAD = 'bad',
  NEUTRAL = 'neutral',
  GOOD = 'good',
  GREAT = 'great'
}

export type FeedbackRatingItemProps = Omit<RadioProps, 'value'> & {
  value: RatingValueEnum
}

export type FeedBackProps = {
  icon?: React.ReactNode
  content?: React.ReactNode
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
