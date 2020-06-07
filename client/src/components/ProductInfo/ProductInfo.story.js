import React from 'react'

import ProductInfo from './ProductInfo'

export default { title: 'ProductInfo' }

export const productInfo = () => (
  <ProductInfo
    name="Teapot"
    description="I'm a little teapot"
    image="https://via.placeholder.com/200"
  />
)
