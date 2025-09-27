import { Button } from '@vx-oss/react'
import { CardFieldset, cardProps } from '@vx-pro/application-card-cardfieldset'

const card_fieldset = () => {
  const data: cardProps = {
    title: 'Organization Name',
    subtitle: '  This is your organization visible name to the public.',
    actions: (
      <>
        <Button type="reset" variant="bordered">
          Cancel
        </Button>
        <Button color="primary" type="submit">
          Save Changes
        </Button>
      </>
    ),
    footerText: 'Max. 50 characters.'
  }

  return (
    <div>
      <CardFieldset data={data} />
    </div>
  )
}

export default card_fieldset
