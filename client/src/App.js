import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { StylesProvider } from '@material-ui/core/styles'

import { ProductProvider } from './store/productContext'
import ProductList from './pages/ProductList'
import Checkout from './pages/Checkout'
import Success from './pages/Success'
import { BasketProvider } from './store/basketContext'

const App = () => {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Helmet>
      <StylesProvider injectFirst>
        <ProductProvider>
          <BasketProvider>
            <Router>
              <Switch>
                <Route exact path="/">
                  <ProductList />
                </Route>
                <Route path="/checkout">
                  <Checkout />
                </Route>
                <Route path="/success">
                  <Success />
                </Route>
              </Switch>
            </Router>
          </BasketProvider>
        </ProductProvider>
      </StylesProvider>
    </>
  )
}

export default App
