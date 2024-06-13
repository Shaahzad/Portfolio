import React from 'react'
import "./Navbar.css"
import Resume from "../../src/images/Muhammad Shahzad.pdf"

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='fname'>Muhammad <span className='name'>Shahzad</span></h1>
      <button>
        <a href={Resume} download="Muhammad Shahzad.pdf">
        Download Resume
        </a>
      </button>
    </div>
  )
}

export default Navbar