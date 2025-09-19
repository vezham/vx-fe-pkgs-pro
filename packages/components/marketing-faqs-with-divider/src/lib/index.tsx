'use client'

import { Icon } from '@iconify/react'
import { Accordion, AccordionItem } from '@vx-oss/react'
import React from 'react'

const FAQsDivider = ({
  data,
  actions
}: {
  data: FAQsDividerProps[]
  actions?: React.ReactNode
}) => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:py-32 md:px-6 lg:px-8 lg:py-40">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8">
        <h2 className="from-foreground to-foreground-600 w-full max-w-3xl bg-linear-to-br bg-clip-text px-2 text-center text-3xl leading-7 font-bold tracking-tight text-transparent md:text-5xl">
          <span className="inline-block md:hidden">Acme&apos;s FAQs</span>
          <span className="hidden md:inline-block">
            Acme&apos;s Frequently asked questions
          </span>
        </h2>

        {/* Common actions section */}
        {actions && <div>{actions}</div>}

        <Accordion
          fullWidth
          keepContentMounted
          itemClasses={{
            base: 'px-0 md:px-2 md:px-6',
            title: 'font-medium',
            trigger: 'py-6 flex-row-reverse',
            content: 'pt-0 pb-6 text-base text-default-500',
            indicator: 'rotate-0 data-[open=true]:-rotate-45'
          }}
          selectionMode="multiple">
          {data.map((item, i) => (
            <AccordionItem
              key={i}
              indicator={
                <Icon
                  className="text-secondary"
                  icon="lucide:plus"
                  width={24}
                />
              }
              title={item.title}>
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export { FAQsDivider }

export type FAQsDividerProps = {
  title: string
  content: string
}
