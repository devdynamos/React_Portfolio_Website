import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jgfapw5', 'template_pcyh81e', form.current, 'xN5qH9pisGUVLTQ7x')
    e.target.reset();
  };
  return (
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon '/>
            <h4>Email</h4>
            <h5>muhammadhamzamalik225@gmail.com</h5>
            <a href='mailto:muhammadhamzamalik225@gmail.com' target='blank' >Send a message</a>
          </article>
          <article className="contact__option">
          <RiMessengerLine className='contact__option-icon ' />
            <h4>Messenger</h4>
            <h5>HamzaMalik</h5>
            <a href='https://m.me/ernest.achiever' target='blank' >Send a message</a>
          </article>
          <article className="contact__option">
          <FaWhatsapp className='contact__option-icon '/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href='https://api.whatsapp.com/send?phone+923342112000' target='blank' >Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows= "7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact
