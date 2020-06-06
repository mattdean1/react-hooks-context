import React from 'react'
import { render, getNodeText, screen, waitFor } from '@testing-library/react'
import nock from 'nock'

import { useProductContext, ProductProvider } from './productContext'

const TestConsumer = () => {
  const { products, productsMap, loading } = useProductContext()

  if (loading) return <div data-testid="loading" />

  return (
    <>
      <div data-testid="products">{JSON.stringify(products)}</div>
      <div data-testid="productsMap">{JSON.stringify(productsMap)}</div>
    </>
  )
}

const getRenderedValue = (elem) => JSON.parse(getNodeText(elem))

describe('productContext', () => {
  it('returns product information', async () => {
    nock('http://localhost:5000/api')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/products')
      .reply(200, { products: [{ id: 1, anotherKey: 'asdf' }] })

    render(
      <ProductProvider>
        <TestConsumer />
      </ProductProvider>
    )

    expect(screen.getByTestId('loading')).not.toBeNull()
    await waitFor(() => {
      const elem = screen.getByTestId('products')
      const value = getRenderedValue(elem)
      expect(value).toEqual([{ id: 1, anotherKey: 'asdf' }])
    })
    await waitFor(() =>
      expect(getRenderedValue(screen.getByTestId('productsMap'))).toEqual({
        1: { id: 1, anotherKey: 'asdf' },
      })
    )
  })
})
