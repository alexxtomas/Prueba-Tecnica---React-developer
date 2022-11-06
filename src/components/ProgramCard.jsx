import { useState } from 'react'
import Popup from './Popup'

const ProgramCard = ({ image, title, description, releaseYear }) => {
  const [popup, setPopup] = useState(false)
  const handleClick = () => setPopup(!popup)
  return (
    <figure onClick={handleClick}>
      <img
        src={image} alt={`${title} image`} onError={(evt) => {
          evt.target.src = '../../public/default.jpg'
        }}
      />
      <figcaption>{title}</figcaption>
      <Popup trigger={popup} setTrigger={handleClick} content={{ title, image, description, releaseYear }} />
    </figure>
  )
}

export default ProgramCard
