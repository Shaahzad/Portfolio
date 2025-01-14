import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import About from './About/About'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <About/>
      </BrowserRouter>
    </div>
  )
}

export default App


      {/* <Project/>
      <Contact/>
      <Footer/> */}
