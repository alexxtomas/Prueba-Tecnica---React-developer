import { useEffect, useState } from 'react'
import api from '../api/api'

export const useEntries = () => {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const entriesFromLocalStroage = JSON.parse(window.localStorage.getItem('entries'))
    if (!entriesFromLocalStroage) {
      api.getEntries()
        .then(data => {
          setEntries(data)
          window.localStorage.setItem('entries', JSON.stringify(data))
          setLoading(false)
        })
        .catch(e => {
          setError(true)
          console.error(e)
        })
    } else {
      setEntries(entriesFromLocalStroage)
      setLoading(false)
    }
  }, [])

  return { entries, loading, error }
}
