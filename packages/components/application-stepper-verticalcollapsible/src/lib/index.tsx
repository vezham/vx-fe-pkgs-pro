'use client'

import type { ButtonProps } from '@vx-oss/react'
import React from 'react'

const StepperVerticalCollapsible = ({
  data
}: {
  data: VerticalCollapsibleStepsProps
}) => {
  return (
    <section className="max-w-sm">
      {data.heading && (
        <h1 className="mb-2 text-xl font-medium" id="getting-started">
          {data.heading}
        </h1>
      )}
      {data.subHead && (
        <p className="text-small text-default-500 mb-5">{data.subHead}</p>
      )}
      <div>{data.headerActions}</div>
      <div>{data.mainContent}</div>
      <div>{data.footerCard}</div>
    </section>
  )
}

export { StepperVerticalCollapsible }

export type VerticalCollapsibleStepProps = {
  icon?: React.ReactNode
  className?: string
  description?: React.ReactNode
  title?: React.ReactNode
  details?: string[]
}

export interface VerticalCollapsibleStepsProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  heading?: string
  subHead?: string
  headerActions?: React.ReactNode
  mainContent?: React.ReactNode
  footerCard?: React.ReactNode

  steps?: VerticalCollapsibleStepProps[]

  color?: ButtonProps['color']

  currentStep?: number

  defaultStep?: number

  hideProgressBars?: boolean

  className?: string

  stepClassName?: string

  onStepChange?: (stepIndex: number) => void
}

export type SupportCardProps = React.HTMLAttributes<HTMLDivElement>
