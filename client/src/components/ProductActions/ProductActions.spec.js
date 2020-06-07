import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'

import { useBasketActions } from '../../store/useBasketActions'
import ProductActions from './ProductActions'

jest.mock('../../store/useBasketActions')

describe('ProductActions', () => {
  it('calls add/remove when buttons are clicked', () => {
    const addToBasket = jest.fn()
    const removeFromBasket = jest.fn()

    useBasketActions.mockReturnValueOnce({
      addToBasket,
      removeFromBasket,
      isRemovable: true,
    })

    render(<ProductActions id={1} />)
    fireEvent.click(screen.getByText('Add'))
    fireEvent.click(screen.getByText('Remove'))

    expect(addToBasket).toHaveBeenCalledTimes(1)
    expect(removeFromBasket).toHaveBeenCalledTimes(1)
  })

  it('disables the remove button when product is not removable', () => {
    useBasketActions.mockReturnValueOnce({
      isRemovable: false,
    })

    render(<ProductActions id={1} />)

    expect(screen.getByText('Remove').parentNode).toHaveAttribute('disabled')
  })
})
