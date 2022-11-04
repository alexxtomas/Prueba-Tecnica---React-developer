import { useEntries } from '../hooks/useEntries'
import { getProgramTypes } from '../utils/getProgramTypes'
import Error from './Error'
import Loading from './Loading'
import PopularCard from './PopularCard'

const ListOfPopularCards = () => {
  const { entries, loading, error } = useEntries()
  const programTypes = getProgramTypes(entries)

  if (error) return <Error />
  else if (loading) return <Loading />
  return (
    <>
      {
          programTypes.map(programType => <PopularCard key={programType} programType={programType} />
          )
        }
    </>
  )
}

export default ListOfPopularCards
