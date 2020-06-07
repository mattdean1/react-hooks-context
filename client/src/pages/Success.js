import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link, useLocation } from 'react-router-dom'

import Layout from '../components/Layout'
import Title from '../components/Title'

const Container = styled.div`
  & > * {
    margin-bottom: 30px;
  }
`

const Success = () => {
  const location = useLocation()
  const { orderNumber } = location.state

  return (
    <Layout>
      <Container>
        <Title title="Checkout Success" />
        <Typography variant="h5">
          You have successfully checked out order #{orderNumber}
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/">
          Shop again
        </Button>
      </Container>
    </Layout>
  )
}

export default Success
