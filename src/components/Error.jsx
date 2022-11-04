const Error = ({ text }) => {
  if (!text || typeof text === 'string') text = 'Oops, something went wrong...'
  return (
    <div>
      <h3>{text}</h3>
    </div>
  )
}

export default Error
