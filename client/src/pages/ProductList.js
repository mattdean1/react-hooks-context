import React, { Component } from 'react'
import styled from 'styled-components'

import { fetchProducts } from '../services/fetch'
import Layout from '../components/Layout'
import Title from '../components/Title'
import Product from '../components/Product'

const List = styled.div`
  & > div {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

class ProductList extends Component {
  constructor(props) {
    super(props)
    this.state = { products: [] }
  }

  async componentDidMount() {
    const products = await fetchProducts()
    this.setState({ products })
  }

  render() {
    const { products } = this.state
    return (
      <Layout>
        <Title title="Product Listing" />
        <List>
          {products &&
            products.map((p) => (
              <Product
                name={p.name}
                description={p.description}
                price={p.price}
              />
            ))}
        </List>
      </Layout>
    )
  }
}

export default ProductList
