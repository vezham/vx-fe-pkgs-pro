'use client'

import { StepperBasic, StepperProps } from '@vx-pro/application-stepper-basic'
import { m } from 'framer-motion'
import { ComponentProps } from 'react'

const stepper_basic = () => {
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
    defaultStep: 2,
    steps: [
      {
        icon: <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />,
        title: 'Create account'
      },
      {
        icon: <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />,
        title: 'Company Information'
      },
      {
        icon: <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />,
        title: 'Choose Address'
      },
      {
        icon: <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />,
        title: 'Complete Payment'
      },
      {
        icon: <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />,
        title: 'Preview and Confirm'
      }
    ]
  }

  return (
    <div>
      <StepperBasic {...data} />
    </div>
  )
}

export default stepper_basic
