import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center px-12 py-4 bg-purple-400'>
      <Link to="/">
      <h1 className='text:xl md:text-3xl font-bold text-white'>Muhammad Shahzad</h1>
      </Link>
        <ul className='md:flex items-center gap-16 text-white font-bold hidden'>
          <li className='hover:bg-gray-300 text-xl rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer transition ease-in-out delay-150'>
            <Link to="/">
            Home
            </Link>
          </li>
          <li className='hover:bg-gray-300 text-xl rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer transition ease-in-out delay-150'>
            <Link to="/projects">
            Projects
            </Link>
          </li>
          <li className='hover:bg-gray-300 text-xl rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer transition ease-in-out delay-150'>
            <Link to="/skills">
            Skills
            </Link>
          </li>
        </ul>
        <Sidebar/>
      </div>
    </>
  )
}

export default Navbar