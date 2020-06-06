import React, { useState } from 'react'

import { Context } from '../../services/context'

const ContextProvider = ({ children }) => {
  const [basketState, setBasketState] = useState({})
  const [productsState, setProductsState] = useState({})

  const setProducts = (productsArray) =>
    setProductsState(
      productsArray.reduce(
        (productsMap, product) => ({ ...productsMap, [product.id]: product }),
        {}
      )
    )

  const addToBasket = (productId) => {
    const numberOfItems = basketState[productId]
      ? basketState[productId] + 1
      : 1

    return setBasketState({
      ...basketState,
      [productId]: numberOfItems,
    })
  }

  const removeFromBasket = (productId) => {
    const existingItems = basketState[productId]
    const numberOfItems = existingItems > 0 ? existingItems - 1 : 0

    return setBasketState({
      ...basketState,
      [productId]: numberOfItems,
    })
  }

  return (
    <Context.Provider
      value={{
        products: productsState,
        setProducts,
        basket: basketState,
        addToBasket,
        removeFromBasket,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
