import React from 'react'
import "./Navbar.css"


const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Muhammad <span className='name'>Shahzad</span></h1>
      <li>
        <ul>Home</ul>
        <ul>About</ul>
        <ul>Projects</ul>
        <ul>Contact</ul>
      </li>
    </div>
  )
}

export default Navbar