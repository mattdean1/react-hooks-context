import React, { useContext, createContext } from 'react'

const BasketStateContext = createContext({})
const BasketDispatchContext = createContext({})

export const isProductRemovable = (state, id) => state[id] > 0

function basketReducer(state, action) {
  const productId = action.payload.id

  switch (action.type) {
    case 'add': {
      const previousValue = state[productId] || 0
      return { ...state, [productId]: previousValue + 1 }
    }
    case 'remove': {
      const previousValue = state[productId] || 1
      return { ...state, [productId]: previousValue - 1 }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const BasketProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(basketReducer, {})

  return (
    <BasketStateContext.Provider value={state}>
      <BasketDispatchContext.Provider value={dispatch}>
        {children}
      </BasketDispatchContext.Provider>
    </BasketStateContext.Provider>
  )
}

export const useBasketState = () => {
  const context = useContext(BasketStateContext)
  if (context === undefined) {
    throw new Error('useBasketState must be used within a BasketProvider')
  }
  return context
}

const useBasketDispatch = () => {
  const context = useContext(BasketDispatchContext)
  if (context === undefined) {
    throw new Error('useBasketState must be used within a BasketProvider')
  }
  return context
}

export const useBasket = () => [useBasketState(), useBasketDispatch()]
