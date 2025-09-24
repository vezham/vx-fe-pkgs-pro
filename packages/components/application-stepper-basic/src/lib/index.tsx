'use client'

import type { ButtonProps } from '@vx-oss/react'

import { useControlledState } from '@react-stately/utils'
import { cn } from '@vx-oss/react'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import React from 'react'

const StepperBasic = React.forwardRef<HTMLButtonElement, HorizontalStepsProps>(
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
    const [currentStep, setCurrentStep] = useControlledState(
      currentStepProp,
      defaultStep,
      onStepChange
    )

    const colors = React.useMemo(() => {
      let userColor
      let fgColor

      const colorsVars = [
        '[--active-fg-color:hsl(var(--step-fg-color))]',
        '[--active-border-color:hsl(var(--step-color))]',
        '[--active-color:hsl(var(--step-color))]',
        '[--complete-background-color:hsl(var(--step-color))]',
        '[--complete-border-color:hsl(var(--step-color))]',
        '[--inactive-border-color:hsl(var(--heroui-default-300))]',
        '[--inactive-color:hsl(var(--heroui-default-300))]'
      ]

      switch (color) {
        case 'primary':
          userColor = '[--step-color:var(--heroui-primary)]'
          fgColor = '[--step-fg-color:var(--heroui-primary-foreground)]'
          break
        case 'secondary':
          userColor = '[--step-color:var(--heroui-secondary)]'
          fgColor = '[--step-fg-color:var(--heroui-secondary-foreground)]'
          break
        case 'success':
          userColor = '[--step-color:var(--heroui-success)]'
          fgColor = '[--step-fg-color:var(--heroui-success-foreground)]'
          break
        case 'warning':
          userColor = '[--step-color:var(--heroui-warning)]'
          fgColor = '[--step-fg-color:var(--heroui-warning-foreground)]'
          break
        case 'danger':
          userColor = '[--step-color:var(--heroui-error)]'
          fgColor = '[--step-fg-color:var(--heroui-error-foreground)]'
          break
        case 'default':
          userColor = '[--step-color:var(--heroui-default)]'
          fgColor = '[--step-fg-color:var(--heroui-default-foreground)]'
          break
        default:
          userColor = '[--step-color:var(--heroui-primary)]'
          fgColor = '[--step-fg-color:var(--heroui-primary-foreground)]'
          break
      }

      colorsVars.unshift(fgColor)
      colorsVars.unshift(userColor)

      return colorsVars
    }, [color])

    return (
      <nav aria-label="Progress" className="max-w-fit overflow-x-auto">
        <ol className={cn('flex flex-row flex-nowrap', colors, className)}>
          {steps?.map((step, stepIdx) => {
            const status =
              currentStep === stepIdx
                ? 'active'
                : currentStep < stepIdx
                  ? 'inactive'
                  : 'complete'

            return (
              <li
                key={stepIdx}
                className="relative flex w-full max-w-[120px] items-center">
                <button
                  key={stepIdx}
                  ref={ref}
                  aria-current={status === 'active' ? 'step' : undefined}
                  className={cn(
                    'group rounded-large flex w-full cursor-pointer flex-col items-center justify-center gap-y-2 py-2.5',
                    stepClassName
                  )}
                  onClick={() => setCurrentStep(stepIdx)}
                  {...props}>
                  <div className="h-ful relative flex items-center">
                    <LazyMotion features={domAnimation}>
                      <m.div animate={status} className="relative">
                        <m.div
                          className={cn(
                            'border-medium text-large text-default-foreground relative flex h-[34px] w-[34px] items-center justify-center rounded-full font-semibold',
                            {
                              'shadow-lg': status === 'complete'
                            }
                          )}
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
                              step.icon
                            ) : (
                              <span>{stepIdx + 1}</span>
                            )}
                          </div>
                        </m.div>
                      </m.div>
                    </LazyMotion>
                    {stepIdx < steps.length - 1 && !hideProgressBars && (
                      <div
                        aria-hidden="true"
                        className={cn(
                          'pointer-events-none absolute top-1/2 left-6 flex w-8 translate-x-1/2 -translate-y-1/2 items-center sm:w-12'
                        )}
                        style={{
                          // @ts-ignore
                          '--idx': stepIdx
                        }}>
                        <div
                          className={cn(
                            'bg-default-200 relative h-0.5 w-full transition-colors duration-300',
                            "after:absolute after:block after:h-full after:w-0 after:bg-(--active-border-color) after:transition-[width] after:duration-300 after:content-['']",
                            {
                              'after:w-full': stepIdx < currentStep
                            }
                          )}
                        />
                      </div>
                    )}
                  </div>
                  <div className="max-w-[100px] flex-1 px-2 text-center lg:max-w-[120px]">
                    <div
                      className={cn(
                        'text-small text-default-foreground lg:text-medium line-clamp-2 font-medium transition-[color,opacity] duration-300 group-active:opacity-80',
                        {
                          'text-default-500': status === 'inactive'
                        }
                      )}>
                      {step.title}
                    </div>
                  </div>
                </button>
              </li>
            )
          })}
        </ol>
      </nav>
    )
  }
)

export { StepperBasic }

export type HorizontalStepProps = {
  icon?: React.ReactNode
  title?: React.ReactNode
  className?: string
}

export interface HorizontalStepsProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  steps?: HorizontalStepProps[]

  color?: ButtonProps['color']
  currentStep?: number
  defaultStep?: number
  hideProgressBars?: boolean
  className?: string
  stepClassName?: string
  onStepChange?: (stepIndex: number) => void
}
