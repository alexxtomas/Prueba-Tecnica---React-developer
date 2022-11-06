
const Pagination = ({ currentPage, totalPages, handlePrevClick, handleNextClick }) => {
  return (
    <div className='pagination'>
      <p>{currentPage} of {totalPages} </p>
      <button onClick={handlePrevClick}><i className='fa-solid fa-chevron-left' /></button>
      <button onClick={handleNextClick}><i className='fa-solid fa-chevron-right' /></button>
    </div>
  )
}

export default Pagination

//
