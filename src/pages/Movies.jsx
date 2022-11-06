import Filter from '../components/Filter'
import ProgramCards from '../components/ProgramCards'
import SubTitle from '../components/SubTitle'

const Movies = () => {
  return (
    <>
      <SubTitle>Movies</SubTitle>
      <Filter programType='movie' />
      <ProgramCards programType='movie' />
    </>
  )
}

export default Movies
