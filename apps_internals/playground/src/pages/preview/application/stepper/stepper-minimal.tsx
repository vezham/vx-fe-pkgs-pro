'use client'

import {
  StepperMinimal,
  StepperProps
} from '@vx-pro/application-stepper-minimal'
import { m } from 'framer-motion'
import { ComponentProps, useState } from 'react'

const Stepper_MinimalUsage = () => {
  const STEPS_COUNT = 4
  const [currentStep, setCurrentStep] = useState(2)

  const CheckIcon = (props: ComponentProps<'svg'>) => {
    return (
      <svg
        {...props}
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24">
        <m.path
          animate={{ pathLength: 1 }}
          d="M5 13l4 4L19 7"
          initial={{ pathLength: 0 }}
          strokeLinecap="round"
          strokeLinejoin="round"
          transition={{
            delay: 0.2,
            type: 'tween',
            ease: 'easeOut',
            duration: 0.3
          }}
        />
      </svg>
    )
  }

  const data: StepperProps = {
    label: `Step ${currentStep + 1} of ${STEPS_COUNT}`,
    stepsCount: STEPS_COUNT,
    currentStep,
    onStepChange: setCurrentStep,
    icon: <CheckIcon className="h-5 w-5 text-(--active-fg-color)" />
  }

  return (
    <div>
      <StepperMinimal {...data} />
    </div>
  )
}

export default Stepper_MinimalUsage
