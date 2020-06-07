import React from 'react'
import { render, screen } from '@testing-library/react'

import ProductInfo from './ProductInfo'

describe('ProductInfo', () => {
  it('displays the provided data', () => {
    render(<ProductInfo name="name" description="description" price="11.99" />)
    expect(screen.getByText('name')).not.toBeNull()
    expect(screen.getByText('description')).not.toBeNull()
  })
  it('renders placeholder image', () => {
    render(
      <ProductInfo name="name" description="description" image="image-src" />
    )
    expect(screen.getByAltText('Image of the product')).toHaveAttribute(
      'src',
      'image-src'
    )
  })
})
