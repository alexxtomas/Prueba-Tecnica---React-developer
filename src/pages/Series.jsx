import Filter from '../components/Filter'
import ProgramCards from '../components/ProgramCards'
import SubTitle from '../components/SubTitle'

const Series = () => {
  return (
    <>
      <SubTitle>Series</SubTitle>
      <Filter programType='series' />
      <ProgramCards programType='series' />
    </>
  )
}
export default Series
