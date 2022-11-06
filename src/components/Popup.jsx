
const Popup = ({ trigger, setTrigger, content }) => {
  const { title, description, releaseYear, image } = content
  return (
    trigger
      ? (
        <div className='popup'>
          <div className='popup-inner'>
            <div className='popup-header'>
              <h2>{title}</h2>
              <button className='close-btn' onClick={setTrigger}>&times;</button>
            </div>
            <div className='popup-main'>
              <p>{description}</p>
              <img
                src={image} alt={`${title} image`} onError={(evt) => {
                  evt.target.src = '../../public/default.jpg'
                }}
              />
              <p>Release Year: {releaseYear}</p>
            </div>
          </div>
        </div>
        )
      : ''
  )
}

export default Popup
