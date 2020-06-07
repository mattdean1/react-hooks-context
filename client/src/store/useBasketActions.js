import { useBasket } from './basketContext'
import { isProductRemovable } from './selectors'

export const useBasketActions = (id) => {
  const [basket, dispatch] = useBasket()

  const addToBasket = () => dispatch({ type: 'add', payload: { id } })

  const isRemovable = isProductRemovable(basket, id)
  const removeFromBasket = () =>
    isRemovable && dispatch({ type: 'remove', payload: { id } })

  return { addToBasket, removeFromBasket, isRemovable }
}
