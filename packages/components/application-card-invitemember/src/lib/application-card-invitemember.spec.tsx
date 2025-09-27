import { render } from '@testing-library/react'

import ApplicationCardInvitemember from './application-card-invitemember'

describe('ApplicationCardInvitemember', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApplicationCardInvitemember />)
    expect(baseElement).toBeTruthy()
  })
})
