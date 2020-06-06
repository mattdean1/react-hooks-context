import { useState, useEffect } from 'react'

export const useFetch = (path) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    const response = await fetch(`http://localhost:5000/api${path}`)
    const json = await response.json()
    setData(json)
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [data, loading]
}
