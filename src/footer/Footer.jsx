import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10 ">
  <aside>
    <h1 className="footer-title">Muhammad Shahzad</h1>
    <p className="text-sm">
      A web and mobile app developer based in Pakistan. I specialize in
      <br />
      creating innovative and user-friendly web and mobile applications.
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
            <a href="https://github.com/shaahzad" target="_blank">
            <FaGithub size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/mshahzad-/" target="_blank">
            <FaLinkedin size={20}/>
            </a>
            </div>
  </nav>
</footer>
  )
}

export default Footer