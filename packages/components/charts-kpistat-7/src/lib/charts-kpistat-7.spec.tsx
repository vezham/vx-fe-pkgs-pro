import { render } from '@testing-library/react'

import ChartsKpistat7 from './charts-kpistat-7'

describe('ChartsKpistat7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChartsKpistat7 />)
    expect(baseElement).toBeTruthy()
  })
})
