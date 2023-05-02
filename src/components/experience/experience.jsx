import React from 'react'
import './experience.css'
import {TbDiscountCheckFilled} from 'react-icons/tb'
const experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
              

            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
              </div>
              

            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div><h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>ReactJS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>NodeJS</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>ExpressJS</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

          </div>
        </div>

        <div className="programming">
          <h3>Programming</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>C</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>DBMS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>OOPS</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>


            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>DSA</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>


          </div>
        </div>

        <div className="others">
          <h3>Other Skills</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>English</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>MS Excel</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>MS Word</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>Ms Powerpoint</h4>
              <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className='experience_details'>
              <TbDiscountCheckFilled className='expicon'/>
              <div>
              <h4>Design</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
