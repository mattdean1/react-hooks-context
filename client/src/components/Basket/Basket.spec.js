import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Basket from './Basket'

describe('Basket', () => {
  it('displays the provided data', () => {
    render(
      <Router>
        <Basket total={11.99} items={2} />
      </Router>
    )
    expect(screen.getByText('£11.99')).not.toBeNull()
    expect(screen.getByText('2 items')).not.toBeNull()
  })
})
