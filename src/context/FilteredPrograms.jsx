import { createContext, useState } from 'react'
import { useEntries } from '../hooks/useEntries'

export const FilteredProgramsContext = createContext()

export const FilteredProgramsProvider = ({ children }) => {
  const { entries } = useEntries()
  const [filteredPrograms, setFilteredPrograms] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)

  const filter = (value, programType) => {
    if (value === 'All') {
      setFilteredPrograms(entries)
    } else {
      setFilteredPrograms(entries.filter(entry => entry.programType === programType && entry.releaseYear === Number(value)))
    }
  }

  return (
    <FilteredProgramsContext.Provider value={{ filteredPrograms, filter, isFiltered, setIsFiltered }}>
      {children}
    </FilteredProgramsContext.Provider>
  )
}
