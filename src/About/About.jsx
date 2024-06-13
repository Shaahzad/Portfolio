import React from 'react'
import './About.css'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
const About = () => {
  return (
    <>
    <div className='img-container'>
        <img src="/images/shahzad-removebg-preview.png" className='about-img'/>
    <div className='about-text'>
        <h1>Mern Stack Developer</h1>
        <p>Highly motivated and results-oriented recent graduate with a strong foundation in the MERN Stack
          (MongoDB, Express.js, React.js, Node.js).
          Eager to leverage technical skills and problem-solving abilities to contribute to the development of innovative
           web applications within a collaborative team environment. Possesses excellent communication, critical thinking,
           and learning agility to thrive in a fast-paced technological landscape.</p>
           <div>
            <p className='follow'>Follow And Connects With Me</p>
           <a href="https://github.com/shaahzad" target="_blank">
           <FaGithub/>
           </a>
           <a href="https://www.linkedin.com/in/mshahzad-/" target="_blank">
           <FaLinkedin className='linkedin'/>
           </a>
           </div>
    </div>
    </div>
    </>
  )
}

export default About