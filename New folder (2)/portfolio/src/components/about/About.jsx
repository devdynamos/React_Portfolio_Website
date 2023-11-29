import "./about.css"
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id= 'about' >
    <h5>Get to Know</h5>
    <h2>About Me</h2>

    <div className='container about__container'>
      <div className='about__me'>
        <div className='about__me-img'>
          <img src={ME} alt='About Image'/> 
        </div>

      </div>
      <div className='about__content'>
        <div className='about__cards'>
          <article className='about__card'>
            <FaAward className='about__icon' />
            <h5>Experience</h5>
            <small>1+ Years Working</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon' />
            <h5>Clients</h5>
            <small>6</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>10+ Completed</small>
          </article>
          
        </div>

        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quae esse sunt consectetur earum iusto sint animi expedita perspiciatis ducimus soluta repellendus facere aut deserunt, delectus voluptatibus voluptate. Nisi, est?
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>


      </div>


    </div>
    </section>
  )
}

export default about
