'use client'

import { Card, CardBody, CardHeader } from '@vx-oss/react'
import React from 'react'

const CellValue = React.forwardRef<HTMLDivElement, CellValueProps>(
  ({ label, value, children, ...props }, ref) => (
    <div
      ref={ref}
      className="flex items-center justify-between py-2"
      {...props}>
      <div className="text-small text-default-500">{label}</div>
      <div className="text-small font-medium">{value || children}</div>
    </div>
  )
)

const CardPersonalDetails = ({ data }: { data: cardProps }) => {
  return (
    <Card className="w-full max-w-lg p-2">
      <CardHeader className="justify-between px-4">
        <div className="flex flex-col items-start">
          <p className="text-large">{data.title}</p>
          <p className="text-small text-default-500">{data.subtitle}</p>
        </div>
        {data.actions}
      </CardHeader>
      <CardBody className="space-y-2 px-6">
        {data.cells.map((cell, index) => (
          <CellValue key={index} label={cell.label} value={cell.value} />
        ))}
      </CardBody>
    </Card>
  )
}

export { CardPersonalDetails }

export type CellValueProps = React.HTMLAttributes<HTMLDivElement> & {
  label: string
  value: React.ReactNode
}

export type cardProps = {
  logo?: React.ReactNode
  title?: string
  subtitle?: string
  cells: CellValueProps[]
  description?: string
  footerText?: string
  actions?: React.ReactNode
  footerActions?: React.ReactNode
  className?: string
  children?: React.ReactNode
}
