import React from 'react'
import "./Project.css"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Link } from '@chakra-ui/react'
const Project = () => {
  return (
    <>
    <div className='project'>
       <h1>Projects</h1>
        <div className='project-link'>
       <Link href='https://github.com/Shaahzad/Social_media-MERN' isExternal>
      Social Media App Mern Stack
     </Link>       
     <Link href='https://github.com/Shaahzad/YOUTUBE_MERN' isExternal>
      Youtube App Mern Stack
     </Link>
     <Link href='https://github.com/Shaahzad/Ticket_Mern' isExternal>
      Ticket Booking App Mern Stack
     </Link>
     <Link href='https://github.com/Shaahzad/BookStore-MERN' isExternal>
      Book Store App Mern Stack
     </Link>
     <Link href='https://github.com/Shaahzad/LinkedIn_' isExternal>
      LinkedinClone With React & Firebase 
     </Link>
     <Link href='https://foods-api.netlify.app' isExternal>
      search Food Api
     </Link>
      </div>
      </div>
    </>
  )
}

export default Project