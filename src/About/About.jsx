import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
    <>
  <div className="hero min-h-screen px-8">
    <div className="hero-content flex-col md:flex-row-reverse">
      <img src="/images/shahzad-removebg-preview.png" className="max-w-sm animate-pulse rounded-lg shadow-2xl h-40 md:h-80"/>
      <div className="text-center md:mt-[50px] text-white md:text-left">
        <h1 className="md:text-5xl md:font-bold text-2xl">Web And Mobile App Developer</h1>
        <p className="py-6 text-center md:font-bold md:text-left">
        Highly motivated and results-oriented recent graduate with a strong foundation in the MERN Stack
        <b className='text-pink-500'> (MongoDB, Express.js, React.js, Node.js And React Native).</b>
       Eager to leverage technical skills and problem-solving abilities to contribute to the development of innovative
       web And Mobile applications within a collaborative team environment. Possesses excellent communication, critical thinking,
       and learning agility to thrive in a fast-paced technological landscape.
        </p>
        <div className="space-x-4 flex justify-center items-center flex-col md:flex-row md:text-left md:justify-start">
        <p className="font-bold">Follow And Connect With Me</p>
        <div className="flex space-x-8 md:space-x-4 mt-2">
        <a href="https://github.com/shaahzad" target="_blank" className="btn btn-primary">
        <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/mshahzad-/" target="_blank" className="btn btn-primary">
        <FaLinkedin/>
        </a>
        </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}



export default About
 
