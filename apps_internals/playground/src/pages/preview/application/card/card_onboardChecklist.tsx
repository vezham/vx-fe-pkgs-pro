import { Icon } from '@iconify/react'
import {
  CardOnboardChecklist,
  cardProps,
  itemProps
} from '@vx-pro/application-card-onboardchecklist'

const card_onboardchecklist = () => {
  const items: itemProps[] = [
    {
      key: 'setup-company',
      icon: 'solar:buildings-linear',
      title: 'Setup your company',
      description: 'Add some details about your company.',
      isCompleted: true
    },
    {
      key: 'add-your-team',
      icon: 'solar:user-plus-linear',
      title: 'Add your team',
      description: 'Invite your team members to your organization.',
      isCompleted: true
    },
    {
      key: 'add-share-holders',
      icon: 'solar:users-group-rounded-linear',
      title: 'Add shareholders',
      description:
        'Add your share holders to your organization and captable so they can view their holdings.',
      isCompleted: true
    },
    {
      key: 'add-valuations',
      icon: 'solar:graph-up-linear',
      title: 'Add valuations',
      description:
        'Add your company valuations to your captable to help track your progress.',
      isCompleted: false
    },
    {
      key: 'create-option-pool',
      icon: 'solar:pie-chart-2-linear',
      title: 'Create option pool',
      description: 'Create an option pool to grant options to your team.',
      isCompleted: false
    },
    {
      key: 'create-send-offer',
      icon: 'solar:plain-outline',
      title: 'Create and send an offer',
      description: 'Create an offer and send it to a potential employee.',
      isCompleted: false
    }
  ]

  const data: cardProps = {
    logo: (
      <Icon
        className="text-white"
        icon="solar:skateboarding-line-duotone"
        width={30}
      />
    ),
    items: items
  }

  return (
    <div>
      <CardOnboardChecklist data={data} />
    </div>
  )
}

export default card_onboardchecklist
