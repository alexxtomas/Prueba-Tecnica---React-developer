import { useEffect, useState } from 'react'
import api from '../api/api'
import { filterData } from '../utils/filterData'

export const useEntries = () => {
  const [entries, setEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const entriesFromLocalStroage = JSON.parse(window.localStorage.getItem('entries'))
    if (!entriesFromLocalStroage) {
      api.getEntries()
        .then(data => {
          const filtredData = filterData(data)
          setEntries(filtredData)
          window.localStorage.setItem('entries', JSON.stringify(filtredData))
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

// Al hacer click sobre el titulo deberá abrirse un popup mistrando la inforamcion completa title
// description
// releaseYear
// images → Poster Art → url

// filtro por año
// paginacion
