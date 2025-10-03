'use client'

import { Icon } from '@iconify/react'
import { useControlledState } from '@react-stately/utils'
import {
  Avatar,
  AvatarGroup,
  Button,
  cn,
  Progress,
  Spacer
} from '@vx-oss/react'
import {
  StepperProps,
  StepperSplittedHelpers,
  SupportCardProps
} from '@vx-pro/application-stepper-verticalsplitted-helpers'
import { domAnimation, LazyMotion, m } from 'framer-motion'
import React, { ComponentProps, useState } from 'react'

const StepperVerticalSplittedHelpers = () => {
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

  const VerticalSteps = React.forwardRef<HTMLButtonElement, StepperProps>(
    (
      {
        color = 'primary',
        steps = [],
        defaultStep = 0,
        onStepChange,
        currentStep: currentStepProp,
        hideProgressBars = false,
        stepClassName,
        className,
        ...props
      },
      ref
    ) => {
      const [controlledStep, setControlledStep] = useControlledState(
        currentStepProp,
        defaultStep,
        onStepChange
      )

      const colors = React.useMemo(() => {
        let userColor
        let fgColor

        const colorsVars = [
          '[--active-fg-color:var(--step-fg-color)]',
          '[--active-border-color:var(--step-color)]',
          '[--active-color:var(--step-color)]',
          '[--complete-background-color:var(--step-color)]',
          '[--complete-border-color:var(--step-color)]',
          '[--inactive-border-color:hsl(var(--heroui-default-300))]',
          '[--inactive-color:hsl(var(--heroui-default-300))]'
        ]

        switch (color) {
          case 'primary':
            userColor = '[--step-color:hsl(var(--heroui-primary))]'
            fgColor = '[--step-fg-color:hsl(var(--heroui-primary-foreground))]'
            break
          case 'secondary':
            userColor = '[--step-color:hsl(var(--heroui-secondary))]'
            fgColor =
              '[--step-fg-color:hsl(var(--heroui-secondary-foreground))]'
            break
          case 'success':
            userColor = '[--step-color:hsl(var(--heroui-success))]'
            fgColor = '[--step-fg-color:hsl(var(--heroui-success-foreground))]'
            break
          case 'warning':
            userColor = '[--step-color:hsl(var(--heroui-warning))]'
            fgColor = '[--step-fg-color:hsl(var(--heroui-warning-foreground))]'
            break
          case 'danger':
            userColor = '[--step-color:hsl(var(--heroui-error))]'
            fgColor = '[--step-fg-color:hsl(var(--heroui-error-foreground))]'
            break
          case 'default':
            userColor = '[--step-color:hsl(var(--heroui-default))]'
            fgColor = '[--step-fg-color:hsl(var(--heroui-default-foreground))]'
            break
          default:
            userColor = '[--step-color:hsl(var(--heroui-primary))]'
            fgColor = '[--step-fg-color:hsl(var(--heroui-primary-foreground))]'
            break
        }

        if (!className?.includes('--step-fg-color')) colorsVars.unshift(fgColor)
        if (!className?.includes('--step-color')) colorsVars.unshift(userColor)
        if (!className?.includes('--inactive-bar-color'))
          colorsVars.push(
            '[--inactive-bar-color:hsl(var(--heroui-default-300))]'
          )

        return colorsVars
      }, [color, className])

      return (
        <nav aria-label="Progress" className="max-w-fit">
          <ol className={cn('flex flex-col gap-y-3', colors, className)}>
            {steps?.map((step, stepIdx) => {
              const status =
                controlledStep === stepIdx
                  ? 'active'
                  : controlledStep < stepIdx
                    ? 'inactive'
                    : 'complete'

              return (
                <li key={stepIdx} className="relative">
                  <div className="flex w-full max-w-full items-center">
                    <button
                      key={stepIdx}
                      ref={ref}
                      aria-current={status === 'active' ? 'step' : undefined}
                      className={cn(
                        'group rounded-large flex w-full cursor-pointer items-center justify-center gap-4 px-3 py-2.5',
                        stepClassName
                      )}
                      onClick={() => setControlledStep(stepIdx)}
                      {...props}>
                      <div className="flex h-full items-center">
                        <LazyMotion features={domAnimation}>
                          <div className="relative">
                            <m.div
                              animate={status}
                              className={cn(
                                'border-medium text-large text-default-foreground relative flex h-[34px] w-[34px] items-center justify-center rounded-full font-semibold',
                                {
                                  'shadow-lg': status === 'complete'
                                }
                              )}
                              data-status={status}
                              initial={false}
                              transition={{ duration: 0.25 }}
                              variants={{
                                inactive: {
                                  backgroundColor: 'transparent',
                                  borderColor: 'var(--inactive-border-color)',
                                  color: 'var(--inactive-color)'
                                },
                                active: {
                                  backgroundColor: 'transparent',
                                  borderColor: 'var(--active-border-color)',
                                  color: 'var(--active-color)'
                                },
                                complete: {
                                  backgroundColor:
                                    'var(--complete-background-color)',
                                  borderColor: 'var(--complete-border-color)'
                                }
                              }}>
                              <div className="flex items-center justify-center">
                                {status === 'complete' ? (
                                  <CheckIcon className="h-6 w-6 text-(--active-fg-color)" />
                                ) : (
                                  <span>{stepIdx + 1}</span>
                                )}
                              </div>
                            </m.div>
                          </div>
                        </LazyMotion>
                      </div>
                      <div className="flex-1 text-left">
                        <div>
                          <div
                            className={cn(
                              'text-medium text-default-foreground font-medium transition-[color,opacity] duration-300 group-active:opacity-70',
                              {
                                'text-default-500': status === 'inactive'
                              }
                            )}>
                            {step.title}
                          </div>
                          <div
                            className={cn(
                              'text-tiny text-default-600 lg:text-small transition-[color,opacity] duration-300 group-active:opacity-70',
                              {
                                'text-default-500': status === 'inactive'
                              }
                            )}>
                            {step.description}
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                </li>
              )
            })}
          </ol>
        </nav>
      )
    }
  )

  const SupportCard = React.forwardRef<HTMLDivElement, SupportCardProps>(
    ({ className, ...props }, ref) => (
      <div
        {...props}
        ref={ref}
        className={cn(
          'align-center rounded-large bg-content1 shadow-small my-2 flex shrink-0 items-center justify-center gap-3 self-stretch px-3 py-3',
          className
        )}>
        <AvatarGroup isBordered size="sm">
          <Avatar
            classNames={{
              base: 'ring-0 ring-offset-1 w-[25px] h-[25px]'
            }}
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/d958cf406bb83c3c0a93e2f03fcb0bef.jpg"
          />
          <Avatar
            classNames={{
              base: 'ring-0 ring-offset-1 w-[25px] h-[25px]'
            }}
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/3a906b3de8eaa53e14582edf5c918b5d.jpg"
          />
          <Avatar
            classNames={{
              base: 'ring-0 ring-offset-1 w-[25px] h-[25px]'
            }}
            src="https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatars/f4d075c1fa8155478e5bb26aaae69fc1.jpg"
          />
        </AvatarGroup>
        <div className="text-tiny text-default-700 line-clamp-2 text-left font-medium">
          We’re here to answer your questions.
        </div>
        <Button
          isIconOnly
          className="align-center bg-default-100 flex h-[32px] w-[31px] justify-center rounded-[12px] dark:bg-[#27272A]/40"
          size="sm"
          variant="flat">
          <Icon
            className="text-default-400 dark:text-foreground [&>g>path:nth-child(1)]:stroke-[3px] [&>g>path:nth-child(2)]:stroke-[2.5px]"
            icon="solar:chat-round-dots-linear"
            width={20}
          />
        </Button>
      </div>
    )
  )

  const steps = [
    {
      title: 'Create an account',
      description:
        'Laying a robust foundation is key to ensuring the stability and growth of any project.'
    },
    {
      title: 'Company Information',
      description:
        'Please describe your business, including its main services and target market.'
    },
    {
      title: 'Choose Address',
      description:
        'Please choose the official address for your business or residence from the list provided'
    },
    {
      title: 'Payment',
      description:
        'Complete the registration process to finalize your account setup.'
    }
  ]

  const data: StepperProps = {
    heading: 'Getting Started',
    subHead:
      'Follow the steps to configure your account. This allows you to set up your business address.',
    headerActions: (
      <Progress
        classNames={{
          base: 'px-0.5 mb-5',
          label: 'text-small',
          value: 'text-small text-default-400'
        }}
        label="Steps"
        maxValue={steps.length}
        minValue={0}
        showValueLabel
        size="md"
        value={currentStep}
        valueLabel={`${currentStep + 1} of ${steps.length}`}
      />
    ),
    mainContent: (
      <VerticalSteps
        hideProgressBars
        currentStep={currentStep}
        stepClassName="border border-default-200 dark:border-default-50 aria-[current]:bg-default-100 dark:aria-[current]:bg-default-50"
        steps={steps}
        onStepChange={setCurrentStep}
      />
    ),
    footerCard: (
      <>
        <Spacer y={4} />
        <SupportCard className="border-default-200 bg-default-50! dark:border-default-100 dark:bg-default-50/50! m-0! border px-2 shadow-none" />
      </>
    )
  }

  return (
    <div>
      <StepperSplittedHelpers data={data} />
    </div>
  )
}

export default StepperVerticalSplittedHelpers
