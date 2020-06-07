import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import MuiButton from '@material-ui/core/Button'

import { useBasketState } from '../../store/basketContext'
import { useProductContext } from '../../store/productContext'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
  border: 1px solid black;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

const Button = styled(MuiButton)`
  margin-top: 20px;
`

const getTotalPrice = (basket, productsMap) =>
  Object.entries(basket).reduce((acc, curr) => {
    const [productId, freq] = curr
    return acc + productsMap[productId].price * freq
  }, 0)

const getNumItems = (basket) =>
  Object.values(basket).reduce((acc, curr) => {
    return acc + curr
  }, 0)

const Basket = () => {
  const basket = useBasketState()
  const { productsMap } = useProductContext()
  const totalPrice = getTotalPrice(basket, productsMap)
  const items = getNumItems(basket)

  return (
    <Container>
      <Typography variant="h5">Your basket</Typography>
      <TextContainer>
        <Typography variant="h4">£{totalPrice}</Typography>
        <Typography>{items} items</Typography>
      </TextContainer>
      <Button variant="contained" color="primary">
        Checkout
      </Button>
    </Container>
  )
}

export default Basket
