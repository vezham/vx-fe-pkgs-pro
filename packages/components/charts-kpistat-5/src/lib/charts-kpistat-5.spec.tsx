import { render } from '@testing-library/react'

import ChartsKpistat5 from './charts-kpistat-5'

describe('ChartsKpistat5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChartsKpistat5 />)
    expect(baseElement).toBeTruthy()
  })
})
