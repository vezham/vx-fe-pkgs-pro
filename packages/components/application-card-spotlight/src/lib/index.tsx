'use client'

import { Card, CardBody, CardHeader, Image } from '@vx-oss/react'
import {
  domAnimation,
  LazyMotion,
  m,
  useMotionTemplate,
  useMotionValue
} from 'framer-motion'
import React from 'react'

const CardSpotlight = ({ data }: { data: cardProps }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const cardRef = React.useRef<HTMLDivElement>(null)

  function onMouseMove({
    clientX,
    clientY
  }: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return

    const { left, top } = rect
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <Card
      ref={cardRef}
      className="group shadow-large relative w-[420px] bg-neutral-900"
      radius="lg"
      onMouseMove={onMouseMove}>
      <LazyMotion features={domAnimation}>
        <m.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-250 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(120, 40, 200, 0.2),
                transparent 80%
              )
            `
          }}
        />
      </LazyMotion>
      <CardHeader className="relative h-60 p-0">
        <Image
          removeWrapper
          alt="Acme Planner"
          className="h-full object-cover"
          src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/calendar.png"
          style={{
            WebkitMaskImage:
              'linear-gradient(to bottom, #000 70%, transparent 100%)'
          }}
        />
      </CardHeader>
      <CardBody className="px-6 pt-4 pb-8">
        <div className="flex flex-col gap-2">
          <p className="text-xl text-neutral-50">{data.title}</p>
          <p className="text-small text-neutral-400">{data.description}</p>
        </div>
      </CardBody>
    </Card>
  )
}

export { CardSpotlight }

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  description?: string
  footerText?: string
  actions?: React.ReactNode
}
