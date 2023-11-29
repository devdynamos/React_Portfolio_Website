import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs'
import {SiFiverr} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank" rel="noreferrer"><BsLinkedin /></a>
        <a href='https://github.com' target='_blank' rel="noreferrer"><BsGithub /></a>
        <a href='https://fiverr.com' target='_blank' rel="noreferrer"><SiFiverr /></a>
        
      
    </div>
  )
}

export default HeaderSocials
