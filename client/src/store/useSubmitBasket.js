import { useBasket } from './basketContext'

export const useSubmitBasket = () => {
  const [basket, dispatch] = useBasket()

  const submitBasket = async () => {
    const products = Object.entries(basket).reduce((acc, [id, freq]) => {
      const arr = Array(freq).fill(id)
      return acc.concat(arr)
    }, [])

    const response = await fetch('http://localhost:5000/api/checkout', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ products }),
    })

    if (!response.ok) throw new Error('failed to submit basket')

    const json = await response.json()
    dispatch({ type: 'clear' })
    return json.orderNumber
  }

  return submitBasket
}
