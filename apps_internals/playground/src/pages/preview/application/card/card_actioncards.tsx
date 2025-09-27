import {
  ActionCardProps,
  CardActioncards
} from '@vx-pro/application-card-actioncards'

const card_actioncards = () => {
  const cards: ActionCardProps[] = [
    {
      description: 'Create a new Direct Employee Agreement template.',
      icon: 'solar:document-medicine-linear',
      title: 'Create a new agreement',
      onPress: () => {
        console.log('Create a new agreement')
      }
    },
    {
      description: 'Edit the Direct Employee Agreement template.',
      icon: 'solar:document-add-linear',
      title: 'Edit agreement',
      onPress: () => {
        console.log('Edit agreement')
      }
    },
    {
      description: 'Verify your identity to access all features.',
      icon: 'solar:shield-check-linear',
      title: 'Verify identity',
      onPress: () => {
        console.log('Verify identity')
      }
    },
    {
      description: 'Add a new payment method to your account.',
      icon: 'solar:card-linear',
      title: 'Add payment method',
      onPress: () => {
        console.log('Add payment method')
      }
    },
    {
      color: 'warning',
      description: 'Deactivate the employee agreement.',
      icon: 'solar:user-block-rounded-linear',
      title: 'Set to inactive',
      onPress: () => {
        console.log('Set to inactive')
      }
    },
    {
      color: 'danger',
      description: 'Delete the employee agreement.',
      icon: 'solar:trash-bin-minimalistic-linear',
      title: 'Delete agreement',
      onPress: () => {
        console.log('Delete agreement')
      }
    }
  ]

  return (
    <div>
      {' '}
      <CardActioncards data={cards} />{' '}
    </div>
  )
}

export default card_actioncards
