import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
const socials = () => {
  return (
    <div className='header_socials'>
      <a href="https://www.linkedin.com/in/aritra-dutta-209951226/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/aritra-dutta11" target="_blank"><BsGithub/></a>
      <a href="https://www.instagram.com/_a__r__i__t__r__a/" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default socials
