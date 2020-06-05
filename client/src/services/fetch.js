const fetchData = async (path) => {
  const resp = await fetch(`http://localhost:5000/api${path}`)
  const json = resp.json()
  return json
}

export const fetchProducts = async () => {
  const data = await fetchData('/products')
  return data.products
}
