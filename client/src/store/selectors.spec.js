import { getNumItems, isProductRemovable, getTotalPrice } from './selectors'

describe('selectors', () => {
  describe('getNumItems', () => {
    it('should return number of items', () => {
      const basket = { 123: 1, 456: 2 }
      expect(getNumItems(basket)).toEqual(3)
    })

    it('should return zero for an empty basket', () => {
      const basket = {}
      expect(getNumItems(basket)).toEqual(0)
    })
  })

  describe('isProductRemovable', () => {
    it('should return true for a product with quantity larger than zero', () => {
      const basket = { 123: 2 }
      expect(isProductRemovable(basket, 123)).toEqual(true)
    })
    it('should return false for a product with quantity of zero', () => {
      const basket = { 123: 0 }
      expect(isProductRemovable(basket, 123)).toEqual(false)
    })
    it('should return false for a product which is not in the basket', () => {
      const basket = {}
      expect(isProductRemovable(basket, 123)).toEqual(false)
    })
  })

  describe('getTotalPrice', () => {
    it('should compute the total price of the basket', () => {
      const basket = { 123: 1, 456: 2 }
      const productsMap = { 123: { price: 6 }, 456: { price: 7 } }
      expect(getTotalPrice(basket, productsMap)).toEqual(20)
    })
    it('should return zero for an empty basket', () => {
      const basket = {}
      const productsMap = { 123: { price: 6 }, 456: { price: 7 } }
      expect(getTotalPrice(basket, productsMap)).toEqual(0)
    })
  })
})
