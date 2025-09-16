import { render } from '@testing-library/react'

import ChartsCircle2 from './charts-circle-2'

describe('ChartsCircle2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChartsCircle2 />)
    expect(baseElement).toBeTruthy()
  })
})
