import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'

const Image = styled.img`
  height: 60px;
  width: 60px;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`

const ProductInfo = ({ name, description, image }) => (
  <>
    <Image src={image} alt="Image of the product" />
    <TextContainer>
      <Typography variant="h5">{name}</Typography>
      <Typography>{description}</Typography>
    </TextContainer>
  </>
)

export default ProductInfo
