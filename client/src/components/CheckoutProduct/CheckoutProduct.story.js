import React from 'react'

import CheckoutProduct from './CheckoutProduct'

export default { title: 'CheckoutProduct' }

export const checkoutProduct = () => (
  <CheckoutProduct
    name="Teapot"
    price={11.99}
    image="https://via.placeholder.com/200"
    items={2}
  />
)
