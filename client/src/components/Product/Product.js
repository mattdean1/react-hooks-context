import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid black;
  padding: 10px;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
`

const Product = ({ name, description, price }) => (
  <Container>
    <TextContainer>
      <Typography variant="h4">{name}</Typography>
      <Typography>{description}</Typography>
    </TextContainer>
    <Typography variant="h4">£{price}</Typography>
  </Container>
)

export default Product
