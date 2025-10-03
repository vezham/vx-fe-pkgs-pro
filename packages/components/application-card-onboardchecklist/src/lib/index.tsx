'use client'

import { Icon } from '@iconify/react'
import {
  Card,
  CardBody,
  CardHeader,
  Listbox,
  ListboxItem,
  Progress
} from '@vx-oss/react'

const CardOnboardChecklist = ({ data }: { data: cardProps }) => {
  return (
    <Card className="max-w-[520px] py-1 md:py-4">
      <CardHeader className="flex items-center gap-3 px-5 pt-3 pb-0 md:px-10 md:pt-5">
        <div className="from-secondary-300 to-primary-500 flex h-14 w-14 flex-none items-center justify-center rounded-full bg-linear-to-br">
          {data.logo}
        </div>
        <Progress
          showValueLabel
          classNames={{
            label: 'font-medium',
            indicator: 'bg-linear-to-r from-primary-400 to-secondary-500',
            value: 'text-foreground/60'
          }}
          label="Onboarding"
          value={50}
        />
      </CardHeader>
      <CardBody className="px-2 pt-3 sm:px-3 md:px-6">
        <Listbox
          hideSelectedIcon
          aria-label="Onboarding checklist"
          items={data.items}
          variant="flat"
          onAction={selectedKey => alert(selectedKey)}>
          {item => (
            <ListboxItem
              key={item.key}
              classNames={{
                base: 'w-full px-2 md:px-4 min-h-[70px] gap-3',
                title: 'text-medium font-medium',
                description: 'text-small text-wrap'
              }}
              description={
                <p className="text-default-500">{item.description}</p>
              }
              endContent={
                <div className="flex flex-none">
                  {item.isCompleted ? (
                    <Icon
                      className="text-secondary"
                      icon="solar:check-circle-bold"
                      width={30}
                    />
                  ) : (
                    <Icon
                      className="text-default-400"
                      icon="solar:round-alt-arrow-right-bold"
                      width={30}
                    />
                  )}
                </div>
              }
              startContent={
                <div className="item-center rounded-medium border-divider flex border p-2">
                  <Icon
                    className="text-secondary"
                    icon={item.icon}
                    width={24}
                  />
                </div>
              }
              title={item.title}
            />
          )}
        </Listbox>
      </CardBody>
    </Card>
  )
}

export { CardOnboardChecklist }

export type itemProps = {
  key: string
  icon: string
  title: string
  description: string
  isCompleted: boolean
}

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  items?: itemProps[]
  subtitle?: string
  description?: string
  footerText?: string
  actions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
