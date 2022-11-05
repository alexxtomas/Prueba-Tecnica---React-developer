import PopularCards from '../components/PopularCards'
import SubTitle from '../components/SubTitle'

const Home = () => {
  return (
    <>
      <SubTitle>Titles</SubTitle>
      <section className='popular'>
        <PopularCards />
      </section>
    </>
  )
}

export default Home
