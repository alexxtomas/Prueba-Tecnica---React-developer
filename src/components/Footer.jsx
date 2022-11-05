import Links from './Links'

const Footer = () => {
  return (
    <footer>
      <div className='parrafs'>
        <p>Home </p>
        <p>|</p>
        <p>Terms and Conditions </p>
        <p>|</p>
        <p>Privacy Policy </p>
        <p>|</p>
        <p>Collection Statement </p>
        <p>|</p>
        <p>Help </p>
        <p>|</p>
        <p>Manage Account</p>
      </div>
      <div className='copyright'>
        <p>Copyright © 2016 DEMO Streaming ALL Rights Reserved.</p>
      </div>
      <div className='links-container'>
        <Links type='socialMedia' />
        <Links type='store' />
      </div>
    </footer>
  )
}

export default Footer
