'use client'

import { Icon } from '@iconify/react'
import { Avatar, cn, Link } from '@vx-oss/react'
import React from 'react'

export type TeamMemberCardProps = React.HTMLAttributes<HTMLDivElement> &
  TeamMemberProps

const TeamMemberCard = React.forwardRef<HTMLDivElement, TeamMemberCardProps>(
  ({ children, avatar, name, role, bio, social, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-large bg-content1 shadow-small flex flex-col items-center px-4 py-6 text-center',
        className
      )}
      {...props}>
      <Avatar className="h-20 w-20" src={avatar} />
      <h3 className="mt-2 font-medium">{name || children}</h3>
      <span className="text-small text-default-500">{role}</span>
      <p className="text-default-600 mt-2 mb-4">{bio}</p>
      <div className="flex gap-4">
        {social?.twitter && (
          <Link isExternal href="#">
            <Icon className="text-default-400" icon="bi:twitter" width={20} />
          </Link>
        )}
        {social?.linkedin && (
          <Link isExternal href="#">
            <Icon className="text-default-400" icon="bi:linkedin" width={20} />
          </Link>
        )}
        {social?.github && (
          <Link isExternal href="#">
            <Icon className="text-default-400" icon="bi:github" width={20} />
          </Link>
        )}
      </div>
    </div>
  )
)

TeamMemberCard.displayName = 'TeamMemberCard'

export { TeamMemberCard }

export type TeamMemberProps = {
  name: string
  avatar: string
  role: string
  bio?: string
  social: {
    twitter: string
    linkedin: string
    github?: string
  }
  className?: string
  children?: React.ReactNode
}
