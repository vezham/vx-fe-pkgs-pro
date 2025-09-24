import type { ScrollShadowProps } from '@vx-oss/react'
import React from 'react'

import { cn, ScrollShadow } from '@vx-oss/react'

const ScrollBannerGrid = ({ data }: { data: ScrollBannerProps }) => {
  const GridItem = ({ children }: { children: React.ReactNode }) => (
    <div className="rounded-small bg-default-200/50 text-foreground dark:bg-default-50/50 flex h-28 w-60 items-center justify-center">
      {children}
    </div>
  )

  const reversedLogos = data.logo.slice().reverse()

  return (
    <section className="mx-auto w-full max-w-6xl px-6">
      <div className="flex w-full flex-wrap items-center justify-center gap-1.5">
        <ScrollingBanner
          isVertical
          duration={70}
          gap="6px"
          shouldPauseOnHover={false}>
          {data.logo.map(({ key, logo }) => (
            <GridItem key={key}>{logo}</GridItem>
          ))}
        </ScrollingBanner>
        <ScrollingBanner
          isVertical
          duration={70}
          gap="6px"
          shouldPauseOnHover={false}>
          {reversedLogos.map(({ key, logo }) => (
            <GridItem key={key}>{logo}</GridItem>
          ))}
        </ScrollingBanner>
      </div>
    </section>
  )
}

export { ScrollBannerGrid }

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
  duration?: number
}

export type logoProps = {
  key: string
  logo: React.ReactNode | string | undefined
}

export type ScrollBannerProps = {
  logo: logoProps[]
}
