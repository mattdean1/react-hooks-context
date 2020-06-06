import React from 'react'
import styled from 'styled-components'

import { useProductContext } from '../store/productContext'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Product from '../components/Product'
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
  const { products, loading } = useProductContext()

  if (loading) return <Loading />

  return (
    <Layout>
      <Container>
        <LeftColumn>
          <Title title="Product Listing" />
          <List>
            {products &&
              products.map((p) => (
                <Product
                  key={p.name}
                  name={p.name}
                  description={p.description}
                  price={p.price}
                  image={p.image}
                />
              ))}
          </List>
        </LeftColumn>
        <RightColumn>
          <Basket total={11.11} items={2} />
        </RightColumn>
      </Container>
    </Layout>
  )
}

export default ProductList
