import React from 'react'
import styled from 'styled-components'

import { useFetch } from '../services/useFetch'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Product from '../components/Product'
import Loading from '../components/Loading'

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
  const [data, loading] = useFetch('/products')

  if (loading) return <Loading />
  const { products } = data

  return (
    <Layout>
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
    </Layout>
  )
}

export default ProductList
