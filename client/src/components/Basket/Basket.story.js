import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Basket from './Basket'

export default { title: 'Basket' }

export const basket = () => (
  <Router>
    <Basket total={4.98} items={2} />
  </Router>
)
