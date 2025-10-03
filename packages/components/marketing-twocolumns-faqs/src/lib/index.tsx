'use client'

import { Icon } from '@iconify/react'
import { Accordion, AccordionItem } from '@vx-oss/react'

const FAQsColumn = ({ data }: { data: faqsProps }) => {
  return (
    <section className="mx-auto w-full max-w-6xl py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-12">
        <h2 className="px-2 text-3xl leading-7">
          <span className="inline-block lg:hidden">{data.title}</span>
          <h2 className="from-foreground-800 to-foreground-500 dark:to-foreground-200 hidden bg-linear-to-br bg-clip-text pt-4 text-5xl font-semibold tracking-tight text-transparent lg:inline-block">
            {data.subtitle1}
            <br />
            {data.subtitle2}
            <br />
            {data.subtitle3}
          </h2>
        </h2>
        <Accordion
          fullWidth
          keepContentMounted
          className="gap-3"
          itemClasses={{
            base: 'px-0 sm:px-6',
            title: 'font-medium',
            trigger: 'py-6 flex-row-reverse',
            content: 'pt-0 pb-6 text-base text-default-500'
          }}
          selectionMode="multiple">
          {data.faqs.map((item, i) => (
            <AccordionItem
              key={i}
              indicator={<Icon icon="lucide:plus" width={24} />}
              title={item.title}>
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export { FAQsColumn }

export type FAQsColumnProps = {
  title: string
  content: string
}

export type faqsProps = {
  title: string
  subtitle1: string
  subtitle2: string
  subtitle3: string
  faqs: FAQsColumnProps[]
  className?: string
  children?: React.ReactNode
}
