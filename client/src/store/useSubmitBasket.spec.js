import nock from 'nock'

import { useBasket } from './basketContext'
import { useSubmitBasket } from './useSubmitBasket'

jest.mock('./basketContext')

describe('useSubmitBasket', () => {
  it('should submit basket', async () => {
    const basket = { 1: 1 }
    const dispatch = jest.fn()
    useBasket.mockReturnValueOnce([basket, dispatch])

    nock('http://localhost:5000/api')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .post('/checkout', { products: ['1'] })
      .reply(200, { orderNumber: 123 })

    const submitBasket = useSubmitBasket()
    const orderNumber = await submitBasket()

    expect(dispatch).toHaveBeenCalledWith({ type: 'clear' })
    expect(orderNumber).toEqual(123)
  })
})
