import React from 'react'
import { render, fireEvent, getNodeText, screen } from '@testing-library/react'

import { useBasket, BasketProvider } from './basketContext'

const TestConsumer = () => {
  const [state, dispatch] = useBasket()
  const addToBasket = () => dispatch({ type: 'add', payload: { id: 1 } })
  const removeFromBasket = () =>
    dispatch({ type: 'remove', payload: { id: 1 } })
  const clearBasket = () => dispatch({ type: 'clear' })

  return (
    <>
      <div data-testid="state">{JSON.stringify(state)}</div>
      <button data-testid="addToBasket" onClick={addToBasket} />
      <button data-testid="removeFromBasket" onClick={removeFromBasket} />
      <button data-testid="clearBasket" onClick={clearBasket} />
    </>
  )
}

const getRenderedValue = (elem) => JSON.parse(getNodeText(elem))

describe('basketContext', () => {
  it('gives default context values', () => {
    render(
      <BasketProvider>
        <TestConsumer />
      </BasketProvider>
    )

    expect(getRenderedValue(screen.getByTestId('state'))).toEqual({})
  })

  it('adds item to basket', () => {
    render(
      <BasketProvider>
        <TestConsumer />
      </BasketProvider>
    )

    fireEvent.click(screen.getByTestId('addToBasket'))
    fireEvent.click(screen.getByTestId('addToBasket'))

    expect(getRenderedValue(screen.getByTestId('state'))).toEqual({ 1: 2 })
  })

  it('removes item from basket', () => {
    render(
      <BasketProvider>
        <TestConsumer />
      </BasketProvider>
    )

    fireEvent.click(screen.getByTestId('addToBasket'))
    fireEvent.click(screen.getByTestId('removeFromBasket'))

    expect(getRenderedValue(screen.getByTestId('state'))).toEqual({ 1: 0 })
  })

  it('does not error when removing item not in basket', () => {
    render(
      <BasketProvider>
        <TestConsumer />
      </BasketProvider>
    )

    fireEvent.click(screen.getByTestId('removeFromBasket'))

    expect(getRenderedValue(screen.getByTestId('state'))).toEqual({ 1: 0 })
  })

  it('clears basket', () => {
    render(
      <BasketProvider>
        <TestConsumer />
      </BasketProvider>
    )

    fireEvent.click(screen.getByTestId('addToBasket'))
    fireEvent.click(screen.getByTestId('clearBasket'))

    expect(getRenderedValue(screen.getByTestId('state'))).toEqual({})
  })
})
