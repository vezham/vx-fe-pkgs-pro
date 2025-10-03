import { ComponentProps } from 'react'

import {
  StepperProps,
  StepperVertical
} from '@vx-pro/application-stepper-vertical'
import { m } from 'framer-motion'

const stepper_vertical = () => {
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
    steps: [
      {
        icon: <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />,
        title: 'Create an account',
        description: 'Setting up your foundation'
      },
      {
        icon: <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />,
        title: 'Company Information',
        description: 'Tell us about your business'
      },
      {
        icon: <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />,
        title: 'Choose Address',
        description: 'Select your official location'
      },
      {
        icon: <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />,
        title: 'Payment',
        description: 'Finalize your registration'
      }
    ]
  }

  return (
    <div>
      <StepperVertical {...data} />
    </div>
  )
}

export default stepper_vertical
