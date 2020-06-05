import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('renders the product list page', () => {
    const { getByText } = render(<App />)
    expect(getByText('Product Listing')).not.toBeNull()
  })
})
