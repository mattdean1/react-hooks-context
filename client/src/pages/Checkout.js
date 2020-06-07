import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import Layout from '../components/Layout'
import Title from '../components/Title'
import { useBasketState } from '../store/basketContext'
import { useProductContext } from '../store/productContext'
import { getTotalPrice } from '../store/selectors'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Total = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 30px;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Checkout = () => {
  const basket = useBasketState()
  const { productsMap } = useProductContext()
  const total = getTotalPrice(basket, productsMap)

  return (
    <Layout>
      <Title title="Checkout" />
      <Container>
        <Total>
          <Typography variant="h5">Total to pay: £{total}</Typography>
        </Total>
        <Buttons>
          <Button variant="contained" component={Link} to="/">
            Continue shopping
          </Button>
          <Button variant="contained" color="primary">
            Confirm
          </Button>
        </Buttons>
      </Container>
    </Layout>
  )
}

export default Checkout
