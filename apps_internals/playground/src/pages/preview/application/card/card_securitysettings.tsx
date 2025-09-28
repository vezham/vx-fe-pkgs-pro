import { Icon } from '@iconify/react'
import { Button } from '@vx-oss/react'
import {
  cardProps,
  CardSecuritySettings,
  CellProps,
  switchtoggleProps
} from '@vx-pro/application-card-security-settings'

const card_securitysettings = () => {
  const toggle: switchtoggleProps[] = [
    {
      description: 'Add an extra layer of security to your account.',
      label: 'Two-Factor Authentication',
      defaultselected: true
    },
    {
      description: 'Require additional information to reset your password.',
      label: 'Password Reset Protection'
    },
    {
      description: 'Require a pin to access your account.',
      label: 'Require Pin',
      defaultselected: true
    }
  ]

  const headerCells: CellProps[] = [
    {
      heading: 'Email Address',
      subheading: ' The email address associated with your account.',
      description: 'john.doe@mail.com',
      text: 'Verified',
      action: (
        <Button
          endContent={<Icon icon="solar:pen-2-linear" />}
          radius="full"
          variant="bordered">
          Edit
        </Button>
      )
    },
    {
      heading: 'Password',
      subheading: '  Set a unique password to protect your account.',
      action: (
        <Button radius="full" variant="bordered">
          Change
        </Button>
      )
    }
  ]

  const footerCells: CellProps[] = [
    {
      heading: 'Deactivate Account',
      subheading: '   Deactivate your account and delete all your data.',

      action: (
        <Button radius="full" variant="bordered">
          Deactivate
        </Button>
      )
    },
    {
      heading: 'Delete Account',
      subheading: '   Delete your account and delete all your data.',

      action: (
        <Button color="danger" radius="full" variant="flat">
          Delete
        </Button>
      )
    }
  ]

  const data: cardProps = {
    title: 'Security Settings',
    subtitle: '  Manage your security preferences',
    toggle: toggle,
    header: headerCells,
    footer: footerCells
  }

  return (
    <div>
      <CardSecuritySettings data={data} />
    </div>
  )
}

export default card_securitysettings
