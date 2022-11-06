import { useEntries } from '../hooks/useEntries'
import { useFilteredPrograms } from '../hooks/useFilteredPrograms'
import { getYears } from '../utils/getYears'

const Filter = ({ programType }) => {
  const { entries } = useEntries()
  const { filter, setIsFiltered } = useFilteredPrograms()
  if (!programType || typeof programType !== 'string') programType = 'series'
  const years = getYears(entries, programType)

  const handleChange = ({ target }) => {
    const { value } = target
    filter(value, programType)
    setIsFiltered(true)
  }
  return (
    <section className='filter-by-year'>
      <label>
        Filter By Year:
      </label>
      <select onChange={handleChange}>
        <option value='All'>All</option>
        {years.map(year => <option key={year} value={year}>{year}</option>)}
      </select>
    </section>
  )
}

export default Filter
