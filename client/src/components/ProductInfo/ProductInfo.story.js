import React from 'react'
import styled from 'styled-components'

import ProductInfo from './ProductInfo'

export default { title: 'ProductInfo' }

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export const productInfo = () => (
  <Container>
    <ProductInfo
      name="Teapot"
      description="I'm a little teapot"
      image="https://via.placeholder.com/200"
    />
  </Container>
)
