import React, { useState } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link, useHistory } from 'react-router-dom'

import { useBasketState } from '../store/basketContext'
import { useProductContext } from '../store/productContext'
import { getTotalPrice, getValidBasketItems } from '../store/selectors'
import { useSubmitBasket } from '../store/useSubmitBasket'

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
  const history = useHistory()
  const [submitting, setSubmitting] = useState()
  const basket = useBasketState()
  const submitBasket = useSubmitBasket()
  const { productsMap } = useProductContext()

  const total = getTotalPrice(basket, productsMap)
  const validProducts = getValidBasketItems(basket, productsMap)
  const isBasketEmpty = validProducts.length <= 0

  const handleSubmit = async () => {
    try {
      setSubmitting(true)
      const orderNumber = await submitBasket()
      history.push('/success', { orderNumber })
    } catch (e) {
      console.log(e)
    } finally {
      setSubmitting(false)
    }
  }

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
          <Button
            variant="contained"
            color="primary"
            disabled={submitting || isBasketEmpty}
            onClick={handleSubmit}
          >
            Confirm
          </Button>
        </Buttons>
      </Container>
    </Layout>
  )
}

export default Checkout
