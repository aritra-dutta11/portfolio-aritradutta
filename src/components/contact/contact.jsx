import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ncmnn5h', 'template_axyzb8g', form.current, 'Bi0_HCr1hckEh57gk')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>GET IN TOUCH</h5>
      <h2>CONTACT ME</h2>
      <div className="container contact_container">
        <div className="contact_options">
        <article className='contact_option'>
          <AiOutlineMail className='contacticon'/>
          <h4>Email</h4>
          <h5>aritra.dutta.11052002</h5>
          <h5>@gmail.com</h5>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aritra.dutta.11052002@gmail.com" target='_blank'>Send a message</a>
        </article>

        <article className='contact_option'>
          <RiMessengerLine className='contacticon'/>
          <h4>Messenger</h4>
          <h5>Aritra Dutta</h5>
          <a href="https://m.me/aritra.dutta.7796" target='_blank'>Send a message</a>
        </article>

        <article className='contact_option'>
          <FaWhatsapp className='contacticon'/>
          <h4>Whatsapp</h4>
          <h5>+91 9875380964</h5>
          <a href="https://wa.me/+919875380964" target='_blank'>Send a message</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='YOUR FULL NAME' required/>
          <input type="email" name='email' placeholder='YOUR EMAIL' required/>
          <textarea name="message" id="message" cols="30" rows="7" placeholder='TYPE YOUR MESSAGE'></textarea>
          <button type='submit' className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
