import React from 'react'
import Typography from '@material-ui/core/Typography'

import ProductInfo from '../ProductInfo'
import ProductActions from '../ProductActions'
import ProductBox from '../ProductBox'

const ListProduct = ({ id, name, description, price, image }) => {
  return (
    <ProductBox
      leftContent={
        <ProductInfo name={name} description={description} image={image} />
      }
      rightContent={
        <>
          <Typography variant="h5">£{price}</Typography>
          <ProductActions id={id} />
        </>
      }
    />
  )
}


export default ListProduct
