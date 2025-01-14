import React from 'react'
import { FaGithub,FaLinkedin } from 'react-icons/fa'
import { AspectRatio } from "@/components/ui/aspect-ratio"

const About = () => {
  return (
//   <div
//   className="hero h-[72vh] bg-cover bg-center bg-no-repeat"
//   style={{
//     backgroundImage: "url('../../public/images/code.avif')",
//     backgroundRepeat: "no-repeat",
//     backgroundSize: "cover",
//     backgroundPosition: "center"
//   }}>
//   <div className="hero-overlay bg-opacity-60"></div>
//   <div className="hero-content text-neutral-content">
//     <div className="max-w-[800px] px-2">
//       <h1 className="mb-5 text-5xl font-bold">Web And Mobile App Developer</h1>
//       <p className='font-bold'>
//       Highly motivated and results-oriented recent graduate with a strong foundation in the MERN Stack
//         <b className='text-pink-500'> (MongoDB, Express.js, React.js, Node.js And React Native).</b>
//        Eager to leverage technical skills and problem-solving abilities to contribute to the development of innovative
//       web And Mobile applications within a collaborative team environment. Possesses excellent communication, critical thinking,
//      and learning agility to thrive in a fast-paced technological landscape.
//       </p>
      
//     </div>
//   </div>
// </div>
<div className="w-[450px]">
  <AspectRatio ratio={16 / 9}>
    <image src="../../public/images/code.avif" alt="Image" className="rounded-md object-cover"/>
  </AspectRatio>
</div>
  )
}



export default About
 
