import { useEntries } from '../hooks/useEntries'
import Error from './Error'
import Loading from './Loading'
import ProgramCard from './ProgramCard'
const ProgramCards = ({ programType }) => {
  const { entries, loading, error } = useEntries()

  if (error) return <Error />
  else if (loading) return <Loading />

  const cardObj = entries
    .filter(entry => entry.programType === programType)
    .map(({ title, description, images, releaseYear }) => ({
      title,
      image: images['Poster Art'].url,
      description,
      releaseYear
    }))

  return (
    cardObj.map(({ title, image, description, releaseYear }) => <ProgramCard key={title} title={title} image={image} description={description} releaseYear={releaseYear} />)
  )
}

export default ProgramCards
