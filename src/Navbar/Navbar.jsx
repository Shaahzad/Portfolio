import { DrawerBackdrop, DrawerRoot } from '@/components/ui/drawer';
import React from 'react'
import { FaHamburger } from "react-icons/fa";


const Navbar = () => {

  const HandleSideBar = () => {
      return (
        <DrawerRoot>
          <DrawerBackdrop />
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm">
              Open Drawer
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Drawer Title</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </DrawerBody>
            <DrawerFooter>
              <DrawerActionTrigger asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerActionTrigger>
              <Button>Save</Button>
            </DrawerFooter>
            <DrawerCloseTrigger />
          </DrawerContent>
        </DrawerRoot>
      )
  }
  return (
    <div className='flex justify-between items-center px-8 py-4 bg-purple-400'>
      <h1 className='text-3xl font-bold text-white'>Navbar</h1>
        <ul className='md:flex items-center gap-4 text-white font-bold hidden'>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer'>Home</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer'>About</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer'>Contact</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer'>Projects</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer'>Skills</li>
        </ul>
          <FaHamburger size={25} className='flex md:hidden' onClick={HandleSideBar}/>
      </div>
  )
}

export default Navbar