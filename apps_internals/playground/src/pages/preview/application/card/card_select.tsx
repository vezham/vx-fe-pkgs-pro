import { Icon } from '@iconify/react'
import {
  cardProps,
  CardSelect,
  radioProps
} from '@vx-pro/application-card-select'

const card_select = () => {
  const radio: radioProps[] = [
    {
      description: 'Up to 20 items and 5 projects.',
      icon: (
        <Icon
          className="text-secondary"
          icon="solar:box-minimalistic-linear"
          width={18}
        />
      ),
      label: 'Hobby plan',
      monthlyPrice: 0,
      value: 'hobby'
    },
    {
      description: 'Unlimited items and 20 projects.',
      icon: (
        <Icon
          className="text-secondary"
          icon="solar:box-minimalistic-linear"
          width={18}
        />
      ),
      label: 'Pro plan',
      monthlyPrice: 30,
      value: 'pro'
    },
    {
      description: 'Unlimited items and projects.',
      icon: (
        <Icon
          className="text-secondary"
          icon="solar:box-minimalistic-linear"
          width={18}
        />
      ),
      monthlyPrice: 100,
      label: 'Enterprise plan',
      value: 'enterprise'
    }
  ]

  const data: cardProps = {
    title: ' Select your plan',
    subtitle: '   Find a plan thats right for you and your team.',

    description: '  Selected payment method can be changed at any time.',
    radio: radio
  }

  return (
    <div>
      <CardSelect data={data} />
    </div>
  )
}

export default card_select
