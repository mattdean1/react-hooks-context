import { useBasket } from './basketContext'
import { useBasketActions } from './useBasketActions'
import { isProductRemovable } from './selectors'

jest.mock('./basketContext')
jest.mock('./selectors')

describe('useBasketActions', () => {
  it('returns a func to dispatch an add action', () => {
    const dispatch = jest.fn()
    useBasket.mockReturnValueOnce([{ 1: 1 }, dispatch])

    const { addToBasket } = useBasketActions(1)
    addToBasket()

    expect(dispatch).toHaveBeenCalledWith({ type: 'add', payload: { id: 1 } })
  })

  it('returns a func to dispatch a remove action', () => {
    const dispatch = jest.fn()
    useBasket.mockReturnValueOnce([{ 1: 1 }, dispatch])
    isProductRemovable.mockReturnValueOnce(true)

    const { removeFromBasket } = useBasketActions(1)
    removeFromBasket()

    expect(dispatch).toHaveBeenCalledWith({
      type: 'remove',
      payload: { id: 1 },
    })
  })

  it('does not dispatch remove if product is not removable', () => {
    const dispatch = jest.fn()
    useBasket.mockReturnValueOnce([{ 1: 1 }, dispatch])
    isProductRemovable.mockReturnValueOnce(false)

    const { removeFromBasket, isRemovable } = useBasketActions(1)
    removeFromBasket()

    expect(isRemovable).toEqual(false)
    expect(dispatch).not.toHaveBeenCalled()
  })
})
