import React from 'react'
import { render } from '@testing-library/react'

import Product from './Product'

describe('Product', () => {
  it('displays the provided data', () => {
    const { getByText } = render(
      <Product name="name" description="description" price="11.99" />
    )
    expect(getByText('name')).not.toBeNull()
    expect(getByText('description')).not.toBeNull()
    expect(getByText('£11.99')).not.toBeNull()
  })
})
