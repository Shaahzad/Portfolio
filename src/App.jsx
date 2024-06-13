import React from 'react'
import Navbar from './Navbar/Navbar'
import Project from './Projects/Project'
import About from './About/About'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import Skill from './skills/Skill'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App