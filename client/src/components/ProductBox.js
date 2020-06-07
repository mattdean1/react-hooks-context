import React from 'react'
import styled from 'styled-components'

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

const ProductBox = ({ leftContent, rightContent }) => {
  return (
    <Container>
      <LeftContainer>{leftContent}</LeftContainer>
      <RightContainer>{rightContent}</RightContainer>
    </Container>
  )
}

export default ProductBox
