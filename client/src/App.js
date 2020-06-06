import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { StylesProvider } from '@material-ui/core/styles'

import { ProductProvider } from './store/productContext'
import ProductList from './pages/ProductList'
import Checkout from './pages/Checkout'
import Success from './pages/Success'

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
        <Router>
          <Switch>
            <Route exact path="/">
              <ProductProvider>
                <ProductList />
              </ProductProvider>
            </Route>
            <Route path="/checkout">
              <Checkout />
            </Route>
            <Route path="/success">
              <Success />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </>
  )
}

export default App
