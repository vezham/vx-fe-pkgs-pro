'use client'

import {
  StepperSplitted,
  VerticalStepsProps
} from '@vx-pro/application-stepper-verticalsplitted'
import { m } from 'framer-motion'
import { ComponentProps } from 'react'

const StepperVerticalSplitted = () => {
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

  // ✅ all data inside one object
  const data: VerticalStepsProps = {
    steps: [
      {
        icon: <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />,
        title: 'Create an account',
        description:
          'Laying a robust foundation is key to ensuring the stability and growth of any project.'
      },
      {
        icon: <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />,
        title: 'Company Information',
        description:
          'Please describe your business, including its main services and target market.'
      },
      {
        icon: <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />,
        title: 'Choose Address',
        description:
          'Please choose the official address for your business or residence from the list provided'
      },
      {
        icon: <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />,
        title: 'Payment',
        description:
          'Complete the registration process to finalize your account setup.'
      }
    ],
    hideProgressBars: true,
    className: 'max-w-sm',
    defaultStep: 1,
    stepClassName:
      'border border-default-200 dark:border-default-50 aria-[current]:bg-default-100 dark:aria-[current]:bg-default-50'
  }

  return (
    <div>
      <StepperSplitted {...data} />
    </div>
  )
}

export default StepperVerticalSplitted
