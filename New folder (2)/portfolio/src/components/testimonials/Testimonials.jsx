import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Sana Javaid',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dicta deserunt incidunt fuga et a quia non quisquam? Totam in debitis tempora dolores vero id a numquam voluptates cumque iste!'

  },
  {
    avatar: AVTR2,
    name: 'Zain Baloch',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dicta deserunt incidunt fuga et a quia non quisquam? Totam in debitis tempora dolores vero id a numquam voluptates cumque iste!'

  },
  {
    avatar: AVTR3,
    name: 'Ayesha Omer',
    review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, dicta deserunt incidunt fuga et a quia non quisquam? Totam in debitis tempora dolores vero id a numquam voluptates cumque iste!'

  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
          <div className="client__avatar">
            <img src={avatar} />
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className="client__review">{review}</small>
        </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
