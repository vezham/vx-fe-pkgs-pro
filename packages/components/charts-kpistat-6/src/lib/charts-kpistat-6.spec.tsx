import { render } from '@testing-library/react'

import ChartsKpistat6 from './charts-kpistat-6'

describe('ChartsKpistat6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChartsKpistat6 />)
    expect(baseElement).toBeTruthy()
  })
})
