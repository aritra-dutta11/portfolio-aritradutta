import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
const footer = () => {
  return (
    <footer>
      <ul className='footerlinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
          <a href="https://www.facebook.com/aritra.dutta.7796" target='_blank'><FaFacebookF/></a>
          <a href="https://www.instagram.com/_a__r__i__t__r__a/" target='_blank'><FaInstagram/></a>
          <a href="https://twitter.com/AritraD56814367" target='_blank'><FaTwitter/></a>
      </div>

      <div className='copyright'>
        <small>&copy; Aritra Dutta. 2023. All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default footer
