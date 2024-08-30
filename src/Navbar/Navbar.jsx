import React from 'react'
import "./Navbar.css"
import Resume from "../../public/images/Muhammad Shahzad Mern.pdf"

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='fname'>Muhammad <span className='name'>Shahzad</span></h1>
      <button>
        <a href={Resume} download="Muhammad Shahzad Mern.pdf">
        Download Resume
        </a>
      </button>
    </div>
  )
}

export default Navbar