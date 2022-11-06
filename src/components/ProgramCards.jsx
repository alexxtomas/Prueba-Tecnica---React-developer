import { useEntries } from '../hooks/useEntries'
import { useFilteredPrograms } from '../hooks/useFilteredPrograms'
import Error from './Error'
import Loading from './Loading'
import ProgramCard from './ProgramCard'
const ProgramCards = ({ programType }) => {
  const { entries, loading, error } = useEntries()
  const { filteredPrograms, isFiltered } = useFilteredPrograms()

  if (error) return <Error />
  else if (loading) return <Loading />

  const programsToShow = isFiltered ? filteredPrograms : entries

  const cardObj = programsToShow
    .filter(entry => entry.programType === programType)
    .map(({ title, description, images, releaseYear }) => ({
      title,
      image: images['Poster Art'].url,
      description,
      releaseYear
    }))

  return (
    <section className='list-of-cards'>
      {
         cardObj.map(({ title, image, description, releaseYear }) =>
           <ProgramCard
             key={title}
             title={title}
             image={image}
             description={description}
             releaseYear={releaseYear}
           />
         )
    }
    </section>
  )
}

export default ProgramCards
