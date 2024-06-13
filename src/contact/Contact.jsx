import React from 'react'
import "./contact.css"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'
import { FaLinkedin } from 'react-icons/fa'
const Contact = () => {
  return (
    <div>
      <h1 className='contact'>Contact Me</h1>
      <div className='contact-container'>
      <img className='contact-img' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="" />
      <p className='contact-p'>
        If you have any questions or would like to work together, please don't hesitate to contact me.
        I am currently looking for full-time opportunities. If you have a project that you want to get
        started or think you need my help with something, then get in touch.
        <br /> 
        <div className='contact-icon'>
          <img className='gmail-img' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="" />
           shehzadmemon147@gmail.com 
     <br />
        </div>
         </p>
      </div>
    </div>
  )
}

export default Contact


