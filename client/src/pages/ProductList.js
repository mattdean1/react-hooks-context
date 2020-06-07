import React from 'react'
import styled from 'styled-components'

import { useProductContext } from '../store/productContext'
import { useBasket } from '../store/basketContext'
import { getNumItems, getTotalPrice } from '../store/selectors'

import Layout from '../components/Layout'
import Title from '../components/Title'
import ListProduct from '../components/ListProduct'
import Loading from '../components/Loading'
import Basket from '../components/Basket'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`
const LeftColumn = styled.div`
  flex-grow: 1;
  @media only screen and (min-width: 650px) {
    margin-right: 20px;
  }
`
const RightColumn = styled.div`
  padding-top: 20px;
`

const List = styled.div`
  margin-top: 50px;

  & > div {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const ProductList = () => {
  const [basket, basketDispatch] = useBasket()
  const { products, productsMap, loading } = useProductContext()

  if (loading) return <Loading />

  const totalPrice = getTotalPrice(basket, productsMap)
  const items = getNumItems(basket)

  return (
    <Layout>
      <Container>
        <LeftColumn>
          <Title title="Product Listing" />
          <List>
            {products &&
              products.map((p) => (
                <ListProduct
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  description={p.description}
                  price={p.price}
                  image={p.image}
                />
              ))}
          </List>
        </LeftColumn>
        <RightColumn>
          <Basket total={totalPrice} items={items} />
        </RightColumn>
      </Container>
    </Layout>
  )
}

export default ProductList
