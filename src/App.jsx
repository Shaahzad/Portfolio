import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      </BrowserRouter>
    </div>
  )
}

export default App


      {/* <Project/>
      <Contact/>
      <Footer/> */}
