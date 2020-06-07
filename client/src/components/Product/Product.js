import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

import ProductInfo from '../ProductInfo'
import ProductActions from '../ProductActions'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  padding: 10px;
  flex-wrap: wrap;
`

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
  flex-grow: 10;
`

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  justify-content: space-between;
  flex-grow: 1;
`

const Product = ({ id, name, description, price, image }) => {
  return (
    <Container>
      <LeftContainer>
        <ProductInfo name={name} description={description} image={image} />
      </LeftContainer>
      <RightContainer>
        <Typography variant="h5">£{price}</Typography>
        <ProductActions id={id} />
      </RightContainer>
    </Container>
  )
}

export default Product
