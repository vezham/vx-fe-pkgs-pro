import { Avatar, Button } from '@vx-oss/react'
import {
  CardPersonalDetails,
  cardProps,
  CellValueProps
} from '@vx-pro/application-card-personaldetails'

const card_personaldetails = () => {
  const cells: CellValueProps[] = [
    {
      value: 'John Doe',
      label: 'Full Name'
    },
    {
      value: ' January 1, 2000',
      label: 'Birthday'
    },
    {
      value: (
        <div className="flex gap-2">
          <p>United Kingdom</p>
          <Avatar
            alt="United Kingdom"
            className="h-6 w-6"
            src="https://flagcdn.com/gb.svg"
          />
        </div>
      ),
      label: 'Country'
    },
    {
      value: 'London',
      label: 'State'
    },
    {
      value: '124 Street',
      label: 'Address'
    },
    {
      value: '123456',
      label: 'Zip Code'
    },
    {
      value: '+1 123 456 7890',
      label: 'Phone Number'
    },
    {
      value: 'john.doe@mail.com',
      label: 'Email'
    },
    {
      value: '1234567890',
      label: 'Passport / ID'
    },
    {
      value: '11234567890',
      label: 'SSN'
    },
    {
      value: 'Citizen',
      label: 'Legal status'
    },
    {
      value: 'Software Engineer',
      label: 'Role'
    }
  ]

  const data: cardProps = {
    title: 'Personal Details',
    subtitle: ' Manage your personal details',
    cells: cells,
    actions: <Button color="primary">Edit</Button>
  }

  return (
    <div>
      <CardPersonalDetails data={data} />
    </div>
  )
}

export default card_personaldetails
