import { useContext } from 'react'
import { FilteredProgramsContext } from '../context/FilteredPrograms'

export const useFilteredPrograms = () => useContext(FilteredProgramsContext)
