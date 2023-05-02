import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {BiUser} from 'react-icons/bi'
import {BiBookAlt} from 'react-icons/bi'
import {AiOutlineContacts} from 'react-icons/ai'
import { useState } from 'react'
import { useScrollPosition } from '../../hooks/useScrollPosition'


const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  const scrollPosition = useScrollPosition()
  console.log(scrollPosition)
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} ><BiUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><BiBookAlt/></a>
      
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} ><AiOutlineContacts/></a>
  
  </nav>
  )
}

export default Nav
