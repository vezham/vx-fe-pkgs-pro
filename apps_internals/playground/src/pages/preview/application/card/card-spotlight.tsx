import { cardProps, CardSpotlight } from '@vx-pro/application-card-spotlight'

const card_spotlight = () => {
  const data: cardProps = {
    title: '  Get started with Acme Planner',
    description:
      ' Outline, monitor, and deliver extensive work elements from inception to completion using project management and strategic roadmaps.'
  }

  return (
    <div>
      <CardSpotlight data={data} />
    </div>
  )
}

export default card_spotlight
