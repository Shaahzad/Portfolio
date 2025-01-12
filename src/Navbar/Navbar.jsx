import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-purple-400'>
      <h1 className='text-3xl font-bold text-white' >Navbar</h1>
        <ul className='flex items-center gap-4 text-white font-bold'>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer'>Home</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer'>About</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer'>Contact</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer'>Projects</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer'>Skills</li>
        </ul>
      </div>
  )
}

export default Navbar