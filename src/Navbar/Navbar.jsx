import React from 'react'
import "./Navbar.css"
import Resume from "/images/Muhammad Shahzad resume.pdf"

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='fname'>Muhammad <span className='name'>Shahzad</span></h1>
      <button>
        <a href={Resume} download="Muhammad Shahzad resume.pdf">
        Download Resume
        </a>
      </button>
    </div>
  )
}

export default Navbar