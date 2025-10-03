'use client'

import React from 'react'
import { useMediaQuery } from 'usehooks-ts'

import type { ScrollShadowProps } from '@vx-oss/react'

import { Avatar, cn, ScrollShadow } from '@vx-oss/react'

const ScrollBannerTestimonials = ({ data }: { data: ScrollBannerProps }) => {
  const testimonials1 = data.testimonials.slice(0, 4)
  const testimonials2 = data.testimonials.slice(4, 8)
  const testimonials3 = data.testimonials.slice(8, 12)
  const testimonials4 = data.testimonials.slice(12, 16)

  const isMobile = useMediaQuery('(max-width: 768px)')

  const firstColumn = React.useMemo(
    () => (isMobile ? data.testimonials : testimonials1),
    [isMobile, data.testimonials, testimonials1]
  )

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40">
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
        <ScrollingBanner
          isVertical
          duration={isMobile ? 200 : 120}
          shouldPauseOnHover={false}>
          {firstColumn.map((testimonial, index) => (
            <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </ScrollingBanner>

        <ScrollingBanner
          isVertical
          className="hidden sm:flex"
          duration={200}
          shouldPauseOnHover={false}>
          {testimonials2.map((testimonial, index) => (
            <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </ScrollingBanner>

        <ScrollingBanner
          isVertical
          className="hidden md:flex"
          duration={200}
          shouldPauseOnHover={false}>
          {testimonials3.map((testimonial, index) => (
            <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </ScrollingBanner>

        <ScrollingBanner
          isVertical
          className="hidden lg:flex"
          duration={200}
          shouldPauseOnHover={false}>
          {testimonials4.map((testimonial, index) => (
            <UserReview key={`${testimonial.name}-${index}`} {...testimonial} />
          ))}
        </ScrollingBanner>
      </div>
    </section>
  )
}

export { ScrollBannerTestimonials }
/*
  This example requires some changes to your TailwindCSS config:

  ```
  // tailwind.config.js or tailwind.config.ts
  module.exports = {
    // ...
  theme: {
      extend: {
        keyframes: {
          "scrolling-banner": {
            from: {transform: "translateX(0)"},
            to: {transform: "translateX(calc(-50% - var(--gap)/2))"},
          },
          "scrolling-banner-vertical": {
            from: {transform: "translateY(0)"},
            to: {transform: "translateY(calc(-50% - var(--gap)/2))"},
          },
        },
        animation: {
          "scrolling-banner": "scrolling-banner var(--duration) linear infinite",
          "scrolling-banner-vertical": "scrolling-banner-vertical var(--duration) linear infinite",
        },
      },
    },
  }
  ```
*/

const UserReview = React.forwardRef<HTMLDivElement, UserReviewProps>(
  ({ children, name, avatar, content, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-medium bg-content1 shadow-small flex flex-col gap-2.5 p-5',
        className
      )}
      {...props}>
      <div className="flex items-center gap-2">
        <Avatar alt={name} className="h-7 w-7" size="sm" src={avatar} />
        <span className="text-small text-foreground">{name}</span>
      </div>
      <p className="text-default-700">{content || children}</p>
    </div>
  )
)

const ScrollingBanner = React.forwardRef<HTMLDivElement, ScrollingBannerProps>(
  (
    {
      className,
      isReverse,
      isVertical = false,
      gap = '1rem',
      showShadow = true,
      shouldPauseOnHover = true,
      duration = 40,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const shadowProps: ScrollShadowProps = {
      isEnabled: showShadow,
      offset: -20,
      size: 300,
      orientation: isVertical ? 'vertical' : 'horizontal',
      visibility: 'both',
      ...props
    }

    return (
      <ScrollShadow
        {...shadowProps}
        ref={ref}
        className={cn(
          'flex',
          {
            'w-full': !isVertical,
            'overflow-y-hidden': isVertical,
            'overflow-x-hidden': !isVertical,
            'max-h-[calc(100vh-200px)]': isVertical
          },
          className
        )}
        style={{
          // @ts-ignore
          '--gap': gap,
          '--duration': `${duration}s`,
          ...style
        }}>
        <div
          className={cn('flex w-max items-stretch gap-(--gap)', {
            'flex-col': isVertical,
            'h-full': isVertical,
            'animate-scrolling-banner': !isVertical,
            'animate-scrolling-banner-vertical': isVertical,
            '[animation-direction:reverse]': isReverse,
            'hover:[animation-play-state:paused]': shouldPauseOnHover
          })}>
          {React.Children.map(children, child =>
            React.cloneElement(child as any)
          )}
        </div>
      </ScrollShadow>
    )
  }
)

export interface ScrollingBannerProps extends ScrollShadowProps {
  isReverse?: boolean
  showShadow?: boolean
  shouldPauseOnHover?: boolean
  isVertical?: boolean
  gap?: string
  duration?: number // in seconds
}

export type UserReviewProps = React.HTMLAttributes<HTMLDivElement> & {
  avatar: string
  name: string
  role: string
  content: string
}

export type ScrollBannerProps = {
  testimonials: UserReviewProps[]
  className?: string
  children?: React.ReactNode
}
