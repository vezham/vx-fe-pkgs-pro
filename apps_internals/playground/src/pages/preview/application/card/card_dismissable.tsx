import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'
import {
  CardDismissable,
  cardProps
} from '@vx-pro/application-card-dismissablecard'

const card_dismissable = () => {
  const data: cardProps = {
    title: 'Become an Acme Creator!',
    description:
      ' Visit creators.acme.com to sign up today and start earning credits from your fans and followers.',
    actions: (
      <Button
        isIconOnly
        className="absolute top-2 right-2 z-20"
        radius="full"
        size="sm"
        variant="light">
        <Icon
          className="text-default-400"
          icon="iconamoon:close-thin"
          width={24}
        />
      </Button>
    ),
    footerText: 'Acme supports YouTube, Twitch, Vimeo and more!'
  }

  return (
    <div>
      {' '}
      <CardDismissable data={data} />{' '}
    </div>
  )
}

export default card_dismissable
