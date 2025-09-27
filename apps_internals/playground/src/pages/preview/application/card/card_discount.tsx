import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'
import {
  CardDiscount,
  cardProps,
  listIconProps,
  listLinkProps
} from '@vx-pro/application-card-discountcard'

const card_discount = () => {
  const list: listLinkProps[] = [
    { list: 'Where do I find my affiliate code?' },
    { list: 'How do I become an affiliate?' },
    { list: 'What are the benefits of being an affiliate?' },
    { list: 'Contact Acme Support' }
  ]

  const listIcon: listIconProps[] = [
    {
      list: 'New Acme customer',
      icon: <Icon className="text-default-600" icon="ci:check" width={24} />
    },
    {
      list: 'Fewer than 10 employees',
      icon: <Icon className="text-default-600" icon="ci:check" width={24} />
    },
    {
      list: ' Affiliated with an Acme partner',
      icon: <Icon className="text-default-600" icon="ci:check" width={24} />
    }
  ]

  const data: cardProps = {
    title: 'Get up to',
    linkList: list,
    iconList: listIcon,
    actions: (
      <Button className="mt-1 w-full" type="submit">
        Submit
      </Button>
    )
  }

  return (
    <div>
      {' '}
      <CardDiscount data={data} />{' '}
    </div>
  )
}

export default card_discount
