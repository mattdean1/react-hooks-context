import React from 'react'

import ProductActions from './ProductActions'
import { BasketProvider } from '../../store/basketContext'

export default { title: 'ProductActions' }

export const productActions = () => (
  <BasketProvider>
    <ProductActions
      name="Teapot"
      description="I'm a little teapot"
      price={11.99}
      image="https://via.placeholder.com/200"
    />
  </BasketProvider>
)
