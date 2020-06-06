import React, { useState, useEffect, createContext } from 'react'

const defaults = { products: [], productsMap: {}, loading: false }
const ProductContext = createContext(defaults)

export const ProductProvider = ({ children }) => {
  const [contextState, setContextState] = useState(defaults)

  const fetchProducts = async () => {
    setContextState({ ...contextState, loading: true })

    const response = await fetch('http://localhost:5000/api/products')
    const json = await response.json()
    const { products } = json
    setContextState({
      products,
      productsMap: products.reduce(
        (productsMap, product) => ({ ...productsMap, [product.id]: product }),
        {}
      ),
      loading: false,
    })
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <ProductContext.Provider value={contextState}>
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  const context = React.useContext(ProductContext)
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider')
  }
  return context
}
