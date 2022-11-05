import socialMedia from '../data/socialMedia'
import store from '../data/store'
import Link from './Link'

const Links = ({ type }) => {
  if (!type || typeof type !== 'string') type = 'socialMedia'

  if (type === 'socialMedia') {
    return (
      <div className='social-media'>
        {
                socialMedia.map(({ name, href, src }) => <Link key={name} href={href}><img src={src} alt={`${name} Logo`} /></Link>)
            }
      </div>
    )
  } else if (type === 'store') {
    return (
      <div className='store'>
        {
                store.map(({ name, href, src }) => <Link key={name} href={href}><img src={src} alt={`${name} Logo`} /></Link>)
            }
      </div>
    )
  }
}

export default Links
