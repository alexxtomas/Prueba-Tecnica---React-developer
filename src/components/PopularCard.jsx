import { useNavigate } from 'react-router-dom'

const PopularCard = ({ programType }) => {
  const navigate = useNavigate()
  if (!programType || typeof programType !== 'string') {
    programType = 'default'
  }

  if (programType === 'movie') programType = programType + 's'

  const formattedProgramType = programType.charAt(0).toUpperCase() + programType.slice(1)

  return (
    <div className='popular-card' onClick={() => navigate(`/${programType}`)}>
      <div className='black-background'>
        <img src='/placeholder.png' alt='Clapperboard Image' />
        <h3>{formattedProgramType}</h3>
      </div>
      <p>Popular {formattedProgramType}</p>
    </div>
  )
}

export default PopularCard
