export const getTotalPrice = (basket, productsMap) =>
  Object.entries(basket).reduce((acc, curr) => {
    const [productId, freq] = curr
    return acc + productsMap[productId].price * freq
  }, 0)

export const getNumItems = (basket) =>
  Object.values(basket).reduce((acc, curr) => {
    return acc + curr
  }, 0)

export const isProductRemovable = (basket, id) => basket[id] > 0
