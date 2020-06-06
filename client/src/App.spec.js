import React from 'react'
import nock from 'nock'
import { render, waitFor } from '@testing-library/react'

import App from './App'

describe('App', () => {
  it('renders the product list page', async () => {
    nock('http://localhost:5000/api')
      .defaultReplyHeaders({ 'access-control-allow-origin': '*' })
      .get('/products')
      .reply(200, [])

    const { getByText, getByTestId } = render(<App />)

    expect(getByTestId('loading-spinner')).not.toBeNull()
    await waitFor(() => expect(getByText('Product Listing')).not.toBeNull())
  })
})
