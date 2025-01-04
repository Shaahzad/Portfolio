import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
const About = () => {
  return (
    <div className="hero min-h-screen px-8">
    <div className="hero-content flex-col md:flex-row-reverse">
      <img src="/images/shahzad-removebg-preview.png" className="max-w-sm rounded-lg shadow-2xl h-60 md:h-80"/>
      <div className="text-center text-white md:text-left">
        <h1 className="text-5xl font-bold">Mern Stack Developer</h1>
        <p className="py-6 text-center md:text-left">
        Highly motivated and results-oriented recent graduate with a strong foundation in the MERN Stack
       (MongoDB, Express.js, React.js, Node.js).
       Eager to leverage technical skills and problem-solving abilities to contribute to the development of innovative
       web applications within a collaborative team environment. Possesses excellent communication, critical thinking,
       and learning agility to thrive in a fast-paced technological landscape.
        </p>
        <div className="space-x-4 flex justify-center items-center flex-col md:flex-row md:text-left md:justify-start">
        <p>Follow And Connect With Me</p>
        <div className="flex space-x-4 mt-2">
        <a href="https://github.com/shaahzad" target="_blank" className="btn btn-primary">
        <FaGithub/>
        </a>
        <a href="https://github.com/shaahzad" target="_blank" className="btn btn-primary">
        <FaLinkedin/>
        </a>
        </div>
        </div>
      </div>
    </div>
  </div>
  )
}



export default About
 
