import React from 'react'
import { FaHamburger } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet.jsx";

const Sidebar = () => {
  return (
  <Sheet>
  <SheetTrigger className='md:hidden'>
  <FaHamburger size={20} className='flex md:hidden cursor-pointer'/>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader className='mt-40'>
      <ul className='flex flex-col justify-center items-center gap-4 text-black font-bold'>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer transition ease-in-out delay-150'>Home</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer transition ease-in-out delay-150'>Projects</li>
          <li className='hover:bg-gray-300 rounded px-2 py-2 hover:px-2 hover:py-2 cursor-pointer transition ease-in-out delay-150'>Skills</li>
        </ul>
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}

export default Sidebar