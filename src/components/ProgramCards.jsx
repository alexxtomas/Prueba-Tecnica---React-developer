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
    .map(entry => ({
      title: entry.title,
      image: entry.images['Poster Art'].url
    }))
  console.log(cardObj.length)

  return (
    cardObj.map(({ title, image }) => <ProgramCard key={title} title={title} image={image} />)
  )
}

export default ProgramCards
