import { tv, type VariantProps } from '@vx-oss/react'

export const chart = tv({
  slots: {
    card: 'shadow-none',
    iconWrapper: 'rounded-small p-2',
    trendIconWrapper: 'mt-2 flex items-center gap-x-1 text-xs font-medium'
  },
  variants: {
    color: {
      default: {
        card: 'bg-default-50',
        iconWrapper: 'bg-default-200/50 text-default-700',
        trendIconWrapper: 'text-default-700'
      },
      primary: {
        card: 'bg-primary-50',
        iconWrapper: 'bg-primary-100 dark:bg-primary-100/50 text-primary',
        trendIconWrapper: 'text-primary'
      },
      secondary: {
        card: 'bg-secondary-50',
        iconWrapper: 'bg-secondary-100 dark:bg-secondary-100/50 text-secondary',
        trendIconWrapper: 'text-secondary'
      },
      success: {
        card: 'bg-success-50',
        iconWrapper: 'bg-success-100 dark:bg-success-100/50 text-success',
        trendIconWrapper: 'text-success'
      },
      warning: {
        card: 'bg-warning-50',
        iconWrapper: 'bg-warning-100 dark:bg-warning-100/50 text-warning',
        trendIconWrapper: 'text-warning'
      },
      danger: {
        card: 'bg-danger-50',
        iconWrapper: 'bg-danger-100 dark:bg-danger-100/50 text-danger',
        trendIconWrapper: 'text-danger'
      }
    }
  },
  defaultVariants: {
    color: 'default'
  }
})

export type ChartVariants = VariantProps<typeof chart>
