import React from 'react'

import Product from './Product'

export default { title: 'Product' }

export const product = () => (
  <Product name="Teapot" description="I'm a little teapot" price={11.99} />
)
