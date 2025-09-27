import { render } from '@testing-library/react'

import ApplicationCardNotifications from './application-card-notifications'

describe('ApplicationCardNotifications', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApplicationCardNotifications />)
    expect(baseElement).toBeTruthy()
  })
})
