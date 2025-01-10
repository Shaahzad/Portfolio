import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
  <footer className="flex md:flex-row  footer bg-neutral text-neutral-content md:p-8 p-4 md:h-40 h-40 fixed bottom-0 w-full">
    <aside>
      <p>
        Muhammad Shahzad
        <br />
        Web And Mobile App Developer
      </p>
    </aside>
    <nav>
      <h6 className="footer-title">Social</h6>
      <div className="grid grid-flow-col gap-4">
      <div className="flex space-x-8 md:space-x-4 mt-2">
   <a href="https://github.com/shaahzad" target="_blank" className="btn btn-primary">
         <FaGithub/>
         </a>
         <a href="https://www.linkedin.com/in/mshahzad-/" target="_blank" className="btn btn-primary">
         <FaLinkedin/>
         </a>
         </div>
      </div>
    </nav>
  </footer>
  )
}

export default Footer