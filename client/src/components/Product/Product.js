import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { useBasket } from '../../store/basketContext'
import { isProductRemovable } from '../../store/selectors'

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

  & > button {
    margin-bottom: 5px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

const Product = ({ id, name, description, price, image }) => {
  const [state, dispatch] = useBasket()
  const addToBasket = () => dispatch({ type: 'add', payload: { id } })
  const removable = isProductRemovable(state, id)
  const removeFromBasket = () =>
    removable && dispatch({ type: 'remove', payload: { id } })

  return (
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
          <Button variant="contained" onClick={addToBasket}>
            Add
          </Button>
          <Button
            variant="contained"
            onClick={removeFromBasket}
            disabled={!removable}
          >
            Remove
          </Button>
        </ButtonContainer>
      </RightContainer>
    </Container>
  )
}

export default Product
