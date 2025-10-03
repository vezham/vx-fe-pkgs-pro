import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'
import { AnimatePresence, domAnimation, LazyMotion, m } from 'framer-motion'
import React, { SVGProps } from 'react'

const HeroSectionSkewed = ({ data }: { data: heroSectionProps }) => {
  return (
    <div className="bg-background relative flex h-screen min-h-dvh w-full flex-col overflow-hidden">
      {data.navbarActions}
      <main className="container mx-auto mt-[80px] flex max-w-[1024px] flex-col items-start px-8">
        <section className="z-20 flex flex-col items-start justify-center gap-[18px] sm:gap-6">
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
          <LazyMotion features={domAnimation}>
            <m.div
              animate="kick"
              className="flex flex-col gap-6"
              exit="auto"
              initial="auto"
              transition={{
                duration: 0.25,
                ease: 'easeInOut'
              }}
              variants={{
                auto: { width: 'auto' },
                kick: { width: 'auto' }
              }}>
              <AnimatePresence mode="wait">
                <m.div
                  key="hero-section-title"
                  animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
                  className="text-start text-[clamp(40px,10vw,44px)] leading-[1.2] font-bold tracking-tighter sm:text-[64px]"
                  initial={{ filter: 'blur(16px)', opacity: 0, x: 15 + 1 * 2 }}
                  transition={{
                    bounce: 0,
                    delay: 0.01 * 10,
                    duration: 0.8 + 0.1 * 8,
                    type: 'spring'
                  }}>
                  {/*
                    NOTE: To use `bg-hero-section-title`, you need to add the following to your tailwind config.
                    ```
                    backgroundImage: {
                      "hero-section-title":
                        "linear-gradient(91deg, #FFF 32.88%, rgba(255, 255, 255, 0.40) 99.12%)",
                    },
                    ```
                  */}
                  <div className="bg-hero-section-title bg-clip-text text-transparent dark:from-[#FFFFFF] dark:to-[#FFFFFF66]">
                    {data.mainHead} <br /> {data.subHead}
                  </div>
                </m.div>

                <m.div
                  key="hero-section-description"
                  animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
                  className="text-default-500 text-start leading-7 font-normal sm:w-[466px] sm:text-[18px]"
                  initial={{ filter: 'blur(16px)', opacity: 0, x: 15 + 1 * 3 }}
                  transition={{
                    bounce: 0,
                    delay: 0.01 * 30,
                    duration: 0.8 + 0.1 * 9,
                    type: 'spring'
                  }}>
                  {data.description}
                </m.div>

                <m.div
                  key="hero-section-buttons"
                  animate={{ filter: 'blur(0px)', opacity: 1, x: 0 }}
                  className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6"
                  initial={{ filter: 'blur(16px)', opacity: 0, x: 15 + 1 * 4 }}
                  transition={{
                    bounce: 0,
                    delay: 0.01 * 50,
                    duration: 0.8 + 0.1 * 10,
                    type: 'spring'
                  }}>
                  {data.actions}
                </m.div>
              </AnimatePresence>
            </m.div>
          </LazyMotion>
        </section>
      </main>
      <LazyMotion features={domAnimation}>
        <AnimatePresence mode="wait">
          <m.div
            key="hero-section-app-screenshot"
            animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
            className="absolute top-[40%] w-full"
            initial={{ filter: 'blur(16px)', opacity: 0, y: 300 }}
            transition={{
              bounce: 0,
              delay: 0.01 * 10,
              duration: 0.8 + 0.1 * 8,
              type: 'spring'
            }}>
            {data.appActions}
          </m.div>
        </AnimatePresence>
      </LazyMotion>

      <div className="pointer-events-none absolute inset-0 top-[-25%] z-10 scale-150 select-none sm:scale-125">
        {data.fadeImgActions}
      </div>
    </div>
  )
}

export { HeroSectionSkewed }

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
  appActions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}

export type NavProps = {
  logo?: React.ReactNode
  brand: string
  navMenuActions?: React.ReactNode
  navActions?: React.ReactNode
}
