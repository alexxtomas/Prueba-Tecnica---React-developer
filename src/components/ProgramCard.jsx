
const ProgramCard = ({ image, title }) => {
  return (
    <figure>
      <img
        src={image} alt={`${title} image`} onError={(evt) => {
          evt.target.src = '../../public/default.jpg'
        }}
      />
      <figcaption>{title}</figcaption>
    </figure>
  )
}

export default ProgramCard
