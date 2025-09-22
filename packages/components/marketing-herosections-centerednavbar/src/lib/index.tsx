import { Icon } from '@iconify/react'

import React from 'react'

import { Button, type ScrollShadowProps } from '@vx-oss/react'
import type { SVGProps } from 'react'

const HeroSectionNavbar = ({ data }: { data: heroSectionProps }) => {
  return (
    <div className="bg-background relative flex h-screen min-h-dvh w-full flex-col gap-9 overflow-y-auto p-4 md:gap-12 md:px-10 md:py-[34px]">
      {/*
        NOTE: To use `bg-hero-section-centered-navbar`, you need to add the following to your tailwind config.
        ```
        backgroundImage: {
          "hero-section-centered-navbar":
            "linear-gradient(137deg, #F4F4F5 34.15%, #F8E5EC 46.96%, #FDD0DF 63.99%, #E4D4F4 75.82%, #A9EAF0 98.9%)",
        },
        ```
      */}
      <main className="bg-hero-section-centered-navbar flex flex-col items-center rounded-2xl px-3 md:rounded-3xl md:px-0">
        <section className="my-14 mt-16 flex flex-col items-center justify-center gap-6">
          {data.navbarActions}
          <Button
            className="bg-background text-default-500 h-9 px-[18px] shadow-[0_2px_15px_0_rgba(0,0,0,0.05)]"
            endContent={
              <Icon
                className="pointer-events-none flex-none outline-hidden [&>path]:stroke-[1.5]"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full">
            {data.title}
          </Button>
          <h1 className="text-foreground text-center text-[clamp(2.125rem,1.142rem+3.659vw,4rem)] leading-none font-bold">
            {data.mainHead} <br /> {data.subHead}
          </h1>
          <p className="text-default-600 text-center text-base sm:w-[466px] md:text-lg md:leading-6">
            {data.description}
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
            {data.actions}
          </div>
        </section>
        <div className="mt-auto w-[calc(100%-calc(--spacing(4)*2))] max-w-6xl overflow-hidden rounded-tl-2xl rounded-tr-2xl border-1 border-white/25 bg-white/40 px-2 pt-3 md:px-4 md:pt-6">
          {data.appActions}
        </div>
      </main>
      <div className="mx-auto w-full max-w-6xl px-3 lg:px-6">
        {data.scrollBannerActions}
      </div>
    </div>
  )
}

export { HeroSectionNavbar }
export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export interface ScrollingBannerProps extends ScrollShadowProps {
  isReverse?: boolean
  showShadow?: boolean
  shouldPauseOnHover?: boolean
  isVertical?: boolean
  gap?: string
  duration?: number // in seconds
}

export type heroSectionProps = {
  title: string
  mainHead: string
  subHead: string
  description: string
  actions?: React.ReactNode
  navbarActions?: React.ReactNode
  scrollBannerActions?: React.ReactNode
  appActions?: React.ReactNode
}

export type NavProps = {
  logo?: React.ReactNode
  brand: string
  navMenuActions?: React.ReactNode
  navActions?: React.ReactNode
}
