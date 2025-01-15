import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'

const About = () => {
  return (
  // <div className="hero min-h-screen px-8 ">
  //   <div className="hero-content flex-col md:flex-row-reverse">
  //     <img src="/images/shahzad-removebg-preview.png" className="max-w-sm animate-pulse rounded-lg shadow-2xl h-40 md:h-80"/>
  //     <div className="text-center md:mt-[50px] text-white md:text-left">
  //       <h1 className="md:text-5xl md:font-bold text-2xl"></h1>
  //       <p className="py-6 text-center md:font-bold md:text-left">
  //       
  //       </p>
  //       <div className="space-x-4 flex justify-center items-center flex-col md:flex-row md:text-left md:justify-start">
  //       <p className="font-bold">Follow And Connect With Me</p>
  //       
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <div
  className="h-[90.5vh] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('../../public/images/bg.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}>
  <div className="flex items-center justify-center h-full bg-gray-900 bg-opacity-50">
    <div className="max-w-[800px] px-8 md:px-8">
      <h1 className="mb-5 text-2xl md:text-5xl md:text-start font-bold text-white">Web And Mobile App Developer</h1>
      <p className='font-bold text-white md:text-xl'>
      Highly motivated and results-oriented recent graduate with a strong foundation in the MERN Stack
        <b className='text-pink-500'> (MongoDB, Express.js, React.js, Node.js And React Native).</b>
       Eager to leverage technical skills and problem-solving abilities to contribute to the development of innovative
      web And Mobile applications within a collaborative team environment. Possesses excellent communication, critical thinking,
     and learning agility to thrive in a fast-paced technological landscape.
      </p>
      
    </div>
  </div>
</div>
  )
}



export default About
 
