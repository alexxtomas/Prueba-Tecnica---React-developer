import { useEffect, useState } from 'react'
import { useEntries } from '../hooks/useEntries'
import { useFilteredPrograms } from '../hooks/useFilteredPrograms'
import { getTotalPages } from '../utils/getTotalPages'
import Error from './Error'
import Loading from './Loading'
import Pagination from './Pagination'
import ProgramCard from './ProgramCard'

const PROGRAMS_PER_PAGE = 8
const ProgramCards = ({ programType }) => {
  const { entries, loading, error } = useEntries()
  const { filteredPrograms, isFiltered } = useFilteredPrograms()
  const [current, setCurrent] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  let programsToShow = isFiltered ? filteredPrograms : entries
  programsToShow = programsToShow.filter((program) => program.programType === programType)
  const totalPages = getTotalPages(programsToShow, PROGRAMS_PER_PAGE)
  programsToShow = programsToShow.slice(current, current + PROGRAMS_PER_PAGE)

  useEffect(() => {
    setCurrent(0)
    setCurrentPage(1)
  }, [isFiltered, totalPages])

  if (error) return <Error />
  else if (loading) return <Loading />

  const handlePrevClick = () => {
    if (current > 0) {
      setCurrent(current - PROGRAMS_PER_PAGE)
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage === totalPages) return
    setCurrent(prevCurrent => prevCurrent + PROGRAMS_PER_PAGE)
    setCurrentPage(currentPage + 1)
  }

  return (
    <>

      <Pagination currentPage={currentPage} handleNextClick={handleNextClick} handlePrevClick={handlePrevClick} totalPages={totalPages} />
      <section className='list-of-cards'>
        {
         programsToShow.map(({ title, images, description, releaseYear }) =>
           <ProgramCard
             key={title}
             title={title}
             image={images['Poster Art'].url}
             description={description}
             releaseYear={releaseYear}
           />
         )
    }
      </section>
    </>
  )
}

export default ProgramCards
