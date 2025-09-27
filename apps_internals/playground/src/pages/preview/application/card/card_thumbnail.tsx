import { Button } from '@vx-oss/react'
import { cardProps, CardThumbnail } from '@vx-pro/application-card-thumbnail'

const card_thumbnail = () => {
  const data: cardProps = {
    title: 'Card with thumbnail',
    subtitle: 'This is a card with a thumbnail image on top.',
    actions: (
      <>
        <Button fullWidth variant="light">
          Cancel
        </Button>
        <Button fullWidth>Continue</Button>
      </>
    )
  }

  return (
    <div>
      {' '}
      <CardThumbnail data={data} />{' '}
    </div>
  )
}

export default card_thumbnail
