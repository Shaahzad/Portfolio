import React from 'react'
import Navbar from './Navbar/Navbar'
import Project from './Projects/Project'
import About from './About/About'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <About/>
      <Project/>
      </BrowserRouter>
    </div>
  )
}

export default App