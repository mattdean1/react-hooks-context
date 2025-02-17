export const getNumItems = (basket) =>
  Object.values(basket).reduce((acc, curr) => {
    return acc + curr
  }, 0)

export const isProductRemovable = (basket, id) => basket[id] > 0

export const getTotalPrice = (basket, productsMap) =>
  Object.entries(basket).reduce((acc, curr) => {
    const [productId, freq] = curr
    return acc + productsMap[productId].price * freq
  }, 0)

export const getValidBasketItems = (basket, productsMap) =>
  Object.entries(basket)
    .filter(([_, freq]) => freq > 0)
    .reduce((acc, [productId, freq]) => {
      acc.push({ ...productsMap[productId], freq })
      return acc
    }, [])
