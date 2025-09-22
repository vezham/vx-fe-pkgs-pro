import { Button } from '@vx-oss/react'

import React, { SVGProps } from 'react'

import { Icon } from '@iconify/react'

const HeroSectionBasic = ({ data }: { data: heroSectionProps }) => {
  return (
    <div className="bg-background relative flex h-dvh w-full flex-col overflow-hidden">
      {data.navbarActions}
      <main className="container mx-auto flex flex-1 flex-col items-center justify-center overflow-hidden px-8">
        <section className="z-20 flex flex-col items-center justify-center gap-[18px] sm:gap-6">
          <Button
            className="border-default-100 bg-default-50 text-small text-default-500 h-9 overflow-hidden border-1 px-[18px] py-2 leading-5 font-normal"
            endContent={
              <Icon
                className="flex-none outline-hidden [&>path]:stroke-2"
                icon="solar:arrow-right-linear"
                width={20}
              />
            }
            radius="full"
            variant="bordered">
            {data.title}
          </Button>

          <div className="text-center text-[clamp(40px,10vw,44px)] leading-[1.2] font-bold tracking-tighter sm:text-[64px]">
            <div className="bg-hero-section-title bg-clip-text text-transparent">
              {/*
              NOTE: To use `bg-hero-section-title`, you need to add the following to your tailwind config.
              ```
              backgroundImage: {
                "hero-section-title":
                  "linear-gradient(91deg, #FFF 32.88%, rgba(255, 255, 255, 0.40) 99.12%)",
              },
              ```
            */}
              {data.mainHead} <br /> {data.subHead}
            </div>
          </div>
          <p className="text-default-500 text-center leading-7 font-normal sm:w-[466px] sm:text-[18px]">
            {data.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
            {data.actions}
          </div>
        </section>
        <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
          {data.fadeImgActions}
        </div>
      </main>
    </div>
  )
}

export { HeroSectionBasic }

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number
}

export type heroSectionProps = {
  title: string
  mainHead: string
  subHead: string
  description: string
  actions?: React.ReactNode
  navbarActions?: React.ReactNode
  fadeImgActions?: React.ReactNode
}

export type NavProps = {
  logo?: React.ReactNode
  brand: string
  navMenuActions?: React.ReactNode
  navActions?: React.ReactNode
}
