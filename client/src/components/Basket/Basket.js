import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import MuiButton from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
  border: 1px solid black;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`

const Button = styled(MuiButton)`
  margin-top: 20px;
`

const Basket = ({ total, items }) => {
  return (
    <Container>
      <Typography variant="h5">Your basket</Typography>
      <TextContainer>
        <Typography variant="h4">£{total}</Typography>
        <Typography>{items} items</Typography>
      </TextContainer>
      <Button
        to="/checkout"
        component={Link}
        variant="contained"
        color="primary"
        disabled={items < 1}
      >
        Checkout
      </Button>
    </Container>
  )
}

export default Basket
