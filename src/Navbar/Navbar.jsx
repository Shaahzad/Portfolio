import React from 'react';

const Navbar = () => {
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="navbar w-full bg-purple-500 text-white shadow-lg">
          <div className="flex-1 px-2 mx-2 font-bold font-mono">Muhammad Shahzad</div>
          <div className="flex-none md:hidden">   
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="hidden md:block">
            <ul className="menu menu-horizontal p-0">
              {/* Navbar menu items */}
              <li className='font-mono font-bold'><a>Home</a></li>
              <li className='font-mono font-bold'><a>About</a></li>
              <li className='font-mono font-bold'><a>Projects</a></li>
              <li className='font-mono font-bold'><a>Skills</a></li>
              <li className='font-mono font-bold'><a>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu bg-purple-500 h-full w-80 p-4 flex justify-center items-center">
          {/* Sidebar content here */}
          <li className='font-mono font-bold text-xl'><a>Home</a></li>
          <li className='font-mono font-bold text-xl'><a>About</a></li>
          <li className='font-mono font-bold text-xl'><a>Projects</a></li>
          <li className='font-mono font-bold text-xl'><a>Skills</a></li>
          <li className='font-mono font-bold text-xl'><a>Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
