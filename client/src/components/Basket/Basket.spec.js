import React from 'react'
import { render, screen } from '@testing-library/react'

import Basket from './Basket'

describe('Basket', () => {
  it('displays the provided data', () => {
    render(<Basket total={11.99} items={2} />)
    expect(screen.getByText('£11.99')).not.toBeNull()
    expect(screen.getByText('2 items')).not.toBeNull()
  })
})
