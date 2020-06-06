import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

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

const Image = styled.img`
  height: 60px;
  width: 60px;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

const Product = ({ name, description, price, image }) => (
  <Container>
    <LeftContainer>
      <Image src={image} alt="Image of the product" />
      <TextContainer>
        <Typography variant="h5">{name}</Typography>
        <Typography>{description}</Typography>
      </TextContainer>
    </LeftContainer>
    <RightContainer>
      <Typography variant="h5">£{price}</Typography>
      <ButtonContainer>
        <Button>Add</Button>
        <Button>Remove</Button>
      </ButtonContainer>
    </RightContainer>
  </Container>
)

export default Product
