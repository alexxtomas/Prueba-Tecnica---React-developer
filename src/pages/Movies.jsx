import ProgramCards from '../components/ProgramCards'
import SubTitle from '../components/SubTitle'

const Movies = () => {
  return (
    <>
      <SubTitle>Movies</SubTitle>
      <section className='series'>
        <ProgramCards programType='movie' />
      </section>
    </>
  )
}

export default Movies
