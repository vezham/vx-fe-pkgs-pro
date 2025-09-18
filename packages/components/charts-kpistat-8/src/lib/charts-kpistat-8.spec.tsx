import { render } from '@testing-library/react'

import ChartsKpistat8 from './charts-kpistat-8'

describe('ChartsKpistat8', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChartsKpistat8 />)
    expect(baseElement).toBeTruthy()
  })
})
