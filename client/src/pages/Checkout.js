import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

import { useBasketState } from '../store/basketContext'
import { useProductContext } from '../store/productContext'
import { getTotalPrice, getValidBasketItems } from '../store/selectors'

import Layout from '../components/Layout'
import Title from '../components/Title'
import CheckoutProduct from '../components/CheckoutProduct'
import List from '../components/List'

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
  const validProducts = getValidBasketItems(basket, productsMap)
  const isBasketEmpty = validProducts.length <= 0

  return (
    <Layout>
      <Title title="Checkout" />
      <Container>
        <List>
          {isBasketEmpty ? (
            <Typography>Add some items to your basket!</Typography>
          ) : (
            validProducts.map((p) => (
              <CheckoutProduct
                key={p.id}
                name={p.name}
                price={p.price}
                items={p.freq}
                image={p.image}
              />
            ))
          )}
        </List>
        <Total>
          <Typography variant="h5">Total to pay: £{total}</Typography>
        </Total>
        <Buttons>
          <Button variant="contained" component={Link} to="/">
            Continue shopping
          </Button>
          <Button variant="contained" color="primary" disabled={isBasketEmpty}>
            Confirm
          </Button>
        </Buttons>
      </Container>
    </Layout>
  )
}

export default Checkout
