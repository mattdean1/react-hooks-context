import React, { useContext } from 'react'
import { render, fireEvent, getNodeText, screen } from '@testing-library/react'

import { Context } from '../../services/context'
import ContextProvider from './ContextProvider'

const TestConsumer = () => {
  const {
    products,
    setProducts,
    basket,
    addToBasket,
    removeFromBasket,
  } = useContext(Context)

  return (
    <>
      <div data-testid="basket">{JSON.stringify(basket)}</div>
      <div data-testid="products">{JSON.stringify(products)}</div>
      <button data-testid="addToBasket" onClick={() => addToBasket(1)} />
      <button
        data-testid="removeFromBasket"
        onClick={() => removeFromBasket(1)}
      />
      <button
        data-testid="setProducts"
        onClick={() => setProducts([{ id: 1, anotherKey: 'asdf' }])}
      />
    </>
  )
}

const getRenderedValue = (elem) => JSON.parse(getNodeText(elem))

describe('ContextProvider', () => {
  it('gives default context values', () => {
    render(
      <ContextProvider>
        <TestConsumer />
      </ContextProvider>
    )

    expect(getRenderedValue(screen.getByTestId('products'))).toEqual({})
    expect(getRenderedValue(screen.getByTestId('basket'))).toEqual({})
  })

  it('adds item to basket', () => {
    render(
      <ContextProvider>
        <TestConsumer />
      </ContextProvider>
    )

    fireEvent.click(screen.getByTestId('addToBasket'))
    fireEvent.click(screen.getByTestId('addToBasket'))

    expect(getRenderedValue(screen.getByTestId('basket'))).toEqual({ 1: 2 })
  })

  it('removes item from basket', () => {
    render(
      <ContextProvider>
        <TestConsumer />
      </ContextProvider>
    )

    fireEvent.click(screen.getByTestId('addToBasket'))
    fireEvent.click(screen.getByTestId('removeFromBasket'))

    expect(getRenderedValue(screen.getByTestId('basket'))).toEqual({ 1: 0 })
  })

  it('does not error when removing item not in basket', () => {
    render(
      <ContextProvider>
        <TestConsumer />
      </ContextProvider>
    )

    fireEvent.click(screen.getByTestId('removeFromBasket'))

    expect(getRenderedValue(screen.getByTestId('basket'))).toEqual({ 1: 0 })
  })

  it('sets products map', () => {
    render(
      <ContextProvider>
        <TestConsumer />
      </ContextProvider>
    )

    fireEvent.click(screen.getByTestId('setProducts'))

    expect(getRenderedValue(screen.getByTestId('products'))).toEqual({
      1: { id: 1, anotherKey: 'asdf' },
    })
  })
})
