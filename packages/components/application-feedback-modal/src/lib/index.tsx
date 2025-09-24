'use client'

import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure
} from '@vx-oss/react'

import type { RadioProps } from '@vx-oss/react'

const FeedBackModal = ({ data }: { data: FeedBackModalProps }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <section className="mx-auto flex w-full max-w-6xl items-center justify-center px-6 py-20 sm:py-32 lg:px-8 lg:py-40">
      <Button variant="bordered" onPress={onOpen}>
        {data.heading}
      </Button>
      <Modal
        isOpen={isOpen}
        shouldBlockScroll={false}
        onOpenChange={onOpenChange}>
        <ModalContent>
          {onClose => (
            <ModalBody>
              <ModalHeader className="flex-col items-center gap-1 px-0 text-center">
                <h1 className="text-xl">{data.modalTitle}</h1>
                <p className="text-small text-default-500 font-normal">
                  {data.modalDescription}
                </p>
              </ModalHeader>
              <form
                className="flex w-full flex-col gap-2"
                onSubmit={e => {
                  e.preventDefault()
                  onClose()
                }}>
                {data.textarea}
                <div className="mt-1 flex w-full items-center justify-end gap-2 px-1">
                  {data.icon}
                  <p className="text-tiny text-default-400 dark:text-default-300">
                    {data.link}
                    &nbsp;supported.
                  </p>
                </div>
                <Divider className="my-2" />
                <div className="flex w-full items-center justify-between pb-4">
                  {data.content}
                  <div className="flex gap-2">
                    {typeof data.actions === 'function'
                      ? data.actions(onClose)
                      : data.actions}
                  </div>
                </div>
              </form>
            </ModalBody>
          )}
        </ModalContent>
      </Modal>
    </section>
  )
}

export { FeedBackModal }
export enum RatingValueEnum {
  BAD = 'bad',
  NEUTRAL = 'neutral',
  GOOD = 'good',
  GREAT = 'great'
}

export type FeedbackRatingItemProps = Omit<RadioProps, 'value'> & {
  value: RatingValueEnum
}

export type FeedBackModalProps = {
  heading: string
  modalTitle: string
  modalDescription: string
  textarea?: React.ReactNode
  link?: React.ReactNode
  icon?: React.ReactNode
  content?: React.ReactNode
  actions?: React.ReactNode | ((onClose: () => void) => React.ReactNode)
}
