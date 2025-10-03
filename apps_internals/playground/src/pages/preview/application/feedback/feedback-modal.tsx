import { Icon } from '@iconify/react'
import {
  Button,
  cn,
  Link,
  RadioGroup,
  RadioGroupProps,
  Textarea,
  useRadio,
  useRadioGroupContext,
  VisuallyHidden
} from '@vx-oss/react'
import {
  FeedBackModal,
  FeedBackProps,
  FeedbackRatingItemProps,
  RatingValueEnum
} from '@vx-pro/application-feedback-modal'
import React from 'react'

const FeedBackModalWrapper = () => {
  const FeedbackRatingItem = React.forwardRef<
    HTMLInputElement,
    FeedbackRatingItemProps
  >((props, ref) => {
    const {
      Component,
      isSelected: isSelfSelected,
      isFocusVisible,
      getBaseProps,
      getInputProps
    } = useRadio(props)

    const groupContext = useRadioGroupContext()

    const isSelected =
      isSelfSelected ||
      Number(groupContext.groupState.selectedValue) >= Number(props.value)
    const isReadOnly = groupContext.groupState.isReadOnly
    const size = props.size || groupContext.size || 'md'

    const iconSize = React.useMemo(() => {
      switch (size) {
        case 'sm':
          return 16
        case 'md':
          return 20
        case 'lg':
          return 24
      }
    }, [size])

    const iconData = React.useMemo(() => {
      switch (props.value) {
        case RatingValueEnum.BAD:
          return {
            icon: 'fluent-mdl2:emoji-disappointed',
            color: 'text-danger'
          }
        case RatingValueEnum.NEUTRAL:
          return {
            icon: 'fluent-mdl2:emoji-neutral',
            color: 'text-foreground'
          }
        case RatingValueEnum.GOOD:
          return {
            icon: 'fluent-mdl2:emoji-2',
            color: 'text-primary'
          }
        case RatingValueEnum.GREAT:
          return {
            icon: 'fluent-mdl2:emoji',
            color: 'text-success'
          }
      }
    }, [props.value])

    const baseProps = getBaseProps()

    return (
      <Component
        {...baseProps}
        ref={ref}
        className={cn(baseProps?.['className'], {
          'cursor-default': isReadOnly
        })}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <Icon
          className={cn(
            'transition-transform-colors pointer-events-none',
            isSelected
              ? iconData.color
              : 'text-default-400 dark:text-default-300',
            {
              'ring-focus ring-offset-content1 ring-2 ring-offset-2':
                isFocusVisible,
              'group-data-[pressed=true]:scale-90': !isReadOnly
            }
          )}
          icon={iconData.icon}
          width={iconSize}
        />
      </Component>
    )
  })

  const rateValues: RatingValueEnum[] = [
    RatingValueEnum.BAD,
    RatingValueEnum.NEUTRAL,
    RatingValueEnum.GOOD,
    RatingValueEnum.GREAT
  ]

  const FeedBackRating = ({ classNames, ...props }: RadioGroupProps) => {
    const [value, setValue] = React.useState<RatingValueEnum | string>(
      RatingValueEnum.GOOD
    )

    return (
      <RadioGroup
        value={value}
        {...props}
        classNames={{
          ...classNames,
          base: cn(classNames?.base, 'max-w-fit'),
          wrapper: cn(classNames?.wrapper, 'gap-3')
        }}
        defaultValue="1"
        orientation="horizontal"
        size="lg"
        onValueChange={setValue}>
        {rateValues.map(value => (
          <FeedbackRatingItem key={value} value={value} />
        ))}
      </RadioGroup>
    )
  }

  const data: FeedBackProps = {
    heading: 'Give Feedback',
    modalTitle: 'Help us improve Acme.',
    modalDescription:
      ' We value your feedback. If you have any ideas or suggestions to improve our product, let us know.',
    textarea: (
      <Textarea
        aria-label="Feedback"
        minRows={8}
        name="feedback"
        placeholder="Ideas or suggestions to improve our product"
        variant="faded"
      />
    ),
    link: (
      <Link
        className="text-tiny text-default-500"
        color="foreground"
        href="https://guides.github.com/features/mastering-markdown/"
        rel="noreferrer"
        target="_blank">
        Markdown
        <Icon
          className="[&>path]:stroke-[2px]"
          icon="solar:arrow-right-up-linear"
        />
      </Link>
    ),
    icon: (
      <Icon
        className="text-default-400 dark:text-default-300"
        icon="la:markdown"
        width={20}
      />
    ),
    content: <FeedBackRating />,
    actions: onClose => (
      <>
        <Button color="danger" type="button" variant="flat" onPress={onClose}>
          Cancel
        </Button>
        <Button color="primary" type="submit">
          Submit
        </Button>
      </>
    )
  }
  return (
    <div>
      <FeedBackModal data={data} />
    </div>
  )
}

export default FeedBackModalWrapper
