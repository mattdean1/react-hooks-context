import React from 'react'
import Typography from '@material-ui/core/Typography'

import { formatPrice } from '../../services/formatPrice'
import { formatPlural } from '../../services/formatPlural'

import ProductInfo from '../ProductInfo'
import ProductBox from '../ProductBox'

const CheckoutProduct = ({ name, image, price, items }) => {
  const total = price * items
  const itemsText = formatPlural(`${items} item`, items)

  return (
    <ProductBox
      leftContent={
        <ProductInfo name={name} image={image}/>
      }
      rightContent={
        <>
          <Typography variant="h6">£{formatPrice(price)}</Typography>
          <Typography variant="h6">{itemsText}</Typography>
          <Typography variant="h5">£{formatPrice(total)}</Typography>
        </>
      }
    />
  )
}


export default CheckoutProduct
