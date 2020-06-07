import React from 'react'
import { render, screen } from '@testing-library/react'

import ListProduct from './ListProduct'

describe('ListProduct', () => {
  it('displays the provided data', () => {
    render(<ListProduct name="name" description="description" price="11.99" />)
    expect(screen.getByText('name')).not.toBeNull()
    expect(screen.getByText('description')).not.toBeNull()
    expect(screen.getByText('£11.99')).not.toBeNull()
  })
  it('renders placeholder image', () => {
    render(
      <ListProduct
        name="name"
        description="description"
        price="11.99"
        image="image-src"
      />
    )
    expect(screen.getByAltText('Image of the product')).toHaveAttribute(
      'src',
      'image-src'
    )
  })
})
