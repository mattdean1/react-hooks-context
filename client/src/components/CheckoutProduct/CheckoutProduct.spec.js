import React from 'react'
import { render, screen } from '@testing-library/react'

import CheckoutProduct from './CheckoutProduct'

describe('CheckoutProduct', () => {
  it('displays a single item correctly', () => {
    render(<CheckoutProduct name="name" price={1.00} items={2} />)
    expect(screen.getByText('name')).not.toBeNull()
    expect(screen.getByText('£1.00')).not.toBeNull()
    expect(screen.getByText('2 items')).not.toBeNull()
    expect(screen.getByText('£2.00')).not.toBeNull()
  })
  it('displays multiple items correctly', () => {
    render(<CheckoutProduct name="name" price={1.00} items={1} />)
    expect(screen.getByText('name')).not.toBeNull()
    expect(screen.getAllByText('£1.00')).toHaveLength(2)
    expect(screen.getByText('1 item')).not.toBeNull()
  })
})
