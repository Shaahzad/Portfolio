import React from 'react'
import Navbar from './Navbar/Navbar'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Project from './Projects/Project'
import Skill from './skills/Skill'
import Home from './Home/Home'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Project/>}/>
        <Route path='/skills' element={<Skill/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App


      {/* <Project/>
      <Contact/>
      <Footer/> */}
