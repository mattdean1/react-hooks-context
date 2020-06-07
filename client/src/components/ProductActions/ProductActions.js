import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

import { useBasketActions } from '../../store/useBasketActions'

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  & > button {
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const ProductActions = ({ id }) => {
  const { addToBasket, removeFromBasket, isRemovable } = useBasketActions(id)

  return (
    <ButtonContainer>
      <Button variant="contained" onClick={addToBasket}>
        Add
      </Button>
      <Button
        variant="contained"
        onClick={removeFromBasket}
        disabled={!isRemovable}
      >
        Remove
      </Button>
    </ButtonContainer>
  )
}

export default ProductActions
