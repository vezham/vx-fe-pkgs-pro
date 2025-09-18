import { render } from '@testing-library/react'

import ChartsKpistat9 from './charts-kpistat-9'

describe('ChartsKpistat9', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChartsKpistat9 />)
    expect(baseElement).toBeTruthy()
  })
})
