import React from 'react'
import './About.css'
import myphoto from '../../assets/myphoto1.jpg'
import {FaAward} from 'react-icons/fa'
import {MdSubject} from 'react-icons/md'
import {MdCastForEducation} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>GET TO KNOW</h5>
      <h2>ABOUT ME</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="myimage">
            <img src={myphoto} alt="me" />
          </div>
        </div>

        <div className="about_writeup">
          <div className="cards">
            <article className='aboutcard'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='aboutcard'>
              <MdCastForEducation className='about_icon'/>
              <h5>Course</h5>
              <small>Bachelor of Technology</small>
            </article>

            <article className='aboutcard'>
              <MdSubject className='about_icon'/>
              <h5>Stream</h5>
              <small>Information Technology</small>
            </article>
          </div>
          <p>
          I am Aritra Dutta, a 3rd Year student pursuing a Bachelor of Technology in Information Technology from Heritage Institute of Technology. Being a fresher, I am looking for internships and part-time job opportunities where I could showcase my skills. I am a hard-working, diligent, persistent team player,  and I hope my contributions will be of great use to your organization.
          </p>

          <a href="#contact" className='btn btn-primary'>Message Me</a>
        </div>
      </div>
    </section>
  )
}

export default About
