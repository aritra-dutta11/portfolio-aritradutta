import React from 'react'
import './header.css'
import CTA from './cta'
import Socials from './socials'
import myphoto from '../../assets/myphoto.png'
import {AiOutlineArrowRight} from 'react-icons/ai'
const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aritra Dutta</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA /> 
        <Socials/>

        <div className="me">
          <img src={myphoto} alt="myphoto" className='photo'/>
          
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down <AiOutlineArrowRight/></a>
      </div>
    </header>
  )
}

export default header
