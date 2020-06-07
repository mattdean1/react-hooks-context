import React from 'react'

import ListProduct from './ListProduct'

export default { title: 'ListProduct' }

export const listProduct = () => (
  <ListProduct
    name="Teapot"
    description="I'm a little teapot"
    price={11.99}
    image="https://via.placeholder.com/200"
  />
)
