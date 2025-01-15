import React, { useState } from 'react'
import Sidebar from '../Sidebar/Sidebar';


const Navbar = () => {
  return (
    <>
    <div className='flex justify-between items-center px-8 py-4 bg-purple-400'>
      <h1 className='text:xl md:text-3xl font-bold text-white'>Muhammad Shahzad</h1>
        <ul className='md:flex items-center gap-4 text-white font-bold hidden'>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer transition ease-in-out delay-150'>Home</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer transition ease-in-out delay-150'>About</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer transition ease-in-out delay-150'>Contact</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer transition ease-in-out delay-150'>Projects</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer transition ease-in-out delay-150'>Skills</li>
        </ul>
        <Sidebar/>
      </div>
    </>
  )
}

export default Navbar