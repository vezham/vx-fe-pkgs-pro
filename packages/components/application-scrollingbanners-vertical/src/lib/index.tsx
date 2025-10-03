import type { ScrollShadowProps } from '@vx-oss/react'

import { cn, ScrollShadow } from '@vx-oss/react'
import React from 'react'

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

const ScrollBannerVertical = ({ data }: { data: ScrollBannerProps }) => {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-20 sm:py-32 lg:px-8 lg:py-40">
      <div className="flex w-full items-center justify-center gap-12">
        <ScrollingBanner isVertical shouldPauseOnHover duration={50} gap="40px">
          {data.logo.map(({ key, logo }) => (
            <div
              key={key}
              className="text-foreground flex items-center justify-center">
              {logo}
            </div>
          ))}
        </ScrollingBanner>
        <ScrollingBanner
          isReverse
          isVertical
          shouldPauseOnHover
          duration={50}
          gap="40px">
          {data.logo.map(({ key, logo }) => (
            <div
              key={key}
              className="text-foreground flex items-center justify-center">
              {logo}
            </div>
          ))}
        </ScrollingBanner>
      </div>
    </section>
  )
}

export { ScrollBannerVertical }

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

export interface ScrollingBannerProps extends ScrollShadowProps {
  isReverse?: boolean
  showShadow?: boolean
  shouldPauseOnHover?: boolean
  isVertical?: boolean
  gap?: string
  duration?: number // in seconds
}

export type logoProps = {
  key: string
  logo: React.ReactNode | string | undefined
}

export type ScrollBannerProps = {
  logo: logoProps[]
  className?: string
  children?: React.ReactNode
}
