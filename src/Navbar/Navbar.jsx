import React from 'react'
import "./Navbar.css"
import { BrowserRouter,Link } from 'react-router-dom'
import Project from '../Projects/Project'


const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='fname'>Muhammad <span className='name'>Shahzad</span></h1>
      <li>
        <Link >
        <ul>Home</ul>
        </Link>
        <Link>
        Projects
        </Link>
        <Link>
        Contact
        </Link>
      </li>
    </div>
  )
}

export default Navbar