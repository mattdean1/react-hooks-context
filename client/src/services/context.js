import React from 'react'

export const Context = React.createContext({
  products: {},
  setProducts: () => {},
  basket: {},
  addToBasket: () => {},
  removeFromBasket: () => {},
})
