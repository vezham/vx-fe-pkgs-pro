import { render } from '@testing-library/react'

import Abc from './abc'

describe('Abc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Abc />)
    expect(baseElement).toBeTruthy()
  })
})
