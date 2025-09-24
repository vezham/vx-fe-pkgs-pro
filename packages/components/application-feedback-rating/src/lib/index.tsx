'use client'

import type { RadioGroupProps, RadioProps } from '@vx-oss/react'
import { cn, RadioGroup } from '@vx-oss/react'
import React from 'react'

type FeedBackRatingProps = { data?: FeedbackRatingItemsProps } & RadioGroupProps

const FeedBackRating: React.FC<FeedBackRatingProps> = ({
  data,
  classNames,
  ...props
}) => {
  const [value, setValue] = React.useState<RatingValueEnum | string>(
    RatingValueEnum.GOOD
  )

  return (
    <RadioGroup
      value={value}
      {...props}
      classNames={{
        ...classNames,
        base: cn(classNames?.base, 'max-w-fit'),
        wrapper: cn(classNames?.wrapper, 'gap-3')
      }}
      defaultValue="1"
      orientation="horizontal"
      size="lg"
      onValueChange={setValue}>
      {data?.actions}
    </RadioGroup>
  )
}

export { FeedBackRating }

export enum RatingValueEnum {
  BAD = 'bad',
  NEUTRAL = 'neutral',
  GOOD = 'good',
  GREAT = 'great'
}

export type FeedbackRatingItemProps = Omit<RadioProps, 'value'> & {
  value: RatingValueEnum
}

export type FeedbackRatingItemsProps = {
  actions?: React.ReactNode
}
